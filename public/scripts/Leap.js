var Screen = (function () {
  var canvas  = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  context.fillStyle = '#bdc3c7';

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

  return {
    clearCanvas: clearCanvas,
    renderFingerTips: renderFingerTips
  }
})();

Leap.loop({frameEventName: "animationFrame"}, function(frame) {
  Screen.clearCanvas();
  Screen.renderFingerTips(frame);
});
