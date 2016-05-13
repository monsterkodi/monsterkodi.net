<?
/*
   getscore_test.php
   
   http://monsterkodi.net/koogel/db/getscore_test.php?level=1
   
   errorcode:
      0: successful select
      1: can't connect to server
      2: can't connect to database
      3: error while running query
*/

$server = "www.monsterkodi.net";
$username = "monstepeuser";
$password = "YJecGlfa";
$database = "monstepedb";
$table = "koogel_test";

$r_string = "&errorcode=0";

if (!mysql_connect($server, $username, $password)) die('&errorcode=1&');
if (!mysql_select_db($database))  die('&errorcode=2&');

// ------------------------------------------------------------------------------------------------------------------------------------------------

function getscore ($highscore, $sortfield, $ascdesc)
{
	global $r_string, $table;
	 
	$ordering = $sortfield ." ". $ascdesc;
	if ($sortfield != "points") $ordering .= ", points DESC";
	$result = mysql_query("SELECT * from koogel_test WHERE level=".$_GET['level']." AND highscore=".$highscore." ORDER BY ".$ordering);
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

getscore(0, "points", "DESC");
getscore(1, "time", "ASC");
getscore(2, "hits", "ASC");

echo $r_string;
?>