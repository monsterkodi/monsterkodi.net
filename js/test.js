
var socket = io.connect('http://localhost');
function klog()
{
   var msg = $A(arguments).each(function (a) { return $H(a).toJSON() + " "; });
   socket.emit('klogger', {path:'test.html', message:msg, time:moment()})
}
//socket.emit('klogger', { path:'test.html', message:'obj: ' + toStr({test:1}) } );
//socket.emit('klogger', { path:'test.html', message:toStr({test:2}) } );
//socket.emit('klogger', { path:'test.html', message:toStr({'test':3}) } );
//socket.emit('klogger', { path:'test.html', message:'obj: ' + toStr({'test':4}) } );
klog(1,2,3,4);
klog([1,2,3,4]);
klog("yep", {'test':4});

