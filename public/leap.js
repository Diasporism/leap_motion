var Screen = (function () {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var drawGrid = function() {
    drawVerticalGridLines()
    drawHorizontalGridLines()

    context.strokeStyle = "#eee";
    context.stroke();
  }

  var clearCanvas = function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }

  var renderFingerTips = function(frame) {
    frame.pointables.forEach(function(pointable) {
      var position   = pointable.stabilizedTipPosition;
      var normalized = frame.interactionBox.normalizePoint(position);

      var x = context.canvas.width * normalized[0];
      var y = context.canvas.height * (1 - normalized[1]);

      context.beginPath();
      context.fillRect(x, y, 20, 20);
    });
  }

  function drawVerticalGridLines() {
    for (var x = 0; x < context.canvas.width; x += 10) {
      context.moveTo(x, 0);
      context.lineTo(x, context.canvas.height);
    }
  }

  function drawHorizontalGridLines() {
    for (var y = 0; y < context.canvas.height; y += 10) {
      context.moveTo(0, y);
      context.lineTo(context.canvas.width, y);
    }
  }

  return {
    drawGrid: drawGrid,
    clearCanvas: clearCanvas,
    renderFingerTips: renderFingerTips
  }
})();

Leap.loop({frameEventName: "animationFrame"}, function(frame) {
  Screen.clearCanvas()
  Screen.drawGrid()
  Screen.renderFingerTips(frame)
});
