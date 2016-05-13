var itemIndex = 0;
var frameSize = 14;

function BspNode(rect)
{
   this._a = null;
   this._b = null;

   this.rect  = rect;
   this.size  = [0, 0];
   this.item  = null;
   this.index = 0;
   this.hdir  = 0;
   this.vdir  = 0;
   this.depth = 0;
   this.vertical = undefined;

   this.layout = function ()
   {
      if (this.isLeaf())
      {
         var size = this.size;
         var ox, oy;
         if      (this.vdir > 0) { ox = this.rect[0] + this.rect[2] - size[0]; }
         else if (this.vdir < 0) { ox = this.rect[0]; }
         else                    { ox = this.rect[0] + this.rect[2] / 2 - size[0] * 0.5; }
         if      (this.hdir > 0) { oy = this.rect[1] + this.rect[3] - size[1]; }
         else if (this.hdir < 0) { oy = this.rect[1]; }
         else                    { oy = this.rect[1] + this.rect[3] / 2 - size[1] * 0.5; }

         this.item.style.left   = Math.floor(ox) + 'px';
         this.item.style.bottom = Math.floor(oy) + 'px';
      }
      else
      {
         this._a.layout();
         this._b.layout();
      }
      return this;
   };

   this.moveBy = function (o)
   {
      if (this.isLeaf())
      {
         var x = Math.floor(Number(this.item.style.left.split('px')[0]) + o[0]);
         var y = Math.floor(Number(this.item.style.bottom.split('px')[0]) + o[1]);
         this.item.setStyle({left:x + 'px', bottom:y + 'px'});
         this.item.posY = y;
      }
      else
      {
         this._a.moveBy(o);
         this._b.moveBy(o);
      }
      return this;
   };

   this.splitSize = function (v)
   {
      var w = this.rect[2], h = this.rect[3];
      if (v) { w = this.rect[2] - this.itemWidth();  if (w <= 0) w = h = 0; }
      else   { h = this.rect[3] - this.itemHeight(); if (h <= 0) w = h = 0; }
      return [w, h];
   };

   this.weightForItemAndOrientation = function (item, v)
   {
      if (this.isLeaf())
      {
         var iSize = [this.itemWidth(), this.itemHeight()];
         var sSize = this.splitSize(v);
         var itemArea = iSize[0] * iSize[1];
         var splitArea = sSize[0] * sSize[1];
         var overlap = Math.min(sSize[1], iSize[1]) * Math.min(sSize[0], iSize[0]);
         if (overlap > itemArea * 0.95) { overlap = splitArea; }
         return overlap;
      }
      return Math.max(this._a.weightForItemAndOrientation(item, v),
                      this._b.weightForItemAndOrientation(item, v));
   };

   this.maxWeightForItem = function (item)
   {
      return Math.max(this.weightForItemAndOrientation(item, true), this.weightForItemAndOrientation(item, false));
   };

   this.splitAndInsert = function (item)
   {
      var splitVertical = this.weightForItemAndOrientation(item, true) >= this.weightForItemAndOrientation(item, false);

      this.split(splitVertical);

      itemIndex += 1;

      if ((this.vertical && (this.vdir <= 0) || !this.vertical && (this.hdir <= 0))) // old item first
      {
         this._a.item  = this.item;
         this._a.index = this.index;
         this._b.item  = item;
         this._b.index = itemIndex;

         if (this.vertical) { this._a.vdir = (this.vdir == 0) ? 1 : -1; this._b.vdir = -1; }
         else               { this._a.hdir = (this.hdir == 0) ? 1 : -1; this._b.hdir = -1; }
      }
      else // this.vdir > 0 || this.hdir > 0
      {
         this._a.item  = item;
         this._a.index = itemIndex;
         this._b.item  = this.item;
         this._b.index = this.index;

         if (this.vertical) { this._a.vdir =  1; this._b.vdir =  1; }
         else               { this._a.hdir =  1; this._b.hdir =  1; }
      }

      if (this.vertical) { this._a.hdir = this.hdir; this._b.hdir = this.hdir; }
      else               { this._a.vdir = this.vdir; this._b.vdir = this.vdir; }
   };

   this.insert = function (item)
   {
      if (this.item == null)
      {
         this.item = item;
         itemIndex = 0;
      }
      else if (this.isLeaf())
      {
         this.splitAndInsert(item);
      }
      else
      {
         var w_a = this._a.maxWeightForItem(item);
         var w_b = this._b.maxWeightForItem(item);

         if (w_a == w_b)
         {
            if (this._a.childCount() <= this._b.childCount()) { this._a.insert(item); }
            else                                              { this._b.insert(item); }
         }
         else if (w_a > w_b) { this._a.insert(item); }
         else                { this._b.insert(item); }
      }
   };

   this.updateSize = function ()
   {
      if (this.isLeaf())
      {
         this.size = [this.itemWidth(), this.itemHeight()];
      }
      else
      {
         this._a.updateSize();
         this._b.updateSize();
         if (this.vertical) { this.size = [this._a.size[0] + this._b.size[0], Math.max(this._a.size[1], this._b.size[1])]; }
         else               { this.size = [Math.max(this._a.size[0], this._b.size[0]), this._a.size[1] + this._b.size[1]]; }
      }
   };

   this.balance = function ()
   {
      if (this.isLeaf()) return;

      var size_a = this._a.size;
      var size_b = this._b.size;
      var vBorder = (this.rect[2] - size_a[0] - size_b[0] ) / 2;
      var hBorder = (this.rect[3] - size_a[1] - size_b[1]) / 2;
      var border = this.vertical ? vBorder : hBorder;

      this._a.rect = [this.rect[0], this.rect[1], this.rect[2], this.rect[3]];
      this._b.rect = [this.rect[0], this.rect[1], this.rect[2], this.rect[3]];

      if (this.vertical)
      {
         if (this.vdir < 0)
         {
            this._a.rect[2] = size_a[0];
            this._b.rect[0] = this._a.rect[0] + this._a.rect[2];
            this._b.rect[2] -= size_a[0];
         }
         else if (this.vdir > 0)
         {
            this._a.rect[2] = this._a.rect[2] - size_b[0];
            this._b.rect[0] = this._a.rect[0] + this._a.rect[2];
            this._b.rect[2] = size_b[0];
         }
         else
         {
            this._a.rect[2] = size_a[0] + border;
            this._b.rect[0] = this._a.rect[0] + this._a.rect[2];
            this._b.rect[2] = size_b[0] + border;
         }
      }
      else
      {
         if (this.hdir < 0)
         {
            this._a.rect[3] = this._a.size[1];
            this._b.rect[3] = this.rect[3] - this._a.rect[3];
            this._b.rect[1] = this._a.rect[1] + this._a.rect[3];
         }
         else if (this.hdir > 0)
         {
            this._b.rect[3] = this._b.size[1];
            this._a.rect[3] = this.rect[3] - this._b.rect[3];
            this._b.rect[1] = this.rect[1] + this.rect[3] - this._b.rect[3];
         }
         else
         {
            this._a.rect[3] = this._a.size[1] + border;
            this._b.rect[3] = this.rect[3] - this._a.rect[3];
            this._b.rect[1] = this._a.rect[1] + this._a.rect[3];
         }
      }

      this._a.balance();
      this._b.balance();
   };

   this.split = function (v)
   {
      this.vertical = v;
      var f = 0.5;

      if (this._a) this._a.remove();
      if (this._b) this._b.remove();

      if (v)
      {
         this._a = new BspNode([this.rect[0], this.rect[1], this.rect[2] * f, this.rect[3]]);
         this._b = new BspNode([this.rect[0] + this.rect[2] * f, this.rect[1], this.rect[2] * (1 - f), this.rect[3]]);
      }
      else
      {
         this._a = new BspNode([this.rect[0], this.rect[1], this.rect[2], this.rect[3] * f ]);
         this._b = new BspNode([this.rect[0], this.rect[1] + this.rect[3] * f, this.rect[2], this.rect[3] * (1 - f)]);
      }
      this._a.depth = this.depth + 1;
      this._b.depth = this.depth + 1;
      return this;
   };

   this.itemWidth  = function () { return this.item.getWidth()-frameSize; };
   this.itemHeight = function () { return this.item.getHeight()-frameSize; };
   this.isLeaf     = function () { return (this._a == null || this._b == null); };
   this.childCount = function () { if (this.isLeaf()) return 1; return this._a.childCount() + this._b.childCount(); };

   this.remove = function ()
   {
      if (!this.isLeaf())
      {
         this._a.remove(); this._a = null;
         this._b.remove(); this._b = null;
      }
   };
}

function sortMaxSize(a,b)
{
   var max_a = Math.max(a.getWidth(), a.getHeight());
   var max_b = Math.max(b.getWidth(), b.getHeight());
   return (max_a == max_b) ? 0 : (max_a > max_b) ? -1 : 1;
}

function sortArea(a,b)
{
   var max_a = a.getWidth() * a.getHeight();
   var max_b = b.getWidth() * b.getHeight();
   return (max_a == max_b) ? sortMaxSize(a,b) : (max_a > max_b) ? -1 : 1;
}

function BspTree(rect, elements)
{
   var sorted = $A(elements);
   sorted.sort(sortArea);
   this.node = new BspNode(rect);

   this.insert = function (item)
   {
      this.node.insert(item);
      this.node.updateSize();
      this.node.balance();
   };

   this.remove = function ()
   {
      this.node.remove();
      this.node = null;
   };

   for (var i = 0; i < sorted.length; i++) { this.insert(sorted[i]); }
}
