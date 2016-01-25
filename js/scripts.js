function item(itemName) {
  this.itemName = itemName;
}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var userTask = $("input#item").val();

    $("ul#userList").append("<li><span class='task'>" + userTask + "</span></li>");
    $("input#item").val();

$(".task").click(function () {
$(".task").wrap("<strike>");
$(".task").fadeOut("slow");
});

  $(".task").last().click(function() {
  $("#show-place").show();
  // $("#show-place h2").text(newPlace.fullPlace());
  $("ul#compList").append("<li><span class='task'>" + userTask + "</span></li>");
});
});
});
