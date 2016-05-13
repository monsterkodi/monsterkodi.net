
var currentTopic   = -1;
var currentFeature = "FEATURE_0";
var numFeatures    = 6;

// _______________________________________________________________________________________________________________
function showTopic(topic)
{
	topics = $(".topic_body").find(".topic_content");
	header = $("#topics").find(".topic_header");
	
	//$.log("show topic %d (last %d) headers %d", topic, currentTopic, header.length);
	
	if (topic != currentTopic)
	{				
		if (currentTopic >= 0)
		{
			var to = currentTopic > topic ? "800px" : "-800px";
			$(header[currentTopic]).removeClass("topic_active");
			  topics[currentTopic] .style.left = "0px";
			$(topics[currentTopic]).stop().log().animate({left: to, top: "0px"}, {easing: 'easeInOutSine', duration: 500}); 
				
			var from = currentTopic > topic ? "-800px" : "800px";
			$(header[topic]).addClass("topic_active");
			  topics[topic] .style.left = from;
			$(topics[topic]).stop().log().animate({left: "0px", top: "0px"}, {easing: 'easeInOutSine', duration: 500}); 
		}
		else
		{
			topics[topic].style.left = "0px";
			$(header[topic]).addClass("topic_active");					
		}
		currentTopic = topic;
	}
}
// _______________________________________________________________________________________________________________
function showImageGallery()
{
	images = ['shots/website.jpg','shots/klogger01big.png','shots/klogger02big.png'];
	titles = ['Title 1','Title 2','Title 3'];
	descriptions = ['Description 1','Description 2','Description 3']
	$.prettyPhoto.open(images,titles,descriptions);
}
// _______________________________________________________________________________________________________________
function showFeatureButtons()
{
		s=150;
		$(".feature_back").css({'width':'0px', 'height':'0px','left' :'0px', 'margin-top':'0px'}).animate({opacity:[1, 'easeOutQuint'],width:38,height:38,left :-20,marginTop:-20}, s);
		$(".feature_next").css({'width':'0px', 'height':'0px','right':'0px', 'margin-top':'0px'}).animate({opacity:[1, 'easeOutQuint'],width:38,height:38,right:-20,marginTop:-20}, s);
		$(".feature_back_arrow").css({'opacity':'0'}).delay(s).animate({opacity:1}, s, 'easeInQuad');
		$(".feature_next_arrow").css({'opacity':'0'}).delay(s).animate({opacity:1}, s, 'easeInQuad');
		
    $(".feature_back_area").css('display','block');
    $(".feature_next_area").css('display','block');
}
// _______________________________________________________________________________________________________________
function hideFeatureButtons()
{
		s=150;
		$(".feature_back").animate({width:0,height:0,left :-1, marginTop:0}, s).animate({opacity:0}, 0);
		$(".feature_next").animate({width:0,height:0,right:-2, marginTop:0}, s).animate({opacity:0}, 0);
		$(".feature_back_arrow").css({'opacity':'0'});
		$(".feature_next_arrow").css({'opacity':'0'});
		
		$(".feature_back_area").css('display','none');
		$(".feature_next_area").css('display','none');
}

// _______________________________________________________________________________________________________________
function iconForFeature(featureID, highlight)
{
  $.log(featureID);
	img = $("#"+featureID).log().find(".feature_icon img");
	$.log(img);
	if (highlight)
	{
  	ary = $(img).attr('src').split("/");
  	ary.splice(1,1,"iconcolor");
    return ary.join("/"); 
  }
  else
  {
    return $(img).attr('src');
  }
}

// _______________________________________________________________________________________________________________
function showFeatureNavi(featureID)
{
	$(".feature_content_navi").animate({opacity: 1});
	$(".feature_content_navi").css('display', 'block');
	$(".feature_box_title P").animate({opacity: 0});
	
	if (currentFeature != "FEATURE_0")
	{
  	ary = currentFeature.split("_");
  	num = parseInt(ary[1]);
  	img = $(".feature_content_navi img")[num];
  	$(img).animate({opacity: 0.25});
	}

	ary = featureID.split("_");
	num = parseInt(ary[1]);
	img = $(".feature_content_navi img")[num];
	$(img).animate({opacity: 1});
}
// _______________________________________________________________________________________________________________
function hideFeatureNavi()
{
	$(".feature_content_navi").animate({opacity: 0});
	$(".feature_content_navi").delay().css('display', 'none');
	$(".feature_box_title P").animate({opacity: 1});
	
	ary = currentFeature.split("_");
	num = parseInt(ary[1]);
	img = $(".feature_content_navi img")[num];
	$(img).css('opacity', '0.25');
}
// _______________________________________________________________________________________________________________
function showFeature(featureID)
{
  ary = featureID.split("_");
  nextNum = parseInt(ary[1]);
  ary = currentFeature.split("_");
  currNum = parseInt(ary[1]);
  
  $.log("show " + featureID + " " + currNum + " " + nextNum);
  
  if (currNum == nextNum) return;
  
  nextStart = (nextNum > currNum) ? "800px" : "-800px";
  currEnd   = (nextNum > currNum) ? -800 : 800;

	$("#" + featureID + "_CONTENT").css("left", nextStart).animate({ left:0 });
	if (currentFeature == "FEATURE_0")
	{
 		$(".feature_overview").animate({ left:currEnd });
		showFeatureButtons();
	}
	else
	{
		$("#" + currentFeature + "_CONTENT").animate({ left:currEnd });
	}	
	
	if (featureID == "FEATURE_0")
  {
    hideFeatureNavi();
    hideFeatureButtons();
  }
  else
	{
    showFeatureNavi(featureID);
  }
  
	currentFeature = featureID;	
}
// _______________________________________________________________________________________________________________
function showNextFeature()
{
	ary = currentFeature.split("_");
				
	nextNum = parseInt(ary[1])+1;
	if (nextNum > numFeatures) nextNum = 0;
	ary.splice(1,1,nextNum);
	nextFeature = ary.join("_");
  showFeature(nextFeature);
}
// _______________________________________________________________________________________________________________
function showPrevFeature()
{
	ary = currentFeature.split("_");
				  
	prevNum = parseInt(ary[1])-1;
	if (prevNum < 0) prevNum = numFeatures;
	ary.splice(1,1,prevNum);
	prevFeature = ary.join("_");

  showFeature(prevFeature);
}
// _______________________________________________________________________________________________________________
function highlightBackArrow()
{
	$(".feature_back_arrow").addClass ("feature_back_arrow_hover");
	$(".feature_back")      .removeClass ("feature_back_hover");
}
function unhighlightBackArrow()
{
	$(".feature_back_arrow").removeClass ("feature_back_arrow_hover");
	$(".feature_back")      .removeClass ("feature_back_hover");
}
function dehighlightBackArrow()
{
	$(".feature_back")      .addClass ("feature_back_hover");
}
// _______________________________________________________________________________________________________________
function highlightNextArrow()
{
	$(".feature_next_arrow").addClass ("feature_next_arrow_hover");
	$(".feature_next")      .removeClass ("feature_next_hover");
}
function unhighlightNextArrow()
{
	$(".feature_next_arrow").removeClass ("feature_next_arrow_hover");
	$(".feature_next")      .removeClass ("feature_next_hover");
}
function dehighlightNextArrow()
{
	$(".feature_next")      .addClass ("feature_next_hover");
}

// _______________________________________________________________________________________________________________		
function initImageViewer()
{
	$("a[rel^='imageview']").prettyPhoto({
		opacity: 0.75,
		default_width: 860,
		default_height: 660,
		overlay_gallery: false,
	});
}

// _______________________________________________________________________________________________________________

$(document).ready(function()
{
	$(".screenshot").load(function() // rounded image corner hack
	{
		$(this).wrap(function()
		{
  		return '<div class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat center center; " />';
		});
		$(this).css("opacity","0");
	});

	$(".feature_content_image").load(function() // another rounded image corner hack
	{
	 	$(this).wrap(function()
		{
	     return '<div class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat center center; width:'+$(this).attr('width')+'px; height:'+$(this).attr('height')+'px;" />';
	  });
	  $(this).css("opacity","0");
	});

	initImageViewer(); // init image viewer
		
	$(".feature_mask")   .css({'height':'370px'});
	$(".topic_content")  .css({'left': '800px',  'position': 'absolute'}); // move sliding content out of sight
	$(".feature_content").css({'left': '1600px', 'position': 'absolute'});

	showTopic(1); // show download topic
	
	// install hover handlers
	
	$("#topics .topic_header").hover(function() { $(this).addClass   ("topic_hover"); }, 

	                                 function() { $(this).removeClass("topic_hover"); });		
	                                 
	// features	
  $(".feature").hover(function() { 	$(this).find(".feature_icon").addClass           ("feature_icon_hover"   );
																	 	$(this).find(".feature_abstract H2").addClass    ("feature_header_hover" ); 
																	
																		img = $(this).find(".feature_icon img");
																		ary = $(img).attr('src').split("/");
																		ary.splice(1,1,"iconcolor");
																	  $(img).attr('src', ary.join("/")); 
																	},
  										function() { 	$(this).find(".feature_icon").removeClass        ("feature_icon_hover"   ).removeClass ("feature_icon_down");
																		$(this).find(".feature_abstract H2").removeClass ("feature_header_hover" ); 
																		
																		img = $(this).find(".feature_icon img");
																		ary = $(img).attr('src').split("/");
																		ary.splice(1,1,"icon");
																	  $(img).attr('src', ary.join("/")); 	
																	});

  $(".feature").mousedown(function() { $(this).find(".feature_icon").addClass    ("feature_icon_down"); });
  $(".feature").mouseup  (function() { $(this).find(".feature_icon").removeClass ("feature_icon_down"); });

  $(".feature").click(function() { showFeature($(this).attr("id")); });

	$(".feature_back").click(function() { showPrevFeature(); });
	$(".feature_next").click(function() { showNextFeature(); });
	$(".feature_back").hover    (highlightBackArrow, unhighlightBackArrow); 
	$(".feature_back").mousedown(dehighlightBackArrow); 
	$(".feature_back").mouseup  (highlightBackArrow);
	$(".feature_next").hover    (highlightNextArrow, unhighlightNextArrow); 
	$(".feature_next").mousedown(dehighlightNextArrow); 
	$(".feature_next").mouseup  (highlightNextArrow);

});

