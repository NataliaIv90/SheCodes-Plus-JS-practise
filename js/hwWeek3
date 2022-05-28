let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// make city input information good looking for next using
let cityInput = prompt("Enter a city")
  .replace(/[.^$*+?()[{|\\]/g, "")
  .trim();

// make city input information the same format as key names in weather object
let city = cityInput.toLowerCase();

// alert message if received from user city is in object
function alertWeather() {
  let cityTempC = Math.round(weather[city].temp);
  let cityTempF = Math.round(weather[city].temp * 1.8 + 32);
  alert(
    `It is currently ${cityTempC}°C (${cityTempF}°F) in ${cityInput} with a humidity of ${weather[city].humidity}%`
  );
}

// alert mesage if user should searh the weather by himself in google
function googleWeather() {
  city = city.replace(" ", "+");
  alert(
    `Sorry, we don't know the weather for this city, try going to 
    https://www.google.com/search?q=weather+${city}`
  );
}

// the final condition statement 🥳
if (weather.hasOwnProperty(city)) {
  alertWeather();
} else {
  googleWeather();
}
