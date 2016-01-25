function cityCountry(cityName, countryName) {
  this.cityName = cityName;
  this.countryName = countryName;

}

cityCountry.prototype.fullPlace = function() {
  return this.cityName + ", " + this.countryName;
}

function cityInfo(city, country, landmark, timeOfYear, notes) {
  this.city = city;
  this.country = country;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var pCity = $("input#city").val();
    var pCountry = $("input#country").val();
    var newPlace = new cityCountry(pCity, pCountry);
    var pLandmark = $("input#landmark").val();
    var pTimeOfYear = $("input#timeOfYear").val();
    var pNotes = $("input#notes").val();
    var newCityInfo = new cityInfo(pCity, pCountry, pLandmark, pTimeOfYear, pNotes);

    $("ul#places").append("<li><span class='place'>" + cityCountry.fullPlace() + "</span></li>");
    $("input#city").val("");
    $("input#country").val("");

  $(".place").last().click(function() {
  $("#show-place").show();
  $("#show-place h2").text(newPlace.fullPlace());
  $(".city-name").text(newCityInfo.city);
  $(".country-name").text(newCityInfo.country);
  $(".landmark-name").text(newCityInfo.landmark);
  $(".best-time").text(newCityInfo.timeOfYear);
  $(".notes").text(newCityInfo.notes);
});
});
});
