var Canvas = (function () {
    var canvas  = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.fillStyle = '#bdc3c7';

    var clearCanvas = function() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    return {
        context: context,
        clear: clearCanvas
    }
})();


