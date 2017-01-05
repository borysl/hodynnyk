var ctx=clockCanvas.getContext("2d");
var cornerHour = Math.PI/6;
var centerX = 300;
var centerY = 300;
var generalRadius = 300;
var dialRadius = 265;
var hourArrowLength = 150;

ctx.beginPath();
ctx.arc(centerX,centerY,generalRadius,0,2*Math.PI);

ctx.stroke();
ctx.beginPath();
ctx.arc(centerX,centerY,generalRadius-5,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(centerX,centerY,5,0,2*Math.PI);

ctx.stroke();

ctx.font="30px Verdana";
// Create gradient
var gradient=ctx.createLinearGradient(0,0,clockCanvas.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// Fill with gradient
ctx.fillStyle=gradient;

drawHourArrow(clockCanvas, new Date());

for (var hours=1; hours<=12; hours++) {
  var currentHourCorner = hours*cornerHour; 
  var measureOfTheCipher = ctx.measureText(hours).width;
  var currentCoordX = centerX - measureOfTheCipher / 2 + dialRadius* Math.sin(currentHourCorner);
  var currentCoordY = centerY + 15 - dialRadius* Math.cos(currentHourCorner);
   ctx.fillText(hours, currentCoordX, currentCoordY);
}

function drawHourArrow(canvas, dateTime) {
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX, centerY + hourArrowLength);
  ctx.stroke();
}
