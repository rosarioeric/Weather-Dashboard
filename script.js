var cityArray = [];
var cityStorage = localStorage.getItem('savedCity');
// use if statement to see if city storage is not null, then push city storage to cityArray.  has to be done 1 item at a time (use for loop on city storage and push 1 item at a time).
// make sure to stringify cityArray before saving to localStorage then parse it when we return it on line 2 (JSON strigify and parse)
function oneDay(cityName){

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=da9420b87d29698294d717ff1b782d01"
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Place results into designated HTML element
  var temperature =((response.main.temp) - 273.15) * 1.8 + 32;
  temperature = temperature.toFixed();
  var humid = ((response.main.humidity));
  var windSpeed = ((response.wind.speed));
  var citySearch = ((response.name));
  var latitute = ((response.coord.lat));
  var longitude = ((response.coord.lon));
  var forecast = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=da9420b87d29698294d717ff1b782d01"
  // var currentTime = moment();
  // var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?lat="+ lat"&lon=" + lon "&appid=da9420b87d29698294d717ff1b782d01";
  // var uvIndex= "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=da9420b87d29698294d717ff1b782d01"
  $("#dispText").text(citySearch);
  $("#tempDisp").text("Temperature: "+ temperature);
  $("#humDisp").text("Humidity: " +humid +"%");
  $("#windDisp").text("Wind speed: " +windSpeed +"mph");
  // $("#uvDisp").text("UV Index: "+ uvIndex);

  console.log(forecast);
  })
}
$("#cityName").append()
$(".searchBtn").click(function (){
  var searchCity = $(".userText").val();
  oneDay(searchCity);
  console.log(searchCity);
  cityArray.push(searchCity);
  localStorage.setItem('savedCity', cityArray);
  for (var i=0; i < cityArray.length; i++){
    var saveCity = ("<li>").searchCity;
    $("#savedCities").append(saveCity);
  }
  
})

