var Hand = (function (context) {
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
        renderFingerTips: renderFingerTips
    }
})(Canvas.context);


