$(".grid-item")
.each(function(i) {
  if (i != 0) {
    $("#sound")
      .clone()
      .attr("id", "sound" + i)
      .appendTo($(this).parent());
  }
  $(this).data("beep", i);
})
.mouseenter(function() {
  $("#sound" + $(this).data("beep"))[0].play();
});
$("#sound").attr("id", "sound0");
$(".grid-item1")
.each(function(i) {
  if (i != 0) {
    $("#sound1")
      .clone()
      .attr("id", "sound1" + i)
      .appendTo($(this).parent());
  }
  $(this).data("beep", i);
})
.mouseenter(function() {
  $("#sound1" + $(this).data("beep"))[0].play();
});
$("#sound1").attr("id", "sound0");
