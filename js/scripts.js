function item(itemName) {
  this.itemName = itemName;

}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var userTask = $("input#item").val();
    // var pCountry = $("input#country").val();
    // var newPlace = new cityCountry(pCity, pCountry);
    // var pLandmark = $("input#landmark").val();
    // var pTimeOfYear = $("input#timeOfYear").val();
    // var pNotes = $("input#notes").val();
    // var newCityInfo = new cityInfo(pCity, pCountry, pLandmark, pTimeOfYear, pNotes);

    $("ul#userList").append("<li><span class='task'>" + userTask + "</span></li>");
    $("input#item").val();

  $(".task").last().click(function() {
  $("#show-place").show();
  $("#show-place h2").text(newPlace.fullPlace());
  $(".city-name").text(newCityInfo.city);
});
});
});
