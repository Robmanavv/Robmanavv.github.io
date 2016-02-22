var x = 100;
var y = 100;
var r = 100;

function draw() {
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(x,y,r,2,4*Math.PI);
ctx.stroke();
  x+=0.5
  y+=0.5
  r+=0.5

  requestAnimationFrame(draw);
  
}
requestAnimationFrame(draw);