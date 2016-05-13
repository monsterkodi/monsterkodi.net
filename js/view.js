var scroller;
var downPos;
var zoomed = false, zoomAvailable = false;
var clickAction = '';
var args = (function ()
{
   var a = {};
   var match, search = /([^&=]+)=?([^&]*)/g;
   var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
   var query = window.location.search.substring(1);
   while (match = search.exec(query)) a[decode(match[1])] = decode(match[2]);
   return a;
})();

function initStage()
{
   setCursor('wait');

   stage = new Kinetic.Stage({ container:'canvas', width:window.innerWidth, height:window.innerHeight });
   layer = new Kinetic.Layer({ opacity:0 }); stage.add(layer);
   debug = new Kinetic.Layer({});            stage.add(debug);
   window.document.title = (window.location.host || 'monsterkodi.net') + ' - ' + args.name;

   var image = new Image();
   image.src = args.image;
   image.name = args.name;
   image.onload = function (event) { imageLoaded(event.target); };
}

function clearStage()
{
   scroller.destroy();
   scroller = null;
}

function imageLoaded(image)
{
   refreshCursor(cursor);
   layer.add(new Kinetic.Image({image:image}));
   layout();
   var scrollColor = '#'+(args.scrollColor || '444');
   scroller = new iScroll('wrapper', { color:scrollColor,  zoom: true, hScrollbar:true, hideScrollbar:true, lockDirection:true, fadeScrollbar:true, scrollbarClass:'scrollbar' });
   fadeTo(layer, {opacity:1, duration:pageInTime, easing:'ease-out'});
}

function layout()
{
   if (layer.children.length)
   {
      resizeStage([window.innerWidth, window.innerHeight]);
   }
}

function resizeStage(viewSize)
{
   var img = layer.children[0];
   var vw  = viewSize[0], vh = viewSize[1];
   var iw  = img.getWidth(), ih = img.getHeight();
   var sf  = Math.min(1, Math.min((vw-40)/iw, (vh-40)/ih));

   zoomAvailable = (sf < 1);
   refreshCursor(cursor);

   if (zoomAvailable && zoomed)
   {
      stage.setWidth(Math.max(vw, iw)); stage.setHeight(Math.max(vh, ih));
      var px = Math.max(0, (stage.getWidth()  - iw) / 2);
      var py = Math.max(0, (stage.getHeight() - ih) / 2);
      img.setScale(1,1);
      img.setPosition([px, py]);
   }
   else
   {
      stage.setWidth(vw); stage.setHeight(vh);
      var px  = (vw-iw*sf)/ 2, py = (vh-ih*sf)/2;
      img.setScale(sf,sf);
      img.setPosition([px, py]);
   }
   layer.draw();
   if (scroller) scroller.refresh();
}

function onClick()
{
   if (clickAction == 'zoom')
   {
      if (zoomAvailable)
      {
         zoomed = !zoomed;
         layout();
      }
   }
   else if (clickAction == 'back')
   {
      history.back();
   }
}

function refreshCursor(pos)
{
   var hits = layer.getAllIntersections(pos);
   if (hits.length)
   {
      setCursor(zoomAvailable ? (zoomed ? 'zoom-out' : 'zoom-in') : 'default');
      clickAction = 'zoom';
   }
   else
   {
      setCursor('back');
      clickAction = 'back';
   }
}

function setCursor(cursorStyle)
{
   switch (cursorStyle)
   {
      case 'zoom-in':  cursorStyle = '-' + getVendor() + '-zoom-in';  break;
      case 'zoom-out': cursorStyle = '-' + getVendor() + '-zoom-out'; break;
      case 'back':     cursorStyle = "url(js/cursor.cur),nw-resize"; break;
   }
   document.getElementById("canvas").style.cursor = cursorStyle;
}

function getVendor()
{
   var vendors = ['MozT','t','webkitT','msT','OT'];
   var style = document.createElement('div').style;
   for (var i=0; i < vendors.length; i++ )
   {
      if ( vendors[i] + 'ransform' in style )
      {
         return vendors[i].toLowerCase().substr(0, vendors[i].length - 1);
      }
   }
   return false;
}

function merge(o1,o2) { for (var a in o2) { o1[a] = o2[a]; } return o1; }

function onMouseMove(pos)
{
   if (clickAction != 'move') refreshCursor(pos);
}

function onKeyDown(keyCode)
{
   switch (keyCode)
   {
      case 38: scroller.scrollTo(scroller.x, Math.min(0, scroller.y + 50), 1000); break;
      case 40: scroller.scrollTo(scroller.x, Math.max(scroller.maxScrollY,  scroller.y - 50), 1000); break;
      case 37: scroller.scrollTo(Math.min(0, scroller.x + 50), scroller.y, 1000); break;
      case 39: scroller.scrollTo(Math.max(scroller.maxScrollX,  scroller.x - 50), scroller.y, 1000); break;
      default: console.log("event.keyCode " + keyCode); return;
   }
}

function onMouseDown(pos) { setCursor('move'); clickAction='move'; }
function onMouseUp(pos)   { refreshCursor(pos); }
function onResize(size)   { resizeStage(size); }


