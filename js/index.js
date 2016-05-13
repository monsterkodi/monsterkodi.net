var args = (function ()
{
   var a = {};
   var match, search = /([^&=]+)=?([^&]*)/g;
   var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
   var query = window.location.search.substring(1);
   while (match = search.exec(query)) a[decode(match[1])] = decode(match[2]);
   return a;
})();

var scroller;
var currentPage;
var cursor;
var showInfo = false;
var useBack  = false;
var isTouchDevice = 'ontouchstart' in document.documentElement;
var selected;
var selectOnClick = isTouchDevice;
var selectOnMove  = !selectOnClick;
var fadeInTime   = 0.3;
var fadeOutTime  = 0.3;
var maskFadeTime = 0.3;
var textFadeTime = 0.3;
var titleHeight  = 33;
var dimFactor    = 0.35;

function initMain()
{
   Element.addMethods({
                         add:    function(e,t,a) { if (!(e = $(e))) return e; var c = new Element(t,a); e.appendChild(c); return c; },
                         getPosX:function(e)     { if (!(e = $(e))) return 0; return Number(e.style.left.split('px')[0]); },
                         getPosY:function(e)     { if (!(e = $(e))) return 0; return Number(e.style.top.split('px')[0]); },
                         setPosY:function(e,y)   { if ( (e = $(e))) { e.style.top = y + 'px'; } return e; },
                         setSize:function(e,w,h) { if ( (e = $(e))) { e.style.width = w + 'px'; e.style.height = h + 'px';} return e; }
                      });
   initInfo();

//   console.log("------ init ------ " + window.location);

   $(body).ontouchmove    = function(event) { event.preventDefault(); }; // prevent elastic view movement on ipad
   $(wrapper).onmousemove = function(event) { setCursor(currentPage == 'home' ? "default" : "back"); if (selectOnMove) { select(); } };
   $(wrapper).onclick     = onBackgroundClick;

   var m = $(main);
   m.addEventListener("touchstart", function(event) { logEvt('ts'); onTouchDown([event.changedTouches[0].pageX, event.changedTouches[0].pageY]); }, false);
   m.addEventListener("touchmove",  function(event) { logEvt('tm'); onTouchMove([event.changedTouches[0].pageX, event.changedTouches[0].pageY]); }, false);
   m.addEventListener("touchend",   function(event) { logEvt('tu'); onTouchUp  ([event.changedTouches[0].pageX, event.changedTouches[0].pageY]); }, false);

   var scrollColor = '#444';
   scroller = new iScroll('wrapper', {
      color:         scrollColor,
      zoom:          true, zoomMax:4.0,
      hScrollbar:    true,
      vScrollbar:    true,
      hideScrollbar: true,
      lockDirection: false,
      fadeScrollbar: true,
      scrollbarClass:'scrollbar'
   });

   var page = window.location.hash.substr(1) || 'home';
   window.location.hash = '';
   showPage(page);
}

function layout()
{
   var ww = Math.max(window.innerWidth-2, 50);
   var wh = Math.max(window.innerHeight-1-(showInfo ? $(info).getDimensions().height+9 : 0)-2, 50);

   $(wrapper).setSize(ww,wh);

   var sw = (ww > wh) ? 1024 : 1024 * ww / wh;
   var sh = (ww > wh) ? 1024 * wh / ww : 1024;

   var tree = new BspTree([0, 0, sw, sh], $(layer).children);

   tree.node.layout();

   var b  = (0.75 + 0.25 * Math.min(ww / tree.node.size[0], wh / tree.node.size[1])) * 100;
   var lw = Math.max(tree.node.size[0]+b, ww);
   var lh = Math.max(tree.node.size[1]+b, wh);

   $(layer).setSize(lw,lh);

   var s = (lw > ww || lh > wh) ? Math.min(ww / lw, wh / lh) : 1;

   tree.node.moveBy([(lw-sw)/2, (lh-sh)/2]);

   if (scroller && scroller.scale != s)
   {
      scroller.options.zoomMin = s/2;
      scroller.options.doubleTapZoomIn = 2*s;
      scroller.options.doubleTapZoomOut = s;
      scroller.zoom(0,0,s,0);
   }

   scroller.refresh();

   tree.remove();
}

var zIndex = 100;

function select(frm)
{
   if (frm != selected)
   {
      if (selected)
      {
         new Effect.Parallel([
                                new Effect.Morph(selected.firstChild, {sync:true, style:'height:0'}),
                                new Effect.Opacity(selected.firstChild, {sync:true, from:1, to:0})],
                             {duration:textFadeTime, queue:{scope:'txt'+selected.frame, position:'end'}});
      }
      else if (frm && dimFactor)
      {
         for (var i = 0; i < frm.parentNode.children.length; i++)
         {
            if (frm.parentNode.children[i] != frm)
            {
               new Effect.Opacity(frm.parentNode.children[i].lastChild, {duration:maskFadeTime, from:0, to:dimFactor});
            }
         }
      }
      if (frm)
      {
         Effect.Queues.get('txt'+frm.frame).each(function(effect){effect.finish();});
         frm.setStyle("z-index:"+1000);
         frm.firstChild.update(frm.data.text||frm.data.page||frm.data.link);
         new Effect.Parallel([
                                new Effect.Opacity(frm.firstChild, {from:0, to: 1, sync:true}),
                                new Effect.Morph(frm.firstChild, {style:'height:'+titleHeight+'px', sync:true}),
                             ],
                             {duration:textFadeTime, queue:{scope:'txt' + frm.frame, position:'end'}});
         if (selected)
         {
            selected.setStyle("z-index:"+((selected.posY<frm.posY)?1001:999));
            for (var i = 0; i < frm.parentNode.children.length; i++)
            {
               var c = frm.parentNode.children[i]; if (c != frm && c != selected) c.setStyle("z-index:0");
            }
            if (dimFactor)
            {
               new Effect.Opacity(frm.lastChild,      {duration:maskFadeTime, from:dimFactor, to:0});
               new Effect.Opacity(selected.lastChild, {duration:maskFadeTime, from:0, to:dimFactor});
            }
         }
      }
      else if (selected && dimFactor)
      {
         for (var i = 0; i < selected.parentNode.children.length; i++)
         {
            if (selected.parentNode.children[i] != selected)
            {
               new Effect.Opacity(selected.parentNode.children[i].lastChild, {duration:maskFadeTime, from:dimFactor, to:0});
            }
         }
      }
      selected = frm;
   }
   if (selected) setCursor('pointer');
}

function imageLoaded(image)
{
   var frm = image.parentNode.parentNode;
   setTimeout(function() { frm.show(); layout(); }, 10);
}

function loadImages(images)
{
   // console.log("loadImages " + images.map(function(i) { return i.thumb; } ));
   for (var i = 0; i < images.length; i++)
   {
      var data = images[i];
      var frm = $(layer).add('div', { 'class': 'image_frame' });
      frm.frame = data.thumb;
      frm.style.backgroundColor = pages[currentPage].border || '#111';
      frm.data = data;
      frm.style.zIndex = i;
      frm.hide();
      frm.onmousemove = function(event)
      {
         event.stopPropagation(); setCursor("default"); if (selectOnMove) select(this); logEvt('mm'); logTouch([event.pageX,  event.pageY]);
      };
      frm.onclick = function(event)
      {
         event.stopPropagation();
         if (selectOnClick && this != selected) { select(this); return; }
         var data = this.data;
         var url = data.page ? '#' + data.page : data.url;
         if (data.view)
         {
            url = "view.html?image="+data.view+"&name="+encodeURIComponent(data.text);
            if (data.scrollColor) url += "&scrollColor="+data.scrollColor;
         }
         select();
         if (url)
         {
            var openLink = function () { currentPage = undefined; window.location = url; };
            if (currentPage) new Effect.Opacity('wrapper', { from: 1.0, to: 0.0, duration:fadeOutTime, afterFinish:openLink });
            else openLink();
         }
      };
      var txt = frm.add('div', {'class':data.textstyle||(frm.data.text||frm.data.page?'image_text':'image_link')});
      var div = frm.add('div', {'class':'image_div'});
      var cfg = {};
      cfg.src = "thumbs/" + data.thumb + ".png";
      cfg.name = data.thumb;
      cfg.onload = "imageLoaded(event.target);";
      var img = div.add('img', cfg);
      var msk = frm.add('div', {'class':'image_mask'});
      msk.onmousemove = frm.onmousemove.bind(frm);
   }
}

function loadPage(page)
{
   log(page);

   if (scroller) { scroller.zoom(0,0,1,0); scroller.refresh(); }

   $A($(layer).children).each(function(c) {c.remove()});
   currentPage = page;
   window.document.title = (window.location.host || 'monsterkodi.net') + " - " + page;

   new Effect.Opacity('wrapper', { from: 0.0, to: 1.0, duration: fadeInTime });
   if (pages[page].thumbs) loadImages(pages[page].thumbs);
}

function showPage(page)
{
   select();

   if (page != undefined && page != currentPage)
   {
      var fadeInPage = function() {
         if (page == 'back')
         {
            if (history.length > 1 && useBack) { history.back(); return; }
            page = currentPage == "projects" ? "home" : "projects";
         }
         window.location.hash = '#'+page;
      };
      if (currentPage) new Effect.Opacity('wrapper', { from: 1.0, to: 0.0, duration: fadeOutTime, afterFinish:fadeInPage });
      else fadeInPage();
   }
}

function goBack()
{
   if (currentPage != 'home') showPage('back');
}

function onBackgroundClick(event)
{
   if (selectOnClick && selected) { select(); return; }
   if (event.pageX < 100 && event.pageY < 50) toggleInfo();
   else { goBack(); }
}

function initInfo()
{
   var p = $(info); p.innerHtml = '';
   p.onclick = toggleInfo;
   p.setStyle({display:showInfo?'inline':'none'});

   p.add('span', {'class':'text_s'           }).update('w');
   p.add('span', {'class':'text', id:'width' }).update(window.innerWidth);
   p.add('span', {'class':'text_s'           }).update('h');
   p.add('span', {'class':'text', id:'height'}).update(window.innerHeight);

   p.add('span', {'class':'log_small'}).update('x');
   p.add('span', {'class':'log_touch', id:'log_touch_x'});
   p.add('span', {'class':'log_small'}).update('y');
   p.add('span', {'class':'log_touch', id:'log_touch_y'});
   p.add('span', {'class':'log_small', id:'log_evt'  });
   p.add('span', {'class':'log_log',   id:'log_log'  });
}

function log(str)    { if (showInfo) $(log_log).update(str); console.log(str); }
function logEvt(str) { if (showInfo) $(log_evt).update(str); }
function toggleInfo()
{
   showInfo = !showInfo;
   $(info).setStyle({display:showInfo ? 'inline' : 'none'});
   layout();
}
function logTouch(pos)
{
   if (showInfo) { $(log_touch_x).update(pos[0]); $(log_touch_y).update(pos[1]); }
}

function onResize(size)
{
   if (showInfo) { $(width).update(size[0]); $(height).update(size[1]); }
   layout();
}

function onTouchDown(pos) { logTouch(pos); }
function onTouchUp(pos)   { logTouch(pos); }
function onTouchMove(pos) { logTouch(pos); }

if (!isTouchDevice)
{
   window.onmousedown  = function (event) { logEvt('md'); onTouchDown([event.pageX, event.pageY]); };
   window.onmouseup    = function (event) { logEvt('mu'); onTouchUp  ([event.pageX, event.pageY]) };
   window.onmousemove  = function (event)
   {
      logEvt('mm');
      if (event.pageX == 0 && event.pageY == 0) return;
      cursor = [event.pageX, event.pageY];
      onTouchMove(cursor);
   };
}
window.onresize            = function () { onResize([window.innerWidth, window.innerHeight]); };
window.onorientationchange = function () { onResize([window.innerWidth, window.innerHeight]);  logEvt('orientation'+window.orientation); };
window.onload              = function () { initMain(); };
window.onunload            = function () { $(layer).innerHTML = ''; };
window.onhashchange        = function () { /*log("hash " + window.location.hash + " currentPage " + currentPage); */
   if (window.location.hash.substr(1)) loadPage(window.location.hash.substr(1));
   else loadPage('home');
};

var cursorStyle;
function setCursor(cs)
{
   if (cs != cursorStyle)
   {
      cursorStyle = cs;
      switch (cs)
      {
         case 'zoom-in':  cs = '-' + getVendor() + '-zoom-in';  break;
         case 'zoom-out': cs = '-' + getVendor() + '-zoom-out'; break;
         case 'back':     cs = "url(js/cursor.cur), nw-resize"; break;
      }
      document.getElementById("main").style.cursor = cs;
   }
}
