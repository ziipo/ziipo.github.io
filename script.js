// alert("hello");

// elements will be stored in variables. The variables will be referenced later when you want to render the data.
// const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
// const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
// const FORECAST = document.getElementsByClassName('component__forecast-box')[0];
// const WeatherURL = "https://api.openweathermap.org/data/2.5/forecast?at=47.324&lon=-122.274&mode=html&units=imperial&APPID=d8cdfb57dd1cf4dd7d7245ca5572dee0";

// l

// function getWeatherData() {
//   let headers = new Headers();

//   return fetch(WeatherURL, {
//     method: 'GET',
//     headers: headers
//   }).then(data => {
//     return data.json();
//   });
// }

// getWeatherData().then(weatherData => {
//   let city = weatherData.city.name;
//   let dailyForecast = weatherData.list;

//   renderData(city, dailyForecast);
// });



// function applyIcon(icon) {
//   let selectedIcon;
//   switch (icon) {
//     case '01d':
//       selectedIcon = "wi-day-sunny"
//       break;
//     case '01n':
//       selectedIcon = "wi-night-clear"
//       break;
//     case '02d':
//     case '02n':
//       selectedIcon = "wi-cloudy"
//       break;
//     case '03d':
//     case '03n':
//     case '04d':
//     case '04n':
//       selectedIcon = "wi-night-cloudy"
//       break;
//     case '09d':
//     case '09n':
//       selectedIcon = "wi-showers"
//       break;
//     case '10d':
//     case '10n':
//       selectedIcon = "wi-rain"
//       break;
//     case '11d':
//     case '11n':
//       selectedIcon = "wi-thunderstorm"
//       break;
//     case '13d':
//     case '13n':
//       selectedIcon = "wi-snow"
//       break;
//     case '50d':
//     case '50n':
//       selectedIcon = "wi-fog"
//       break;
//     default:
//       selectedIcon = "wi-meteor"
//   }
//   return selectedIcon;
// }

// renderData = (location, forecast) => {
//   const currentWeather = forecast[0].weather[0];
//   const widgetHeader =
//   `<h1>${location}</h1><small>${currentWeather.description}</small>`;

//   CURRENT_TEMP.innerHTML =
//   `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
//   ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;

//   CURRENT_LOCATION.innerHTML = widgetHeader;

//   // render each daily forecast
//   forecast.forEach(day => {
//     let date = new Date(day.dt * 1000);
//     let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
//     let name = days[date.getDay()];
//     let dayBlock = document.createElement("div");
//     dayBlock.className = 'forecast__item';
//     dayBlock.innerHTML =
//       `<div class="forecast-item__heading">${name}</div>
//       <div class="forecast-item__info">
//       <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
//       <span class="degrees">${Math.round(day.temp.day)}
//       <i class="wi wi-degrees"></i></span></div>`;
//     FORECAST.appendChild(dayBlock);
//   });
// }

// boostlog tut

const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let cityName2 = document.getElementById("city-name2");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let date3 = document.getElementById("date3");
let date4 = document.getElementById("date4");
let date5 = document.getElementById("date5");
let icon1 = document.getElementById("icon1");
let temperature1 = document.getElementById("temp1");
let wind1 = document.getElementById("wind1");
let icon2 = document.getElementById("icon2");
let temperature2 = document.getElementById("temp2");
let wind2 = document.getElementById("wind2");
let icon3 = document.getElementById("icon3");
let temperature3 = document.getElementById("temp3");
let wind3 = document.getElementById("wind3");
let icon4 = document.getElementById("icon4");
let temperature4 = document.getElementById("temp4");
let wind4 = document.getElementById("wind4");
let icon5 = document.getElementById("icon5");
let temperature5 = document.getElementById("temp5");
let wind5 = document.getElementById("wind5");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  } else {
   // let searchLink = "https://api.openweathermap.org/data/2.5/weather?zip=" + searchInput.value + "&units=imperial" + "&appid="+appKey;
   // httpRequestAsync(searchLink, theResponse);
   searchLink = "https://api.openweathermap.org/data/2.5/forecast?zip=" + searchInput.value + "&units=imperial" + "&appid="+appKey;
   httpRequestAsync(searchLink, forecastResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(jsonObject);
  // cityName.innerHTML = jsonObject.name;
  cityName2.innerHTML = "Forecast for " + jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

// function justPrintOutput(response) {
// 	console.log("justPrintOutput called");
// 	jsonObject = JSON.parse(response);
// 	console.log(jsonObject);
// }

function forecastResponse(response) {
	console.log("forecastResponse called");
	jsonObject = JSON.parse(response);
		cityName2.innerHTML = "Forecast for " + jsonObject.city.name;
	console.log(jsonObject);
	// day 1 forecast update
	day1 = 0;
	UTCdate1 = new Date((jsonObject.list[day1].dt)*1000);
	date1.innerHTML = days[(UTCdate1.getDay())] + " (today)" + "<br>" + months[(UTCdate1.getMonth())] + " " + UTCdate1.getDate();
	icon1.src = "http://openweathermap.org/img/w/" + jsonObject.list[day1].weather[0].icon + ".png";
	temp1.innerHTML = (jsonObject.list[day1].main.temp).toFixed(0) + "° F";
	wind1.innerHTML = (jsonObject.list[day1].wind.speed).toFixed(0) + " mph";
	
	day2 = 8;
	UTCdate2 = new Date((jsonObject.list[day2].dt)*1000);
	date2.innerHTML = days[(UTCdate2.getDay())] + "<br>" + months[(UTCdate2.getMonth())] + " " + UTCdate2.getDate();
	icon2.src = "http://openweathermap.org/img/w/" + jsonObject.list[day2].weather[0].icon + ".png";
	temp2.innerHTML = (jsonObject.list[day2].main.temp).toFixed(0) + "° F";
	wind2.innerHTML = (jsonObject.list[day2].wind.speed).toFixed(0) + " mph";

	day3 = 16;
	UTCdate3 = new Date((jsonObject.list[day3].dt)*1000);
	date3.innerHTML = days[(UTCdate3.getDay())] + "<br>" + months[(UTCdate3.getMonth())] + " " + UTCdate3.getDate();
	icon3.src = "http://openweathermap.org/img/w/" + jsonObject.list[day3].weather[0].icon + ".png";
	temp3.innerHTML = (jsonObject.list[day3].main.temp).toFixed(0) + "° F";
	wind3.innerHTML = (jsonObject.list[day3].wind.speed).toFixed(0) + " mph";

	day4 = 24;
	UTCdate4 = new Date((jsonObject.list[day4].dt)*1000);
	date4.innerHTML = days[(UTCdate4.getDay())] + "<br>" + months[(UTCdate4.getMonth())] + " " + UTCdate4.getDate();
	icon4.src = "http://openweathermap.org/img/w/" + jsonObject.list[day4].weather[0].icon + ".png";
	temp4.innerHTML = (jsonObject.list[day4].main.temp).toFixed(0) + "° F";
	wind4.innerHTML = (jsonObject.list[day4].wind.speed).toFixed(0) + " mph";

	day5 = 32;
	UTCdate5 = new Date((jsonObject.list[day5].dt)*1000);
	date5.innerHTML = days[(UTCdate5.getDay())] + "<br>" + months[(UTCdate5.getMonth())] + " " + UTCdate5.getDate();
	icon5.src = "http://openweathermap.org/img/w/" + jsonObject.list[day5].weather[0].icon + ".png";
	temp5.innerHTML = (jsonObject.list[day5].main.temp).toFixed(0) + "° F";
	wind5.innerHTML = (jsonObject.list[day5].wind.speed).toFixed(0) + " mph";
}

function httpRequestAsync(url, callback)
{
  // console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

httpRequestAsync(("https://api.openweathermap.org/data/2.5/forecast?zip=98001&units=imperial&appid="+appKey), forecastResponse);



















