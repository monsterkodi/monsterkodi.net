<?
// ------------------------------------------------------------------------------------------------------------------------------------------------
/* 
   addscore_test.php
   
   http://monsterkodi.net/koogel/db/addscore_test.php?name=kodi&level=1&points=10&time=0&hits=20
   
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
$table = "koogel_test";

$place = array(-1, -1, -1);
$r_string = "&errorcode=0";

if (!mysql_connect($server, $username, $password)) die('&errorcode=1&');
if (!mysql_select_db($database))  die('&errorcode=2&');

// ------------------------------------------------------------------------------------------------------------------------------------------------

function setscore($highscore, $sortfield, $compvalue, $ascdesc)
{
	global $r_string, $place, $table;

	$name 	= addslashes($_GET['name']);
	$level 	= $_GET['level'];
	$points = $_GET['points'];
	$time   = $_GET['time'];
	$hits   = $_GET['hits'];
	$now 	= date("Y-m-d");

	$ordering = $sortfield ." ". $ascdesc;
	if ($sortfield != "points") $ordering .= ", points DESC";

	$qs = "SELECT * from ". $table ." WHERE highscore=".$highscore." AND level=".$level." ORDER BY ".$ordering;
	$result = mysql_query($qs);

	if (!$result) die('&errorcode=3&msg='.mysql_error().$qs.'&');

	$num_rows = mysql_num_rows($result);
    $rows_returned = $num_rows;

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
			
			while (list ($key, $val) = each ($row))
			{
				$index = $i; if ($add_entry) $index += 1;
				$r_string .= '&' . $key .'_'. $highscore .'_'. $index . '=' . stripslashes($val);
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
			$del_str = "DELETE FROM ". $table ." WHERE id=".$lastid;
			mysql_query ($del_str);
		}
		else
		{
			$rows_returned += 1;
		}
		
	     $r_string .= '&name_'. 		$highscore .'_'. $place[$highscore] . '=' . stripslashes($name);
	 	 $r_string .= '&level_'. 		$highscore .'_'. $place[$highscore] . '=' . stripslashes($level);
	     $r_string .= '&highscore_'. 	$highscore .'_'. $place[$highscore] . '=' . stripslashes($highscore);
	     $r_string .= '&points_'. 		$highscore .'_'. $place[$highscore] . '=' . stripslashes($points);
	     $r_string .= '&time_'. 		$highscore .'_'. $place[$highscore] . '=' . stripslashes($time);
	     $r_string .= '&hits_'. 		$highscore .'_'. $place[$highscore] . '=' . stripslashes($hits);
	     $r_string .= '&date_'. 		$highscore .'_'. $place[$highscore] . '=' . stripslashes($now);		
		
		$ins_str = "INSERT INTO ". $table ." VALUES ('".$name."', '".$level."', '".$highscore."', '".$points."', '".$time."', '".$hits."', '".$now."', NULL)";		
		if (!mysql_query ($ins_str)) die('&errorcode=4&msg='.mysql_error());
    }
    
	$r_string .= "&". $sortfield ."=". $place[$highscore];
	
	$r_string .= "&n_". $highscore ."=". $rows_returned;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

setscore(0, "points", $_GET['points'], "DESC");
setscore(1, "time", $_GET['time'], "ASC");
setscore(2, "hits", $_GET['hits'], "ASC");

echo $r_string;

?>