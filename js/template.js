
function initStage()
{
   console.log("initStage");
   stage = new Kinetic.Stage({ container:'canvas', width:window.innerWidth, height:window.innerHeight });
   layer = new Kinetic.Layer({});
   stage.add(layer);
}

function clearStage()
{
   console.log("clearStage");
}

function onMouseMove(pos)
{
   console.log("onMouseMove " + toStr(pos));
}

function onMouseDown(pos)
{
   console.log("onMouseDown " + toStr(pos));
}

function onMouseUp(pos)
{
   console.log("onMouseUp " + toStr(pos));
}

function onClick(pos)
{
   console.log("onClick " + toStr(pos));
}

function onKeyDown(keyCode)
{
   console.log("onKeyDown " + keyCode);
}

function onResize(size)
{
   console.log("onResize " + toStr(size));
}


