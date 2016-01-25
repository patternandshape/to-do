describe ('cityCountry', function () {
  it("creates a new place with the given properties", function() {
    var testPlace = new cityCountry("London","United Kingdom");
    expect(testPlace.cityName).to.equal("London");
    expect(testPlace.countryName).to.equal("United Kingdom");
  });

  it("adds the fullPlace method to an entered destination", function() {
    var testPlace = new cityCountry("London", "United Kingdom");
    expect(testPlace.fullPlace()).to.equal("London, United Kingdom");
  });
});
