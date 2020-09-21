var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=da9420b87d29698294d717ff1b782d01";
var cityName = $(".userText").text.val;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var tempElement = $("<p>");response.Temp;
    var humidity = response.Humidity;
    var windSpeed = response.Wind;
    var uvIndex = response.uvIndex;
    console.log(response);
  })
    // Place results into designated HTML element

// function weatherBalloon( cityID ) {
//   var key = '{da9420b87d29698294d717ff1b782d01}';
//   fetch('https://api.openweathermap.org/data/2.5/weather?id=' + Seattle + '&appid=' + key)  
//   .then(function(resp) { return resp.json() }) // Convert data to json
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function() {
//     // catch any errors
//   });
// }

// window.onload = function() {
//   weatherBallon( Seattle );
