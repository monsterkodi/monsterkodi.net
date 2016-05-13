
var isTouchDevice = 'ontouchstart' in document.documentElement;
var downPos;
var stage;
var layer;
var debug;
var mask;

var noFade = false;
var fading = false;
var cursor = [0,0];

var pageInTime  = 0.3;
var pageOutTime = 0.3;
var fadeInTime  = 0.8;
var fadeOutTime = 0.4;
var frameSize   = 0;

Kinetic.Group.prototype.getWidth       = function () { return this.children[0].getWidth() - frameSize; };
Kinetic.Group.prototype.getHeight      = function () { return this.children[0].getHeight() - frameSize; };
Kinetic.Group.prototype.getImageHeight = function () { return this.children[1].getHeight(); };
Kinetic.Group.prototype.getCenter      = function ()
{
   return [this.getPosition().x + this.getScale().x * this.getWidth() / 2,
           this.getPosition().y + this.getScale().y * this.getHeight() / 2];
};
Kinetic.Group.prototype.setCenter = function (c)
{
   this.setPosition([c[0] - this.getScale().x * this.getWidth() / 2, c[1] - this.getScale().y * this.getHeight() / 2]);
};
Kinetic.Group.prototype.center = function ()
{
   return [this.getPosition().x + this.getWidth() / 2, this.getPosition().y + this.getHeight() / 2];
};
Kinetic.Stage.prototype.getCenter = Kinetic.Group.prototype.getCenter;
Kinetic.Rect.prototype.getCenter = Kinetic.Group.prototype.getCenter;
Kinetic.Rect.prototype.setCenter = Kinetic.Group.prototype.setCenter;

function fadeTo(grp, config)
{
   // if (noFade)
   {
      config.opacity != undefined && grp.setOpacity(config.opacity);
      config.height  != undefined && grp.setHeight(config.height);
      config.y       != undefined && grp.setPosition([grp.x,  config.y]);
      layer.draw();
      return null;
   }
   // else
   // {
   //    //return grp.transitionTo(config);
   //    config.node = grp;
   //    var tween = new Kinetic.Tween(config);
   //    tween.play();
   //    return tween;
   // }
}

function timeCheck(func, maxTime)
{
   var start = new Date().getTime();
   func();
   var end   = new Date().getTime();
   if (isTouchDevice && !noFade && (end-start > maxTime)) noFade = true;
}

function log(o)
{
   debug.removeChildren();
   if (o)
   {
      var str = o;
      if (typeof o == 'object')
      {
         str = toStr(o);
      }
      var txt = new Kinetic.Text({text:str, x:10, y:10, textFill:"white"});
      debug.add(txt);
   }
   debug.draw();
}

function fadePageOut(func)
{
   if (layer && layer.children.length && !noFade)
   {
      fading = true;
      setCursor("default");
      mask = new Kinetic.Layer({opacity:0});
      stage.add(mask);
      mask.add(new Kinetic.Rect( {fill:'#000000', width:stage.getWidth(),  height:stage.getHeight()} ));
      mask.transitionTo( {opacity:1, duration:pageOutTime, callback:function() { layer.removeChildren(); removeMask(); stage.draw(); func(); }} );
   }
   else
   {
      fading = false;
      if (layer) { layer.removeChildren(); layer.draw(); }
      func();
   }
}

function removeMask()
{
   if (mask) { mask.removeChildren(); stage.remove(mask); }
   mask = undefined;
}

function onTouchDown(pos)
{
   cursor  = pos;
   downPos = pos;
   if (fading) return;
   if (this.onMouseDown != undefined) this.onMouseDown(downPos);
}

function onTouchUp(pos)
{
   cursor = pos;
   if (fading || !downPos) return;
   if (this.onMouseUp != undefined) this.onMouseUp(pos);
   if (pos[0] == downPos[0] && pos[1] == downPos[1] && this.onClick != undefined) this.onClick(pos);
   downPos = undefined;
}

window.onkeydown    = function (event) { if (fading) return; if (this.onKeyDown) this.onKeyDown(event.keyCode); };
window.ontouchstart = function (event) { onTouchDown([event.changedTouches[0].pageX, event.changedTouches[0].pageY]); };
window.ontouchend   = function (event) { onTouchUp  ([event.changedTouches[0].pageX, event.changedTouches[0].pageY]); };
window.onmousedown  = function (event) { onTouchDown([event.pageX, event.pageY]); };
window.onmouseup    = function (event) { onTouchUp  ([event.pageX, event.pageY]) };
window.onmousemove  = function (event)
{
   if (event.pageX == 0 && event.pageY == 0) return;
   cursor = [event.pageX, event.pageY];
   if (!fading && (this.onMouseMove != undefined)) this.onMouseMove(cursor);
};

window.onresize     = function () { if (this.onResize   != undefined) this.onResize([window.innerWidth, window.innerHeight]); };
window.onload       = function () { if (this.initStage  != undefined) this.initStage(); };
window.onunload     = function () { if (this.clearStage != undefined) this.clearStage(); };

