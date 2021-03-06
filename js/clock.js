/* eslint-env browser */

var clockCanvas = document.getElementById('clockCanvas')
var ctx = clockCanvas.getContext('2d')
var centerX = 300
var centerY = 300
var generalRadius = 300
var dialRadius = 265
var hourArrowLength = 130
var minuteArrowLength = 200
var secondsArrowLength = 185

drawDial(clockCanvas)
drawHourArrow(clockCanvas, new Date())
drawMinuteArrow(clockCanvas, new Date())
drawSecondsArrow(clockCanvas, new Date())

setInterval(function () {
  ctx.clearRect(0, 0, 600, 600)
  drawDial(clockCanvas)
  drawHourArrow(clockCanvas, new Date())
  drawMinuteArrow(clockCanvas, new Date())
  drawSecondsArrow(clockCanvas, new Date())
}, 1000)

function drawDial (canvas) {
  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(centerX, centerY, generalRadius, 0, 2 * Math.PI)

  ctx.stroke()
  ctx.beginPath()
  ctx.arc(centerX, centerY, generalRadius - 5, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI)

  ctx.stroke()

  var AngleHour = Math.PI / 6

  ctx.font = '30px Verdana'
  // Create gradient
  var gradient = ctx.createLinearGradient(0, 0, clockCanvas.width, 0)
  gradient.addColorStop('0', 'magenta')
  gradient.addColorStop('0.5', 'blue')
  gradient.addColorStop('1.0', 'red')
  // Fill with gradient
  ctx.fillStyle = gradient

  for (var hours = 1; hours <= 12; hours++) {
    var currentHourAngle = hours * AngleHour
    var measureOfTheCipher = ctx.measureText(hours).width
    var currentCoordX = centerX - measureOfTheCipher / 2 + dialRadius * Math.sin(currentHourAngle)
    var currentCoordY = centerY + 15 - dialRadius * Math.cos(currentHourAngle)
    ctx.fillText(hours, currentCoordX, currentCoordY)
  }
}

function drawArrow (canvas, length, width, angle) {
  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.lineWidth = width
  ctx.moveTo(centerX, centerY)
  ctx.lineTo(centerX + length * Math.sin(angle), centerY - length * Math.cos(angle))
  ctx.stroke()
}

function drawHourArrow (canvas, dateTime) {
  var totalSecondsInADay = 3600 * 12
  var secondSinceMidTime = dateTime.getSeconds() + 60 * dateTime.getMinutes() + 3600 * (dateTime.getHours() % 12)

  var hourArrowInclinationAngle = secondSinceMidTime / totalSecondsInADay * 2 * Math.PI

  drawArrow(canvas, hourArrowLength, 7, hourArrowInclinationAngle)
}

function drawMinuteArrow (canvas, dateTime) {
  var totalSecondsInAnHour = 3600
  var secondSinceMidTime = dateTime.getSeconds() + 60 * dateTime.getMinutes()

  var minuteArrowInclinationAngle = secondSinceMidTime / totalSecondsInAnHour * 2 * Math.PI

  drawArrow(canvas, minuteArrowLength, 5, minuteArrowInclinationAngle)
}

function drawSecondsArrow (canvas, dateTime) {
  var totalSecondsInAMinute = 60
  var secondSinceMidTime = dateTime.getSeconds()

  var secondArrowInclinationAngle = secondSinceMidTime / totalSecondsInAMinute * 2 * Math.PI

  drawArrow(canvas, secondsArrowLength, 1, secondArrowInclinationAngle)
}
