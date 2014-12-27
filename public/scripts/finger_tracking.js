(function(hand, canvas){
  Leap.loop({frameEventName: "animationFrame"}, function(frame) {
    canvas.clear();
    hand.renderFingerTips(frame);
  });
}(Hand, Canvas))



