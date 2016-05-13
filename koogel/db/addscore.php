<?
// ------------------------------------------------------------------------------------------------------------------------------------------------
/* 
   addscore.php
   
   http://monsterkodi.net/koogel/db/addscore.php?name=kodi&level=2&points=10&time=0&hits=20
   
	errorcodes:
      0: successful select
      1: can't connect to server
      2: can't connect to database
    >=3: error while running query
*/
// ------------------------------------------------------------------------------------------------------------------------------------------------

$server = "www.monsterkodi.net";
$username = "monstepeuser";
$password = "YJecGlfa";
$database = "monstepedb";

$place = array(-1, -1, -1);
$r_string = "&errorcode=0";

if (!mysql_connect($server, $username, $password)) die('&errorcode=1&');
if (!mysql_select_db($database))  die('&errorcode=2&');

// ------------------------------------------------------------------------------------------------------------------------------------------------

function getscore ($highscore, $sortfield, $ascdesc)
{
	global $r_string;
	 
	$ordering = $sortfield ." ". $ascdesc;
	if ($sortfield != "points") $ordering .= ", points DESC";
	$result = mysql_query("SELECT * from koogel_highscore WHERE level=".$_GET['level']." AND highscore=".$highscore." ORDER BY ".$ordering);
	if (!$result) die('&errorcode=5&msg='.mysql_error().'&');
	
	$num_rows = mysql_num_rows($result);
	
	$r_string .= "&n_". $highscore ."=". $num_rows;
	
	$i = 0;
	if ($num_rows > 0)
	{
		while ($row = mysql_fetch_assoc ($result)) 
		{
			while (list ($key, $val) = each ($row))
			{
				$r_string .= '&' . $key .'_'. $highscore .'_'. $i . '=' . stripslashes($val);
			}
			$i++;
		}
	}
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

function setscore($highscore, $sortfield, $compvalue, $ascdesc)
{
	global $r_string, $place;

	$name 	= addslashes($_GET['name']);
	$level 	= $_GET['level'];
	$points = $_GET['points'];
	$time   = $_GET['time'];
	$hits   = $_GET['hits'];
	$now 	= date("Y-m-d");

	$ordering = $sortfield ." ". $ascdesc;
	if ($sortfield != "points") $ordering .= ", points DESC";

	$qs = "SELECT * from koogel_highscore WHERE highscore=".$highscore." AND level=".$level." ORDER BY ".$ordering;
	$result = mysql_query($qs);

	if (!$result) die('&errorcode=3&msg='.mysql_error().$qs.'&');

	$num_rows = mysql_num_rows($result);

	$add_entry = 0; 
	$lastid = 0;
    $i = 0;

	if ($num_rows == 0) // first entry
	{
		$add_entry = 1; $place[$highscore] = 0;
	}
    else
    {
		while ($row = mysql_fetch_assoc ($result))
		{
			if (!$add_entry && $i < 100 &&
				($ascdesc == "DESC" && $compvalue > $row[$sortfield] ||
			     $ascdesc == "ASC"  && ($compvalue < $row[$sortfield] || $compvalue == $row[$sortfield] && $points > $row['points'])
			    )
			   ) 
			{
			     $add_entry = 1; $place[$highscore] = $i;
			}
			
			$i++;
	
			$lastid = $row["id"];
		}
	}
	
	if (!$add_entry && $i < 100) { $add_entry = 1; $place[$highscore] = $i; }
		
	if ($add_entry) 
	{
		if ($i >= 99) 
		{
			$del_str = "DELETE FROM koogel_highscore WHERE id=".$lastid;
			mysql_query ($del_str);
		}
		
		$ins_str = "INSERT INTO koogel_highscore VALUES ('".$name."', '".$level."', '".$highscore."', '".$points."', '".$time."', '".$hits."', '".$now."', NULL)";		
		if (!mysql_query ($ins_str)) die('&errorcode=4&msg='.mysql_error());
    }
    
	$r_string .= "&". $sortfield ."=". $place[$highscore];
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

setscore(0, "points", $_GET['points'], "DESC");
setscore(1, "time", $_GET['time'], "ASC");
setscore(2, "hits", $_GET['hits'], "ASC");

getscore(0, "points", "DESC");
getscore(1, "time", "ASC");
getscore(2, "hits", "ASC");

echo $r_string;

?>