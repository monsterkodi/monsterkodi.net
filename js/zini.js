Zini = function (pos)
{
   this.scope = 'zini'+Zini.index++;
   this.pos = { x:pos[0] < 1 ? pos[0] : pos[0]/stage.getWidth(), y:pos[1] < 1 ? pos[1] : pos[1]/stage.getHeight() };
   this.show();
};

Zini.index = 0;
Zini.rect = [ {x:-15, y:-15, width:10, height:10, scale:[0, 0], fill:"white"},
              {x: -5, y:-15}, {x:5, y:-15}, {x:5, y: -5}, {x:5, y:  5}, {x:-5, y:  5}, {x:-15, y:  5}, {x:-15, y: -5} ];


Zini.prototype = {

   show: function()
   {
      merge(this, {r:60, g:60, b:60, dur:0.5, phs:0, stp:0});
      this.layer = new Kinetic.Layer({}); stage.add(this.layer);
      this.grp = new Kinetic.Group({});
      this.layer.add(this.grp);
      var z = this;
      this.layoutCB = function() { z.layout() }
      if (window.addEventListener) window.addEventListener("resize", this.layoutCB, false);
      if (window.attachEvent)      window.attachEvent   ("onresize", this.layoutCB);

      var config = {};
      for (var i = 0; i < Zini.rect.length; i++)
      {
         merge(config, Zini.rect[i]);
         var r = new Kinetic.Rect(config);
         this.grp.add(r);
         var c = r.getCenter(); r.setScale(0,0); r.setPosition(c);
      }

//      for (var i = 0; i < Zini.rect.length; i++)
//      {
//         var r = this.grp.children[i];
//         var c = r.getCenter(); r.setScale(0,0); r.setPosition(c);
//      }
      this.layout();
      this.grp.show();
      this.loop(0);
      var z = this;
      new Effect.Tween(this.layer, 0, 2, {fps:30, duration:60, queue:{scope:this.scope}}, function (p) { this.draw(); });
      return this;
   },

   loop: function(i)
   {
      var ci = this.grp.children[i];
      if (!ci) return;
      var applyLoop = function (p)
      {
         var c = this.getCenter();
         this.setScale([p, p]);
         this.setCenter(c);
      };
      var q = {position:'end', scope:this.scope + i};
      var c = {transition:Effect.Transitions.sinoidal, queue:q, fps:30};

      switch (this.phs)
      {
         case 0: this.dur -= 0.0005;  this.r += 1; this.g += 1; this.b += 1; if (this.stp >= 180) { this.phs++; this.stp = 0;} break;
         case 1: this.dur -= 0.0007;  this.b -= 1; if (this.stp >= 240) { this.phs++; this.stp = 0;} break;
         case 2: if (this.dur > 0.09) this.dur -= 0.0008; this.g -= 1; if (this.stp >= 240) { this.phs++; this.stp = 0; this.r = 255; this.g = 255; this.dur = 0.08;} break;
         case 3: this.b = (this.stp > 9) ? 255 : 0; if (this.stp >= 18) { this.phs++; this.stp = 0; this.r=120; this.g=120; this.b=120; } break;
         case 4: this.dur += 0.0001; this.r -= 1; this.g -= 1; this.b -= 1; var p = ci.getPosition(); ci.setPosition(p.x+this.stp/2, p.y); if (this.stp >= 120) { this.phs++; this.stp = 0;} break;
         default: this.hide(); return;
      }

      this.stp++;

      // ci.setFill('#' + Kinetic.Type._rgbToHex(this.r, this.g, this.b));
      ci.setFill('#' + Kinetic.Util._rgbToHex(this.r, this.g, this.b));
      var z = this;
      new Effect.Tween(ci, 0, 1,
                       merge({duration:this.dur / 6, afterFinish:function (e) {z.loop((i + 1) % Zini.rect.length); }}, c),
                       applyLoop);
      new Effect.Tween(ci, 1, 0, merge({duration:this.dur}, c), applyLoop);
   },

   layout: function()
   {
      this.grp.setPosition(this.pos.x * stage.getWidth(), this.pos.y * stage.getHeight());
      this.layer.draw();
      return this;
   },

   hide: function()
   {
      Effect.Queues.get(this.scope).invoke('cancel');
      for (var i = 0; i < Zini.rect.length; i++) Effect.Queues.get(this.scope + i).invoke('cancel');
      stage.remove(this.layer);

      if (window.removeEventListener) window.removeEventListener("resize", this.layoutCB, false);
      if (window.detachEvent)         window.detachEvent      ("onresize", this.layoutCB);

      return this;
   }
}
