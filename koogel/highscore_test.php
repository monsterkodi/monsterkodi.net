<?
/*
   highscore.php
*/

$server		= "www.monsterkodi.net";
$username	= "monstepeuser";
$password	= "YJecGlfa";
$database	= "monstepedb";
$table		= "koogel_test";

if (!mysql_connect($server, $username, $password)) die('&errorcode=1&');
if (!mysql_select_db($database))  die('&errorcode=2&');

$r = <<<HEADER
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>koogel highscore</title>
	<style type="text/css">
	<!--
	body {
		background-color: #000000; font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11;
	}

	.table_0 {background-color: #666666}
	.table_1 {background-color: #CC3333}
	.table_2 {background-color: #339933}

	/* header rows */
	.row_level_0 {background-color: #333333; color: #ffffff; font-size: 14px; text-align:center;}
	.row_score_0 {background-color: #666666; color: #000000; font-size: 12px; text-align:center;}
	.row_title_0 {background-color: #999999; color: #666666; font-size: 10px; text-align:center;}

	.row_level_1 {background-color: #990000; color: #ffffff; font-size: 14px; text-align:center;}
	.row_score_1 {background-color: #CC3333; color: #000000; font-size: 12px; text-align:center;}
	.row_title_1 {background-color: #FF9999; color: #CC3333; font-size: 10px; text-align:center;}

	.row_level_2 {background-color: #006600; color: #ffffff; font-size: 14px; text-align:center;}
	.row_score_2 {background-color: #339933; color: #000000; font-size: 12px; text-align:center;}
	.row_title_2 {background-color: #66CC66; color: #339933; font-size: 10px; text-align:center;}

	/* entry rows */
	.place_1 {font-size: 17px; color: #000000; font-weight:bold;}
	.place_2 {font-size: 16px; color: #000000; font-weight:bold;}
	.place_3 {font-size: 14px; color: #000000; font-weight:bold;}

	.row_0_0 {background-color: #CCCCCC; font-size: 11px;}
	.row_1_0 {background-color: #FFFFFF; font-size: 11px;}

	.row_0_1 {background-color: #FFCCCC; font-size: 11px;}
	.row_1_1 {background-color: #FFFFFF; font-size: 11px;}

	.row_0_2 {background-color: #CCFFCC; font-size: 11px;}
	.row_1_2 {background-color: #FFFFFF; font-size: 11px;}

	/* entry columns */
	.pos 	{text-align: left;}
	.name 	{text-align: center;}
	.time 	{text-align: center;}
	.date 	{text-align: center;}
	.points {text-align: center;}

	/* entry texts */
	.black 	{color: #000000; font-weight:bold;}
	.gray 	{color: #999999;}
	.red 	{color: #CC3333;}
	.green 	{color: #66CC66;}
	-->
	</style>
	</head>
	<body>
HEADER;

// ------------------------------------------------------------------------------------------------------------------------------------------------

function level_highscore ($level, $highscore)
{
	global $table;
	
	$columns = array();
	
	$fields = array('points', 'time', 'hits');
	$sortfield = $fields[$highscore];
	
	if ($sortfield == 'points') 
		$ordering = $sortfield." DESC";
	else
		$ordering = $sortfield." ASC".", points DESC";
	
	$result = mysql_query("SELECT * from ".$table." WHERE level=".$level." AND highscore=".$highscore." ORDER BY ".$ordering." LIMIT 10");
	if (!$result) die('&errorcode=5&msg='.mysql_error().'&');
	
	$num_rows = mysql_num_rows($result);

	$colors = array('gray', 'red', 'green');
	$color = $colors[($level-1)%3];
	$row_colors = array('place_1', 'place_2', 'place_3', 'black');

	$i = 0;
	while ($row = mysql_fetch_assoc ($result)) 
	{
		$columns[$i] = "";
		while (list ($key, $val) = each ($row))
		{
			if ($key != 'highscore' && $key != 'level' && $key != 'id')
			{
				$text_color = $color;
				if ($key == 'name' || $key == $sortfield) $text_color = $row_colors[min($i, 3)];
				if ($key != 'time') $text = stripslashes($val);
				else $text = date("H:i:s", intval($val));
				$columns[$i] .= '<td><div class="'. $key. ' '. $text_color .'">'. $text .'</div></td>';
			}
		}
		$i++;
	}
	
	return $columns;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

function level ($level)
{
	global $r;
	$hs_0 = level_highscore($level, 0);
	$hs_1 = level_highscore($level, 1);
	$hs_2 = level_highscore($level, 2);
	
	$li = ($level-1)%3;

	$r.= '<br/><br/>'."\n";
	$r.= '<table width="90%" border="0" align="center" cellpadding="4" cellspacing="1" class="table_'.$li.'">'."\n";
	$r.= '<tr class="row_level_'.$li.'"><th colspan="18">Level '.$level.'</th></tr>'."\n";
	$r.= '<tr class="row_score_'.$li.'"><th colspan="6">Points Highscore</th><th colspan="6">Time Highscore</th><th colspan="6">Hits Highscore</th></tr>'."\n";
	$r.= '<tr class="row_title_'.$li.'">'."\n";
	$r.= '<td>Pos</td><td>Name</td><td>Points</td><td>Time</td><td>Hits</td><td>Date</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>'."\n";
	$r.= '   		  <td>Name</td><td>Points</td><td>Time</td><td>Hits</td><td>Date</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td>'."\n";
	$r.= '			  <td>Name</td><td>Points</td><td>Time</td><td>Hits</td><td>Date</td>'."\n";
	$r.= '</tr>'."\n";
	
	$colors = array('gray', 'red', 'green');
	$color = $colors[($level-1)%3];

	for ($i = 0; $i < count($hs_0); $i++)
	{
		$r.= '<tr class="row_'.($i%2).'_'.$li.'">';
		$r.= '<td><div class="pos '. $color .'">'. ($i+1) .'.</div></td>'. $hs_0[$i];
		$r.= '<td></td>'. $hs_1[$i];
		$r.= '<td></td>'. $hs_2[$i];
		$r.= "</tr>\n";
	}
	
	$r.= '</table>';
}

foreach (range(1,15) as $i)
{
	level($i);
}

$r.= '</body></html>';

echo $r;
?>