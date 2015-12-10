var ij = document.getElementById('injones');
var qs = document.getElementById('quicksand');

var currpos = 0;
var isfacingright = true;
var isshrinking = true;
var currangle = 0;
var top = 200;
	
var drown = function drown(){
ij.style.top  = parseInt(ij.style.top) + 10 + 'px';
}

myInterval = setInterval(drown,150);
