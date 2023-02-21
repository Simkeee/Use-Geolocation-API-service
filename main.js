$(document).ready(function() {
  $("#getLocation").click(function() {
    var ipAddress = $("#ipAddress").val();
    $.ajax({
      type: "GET",
      url: "http://www.geoplugin.net/xml.gp?ip=" + ipAddress,
      dataType: "xml",
      success: function(xml) {
        var country = $(xml).find("geoplugin_countryName").text();
        $("#result").text("Country: " + country);
      }
    });
  });
});