
require('../less/body.less');
require('../less/index.less');

require('./test');
console.log(require);


let header=document.getElementsByTagName('h1')[0];
let container=document.getElementById('container');
let btn=document.getElementById('btn');
setInterval(fn,2000);

// btn.onclick=function(){
// 	location.href='../src/app/standard.html';
// }
$('#btn').click(function(){
	location.href='../src/app/standard.html';
})

function fn(){
	header.style.backgroundColor=randomColor();
	// container.style.backgroundColor=randomColor();
}

function randomColor(){
	let red=Math.floor(Math.random()*256);
	let green=Math.floor(Math.random()*256);
	let blue=Math.floor(Math.random()*256);
	let rgb='rgb('+red+','+green+','+blue+')';
	return rgb;
}
