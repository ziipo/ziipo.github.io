// Welcome title and name

	if (localStorage.getItem("nameKey") !== null) {
		var yourName = localStorage.getItem("nameKey");	
	} else {
		var yourName = "Ken";	
	}
	let welcome = document.getElementById("welcome");
	updateWelcome();

	function updateWelcome() {
		welcome.textContent = "Hello, " + yourName;	
	}

	// updating the welcome name
		let nameButton = document.getElementById("name-btn");
		let nameInput = document.getElementById("name-txt");
		nameButton.addEventListener("click", changeName);
		nameInput.addEventListener("keyup", nameEnterPressed);
		
		function nameEnterPressed(event) {
		  if (event.key === "Enter") {
		    changeName();
		  }
		}

	function changeName() {
		if (nameInput.value === "") {
		  
		  } else {
		   yourName = nameInput.value;
		   updateWelcome();
		   localStorage.setItem("nameKey", yourName);
		  }
	}

// 


// weather stuff

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
	const dates = document.getElementsByClassName("date");
	const icons = document.getElementsByClassName("fIcon");
	const temps = document.getElementsByClassName("temps");
	const winds = document.getElementsByClassName("winds");
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
	  icon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
	  temperature.innerHTML = parseInt(jsonObject.main.temp) + "°";
	  humidity.innerHTML = jsonObject.main.humidity + "%";
	}

	function forecastResponse(response) {
		console.log("forecastResponse called");
		jsonObject = JSON.parse(response);
			cityName2.innerHTML = "Forecast for " + jsonObject.city.name;
		console.log(jsonObject);
		

		// old code - before I optimized with the for loop that follows
		// day1 = 0;
		// UTCdate1 = new Date((jsonObject.list[day1].dt)*1000);
		// // date1.innerHTML = days[(UTCdate1.getDay())] + " (today)" + "<br>" + months[(UTCdate1.getMonth())] + " " + UTCdate1.getDate();
		// date1.innerHTML = "Today" + "<br>" + months[(UTCdate1.getMonth())] + " " + UTCdate1.getDate();
		// icon1.src = "https://openweathermap.org/img/w/" + jsonObject.list[day1].weather[0].icon + ".png";
		// temp1.innerHTML = (jsonObject.list[day1].main.temp).toFixed(0) + "° F";
		// wind1.innerHTML = (jsonObject.list[day1].wind.speed).toFixed(0) + " mph";
		
		// day2 = 8;
		// UTCdate2 = new Date((jsonObject.list[day2].dt)*1000);
		// date2.innerHTML = days[(UTCdate2.getDay())] + "<br>" + months[(UTCdate2.getMonth())] + " " + UTCdate2.getDate();
		// icon2.src = "https://openweathermap.org/img/w/" + jsonObject.list[day2].weather[0].icon + ".png";
		// temp2.innerHTML = (jsonObject.list[day2].main.temp).toFixed(0) + "° F";
		// wind2.innerHTML = (jsonObject.list[day2].wind.speed).toFixed(0) + " mph";

		// day3 = 16;
		// UTCdate3 = new Date((jsonObject.list[day3].dt)*1000);
		// date3.innerHTML = days[(UTCdate3.getDay())] + "<br>" + months[(UTCdate3.getMonth())] + " " + UTCdate3.getDate();
		// icon3.src = "https://openweathermap.org/img/w/" + jsonObject.list[day3].weather[0].icon + ".png";
		// temp3.innerHTML = (jsonObject.list[day3].main.temp).toFixed(0) + "° F";
		// wind3.innerHTML = (jsonObject.list[day3].wind.speed).toFixed(0) + " mph";

		// day4 = 24;
		// UTCdate4 = new Date((jsonObject.list[day4].dt)*1000);
		// date4.innerHTML = days[(UTCdate4.getDay())] + "<br>" + months[(UTCdate4.getMonth())] + " " + UTCdate4.getDate();
		// icon4.src = "https://openweathermap.org/img/w/" + jsonObject.list[day4].weather[0].icon + ".png";
		// temp4.innerHTML = (jsonObject.list[day4].main.temp).toFixed(0) + "° F";
		// wind4.innerHTML = (jsonObject.list[day4].wind.speed).toFixed(0) + " mph";

		// day5 = 32;
		// UTCdate5 = new Date((jsonObject.list[day5].dt)*1000);
		// date5.innerHTML = days[(UTCdate5.getDay())] + "<br>" + months[(UTCdate5.getMonth())] + " " + UTCdate5.getDate();
		// icon5.src = "https://openweathermap.org/img/w/" + jsonObject.list[day5].weather[0].icon + ".png";
		// temp5.innerHTML = (jsonObject.list[day5].main.temp).toFixed(0) + "° F";
		// wind5.innerHTML = (jsonObject.list[day5].wind.speed).toFixed(0) + " mph";

		for (var i = 0; i < 5; i++) {
			console.log("looped once")
                dayX = i * 8;
                UTCdate = new Date((jsonObject.list[dayX].dt)*1000);
                if (i === 0) {
                	UTCdate1 = new Date((jsonObject.list[dayX].dt)*1000);
                	dates[i].innerHTML = "Today" + "<br>" + months[(UTCdate.getMonth())] + " " + UTCdate.getDate();
	                } else {
	                dates[i].innerHTML = days[(UTCdate.getDay())] + "<br>" + months[(UTCdate.getMonth())] + " " + UTCdate.getDate();
	                }
				icons[i].src = "https://openweathermap.org/img/w/" + jsonObject.list[dayX].weather[0].icon + ".png";
				temps[i].innerHTML = (jsonObject.list[dayX].main.temp).toFixed(0) + "° F";
				winds[i].innerHTML = (jsonObject.list[dayX].wind.speed).toFixed(0) + " mph";    
            }
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

// map stuff
	var platform = new H.service.Platform({
	  'app_id': 'xuPPaedRxqWWetpVEIFx',
	  'app_code': 'CbBgLhnXR7gxUFuzy47jMw',
	  'useHTTPS': true
	});

	// Obtain the default map types from the platform object:
	var defaultLayers = platform.createDefaultLayers();

	// Instantiate (and display) a map object:
	var map = new H.Map(
	  document.getElementById('mapContainer'),
	  defaultLayers.normal.map,
	  {
	    zoom: 10.3,
	    center: { lat: 47.45, lng: -122.27 }
	});

	map.setBaseLayer(defaultLayers.terrain.traffic);
	map.addLayer(defaultLayers.incidents);

	var ui = H.ui.UI.createDefault(map, defaultLayers);
	// ui.getControl('mapsettings').setEnabled(false);
	var mapEvents = new H.mapevents.MapEvents(map);

	// Add event listener:
	map.addEventListener('tap', function(evt) {
	  // Log 'tap' and 'mouse' events:
	  console.log(evt.type, evt.currentPointer.type); 
	});
	var behavior = new H.mapevents.Behavior(mapEvents);
	
// calendar / date stuff
	let calMonth = document.getElementById("calMonth");
	let calDay = document.getElementById("calDay");
	let calTime = document.getElementById("calTime");
	let calHour = document.getElementById("calHour");
	let calMin = document.getElementById("calMin");
	let calAmPm = document.getElementById("calAmPm");
	// reminder - we set today's date to be UTCDate1 up in the weather stuff
	// reminder - because we're using UTCDate1, calendar stuff has to be called AFTER weather stuff!
	function setCalendar() {
		calMonth.innerHTML = months[(UTCdate1.getMonth())];
		calDay.innerHTML = UTCdate1.getDate();
		var t = new Date();
		var s = t.getSeconds();
		var m = t.getMinutes();
		if (m < 10) {
			m = "0" + m;
		}
		if (t.getHours()>12) {
			var ampm = "pm"
			calAmPm.innerHTML = "pm" 
		} else {
			var ampm = "am"
			calAmPm.innerHTML = "am"
		};
		if (ampm === "pm") {
			var h = t.getHours() - 12 
		} else {
			var h = t.getHours()
		};
		// var h = t.getHours();
		// calTime.textContent = h + ":" + m + ":" + s;
		calHour.textContent = h;
		calMin.textContent = m;
		// calTime.textContent = h + ":" + m + ampm;
	}
	setTimeout(setCalendar, 600);
	setInterval(setCalendar,1000);



function zoomOutMobile() {
  var viewport = document.querySelector('meta[name="viewport"]');

  if ( viewport ) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1200";
  }
}
window.scrollTo(0,0);
zoomOutMobile();














