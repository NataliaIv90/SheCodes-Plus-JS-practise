// Challenge 1
// Create an array weekDays with all days of the week, console log the array

let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(weekDays);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’

console.log(weekDays[0], weekDays[weekDays.length - 1]);

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array

weekDays[6] = "Funday";
console.log(weekDays);

// Challenge 4
// Remove Monday and Tuesday
// Log the array

weekDays.shift();
weekDays.shift();
console.log(weekDays);

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

// solution #1

function currentWeather(weekItem) {
  console.log("Temperature on " + weekItem + " is 18 degrees");
}

weekDays.forEach(currentWeather);

// solution 2

weekDays.forEach(function (day) {
  console.log(`Temperature on ${day} is 18 degrees`);
});

// Log every day of the week this way:`Monday is a great day’

// solution #1

weekDays.forEach(function (day) {
  console.log(day + " is a great day");
});

// solution #2

weekDays.forEach(function (day) {
  console.log(`${day} is a great day`);
});

//Create an object weather and console log it
const weather = {};
console.log(weather);

//Create an object weather with properties of temp and humidity and console log the object
const weatherOne = { temp: 20, humidity: 89 };
console.log(weatherOne);

// console log the humidity and the temperature
console.log(weatherOne.temp);
console.log(weatherOne.humidity);

//Add a property windSpeed and console log it
weatherOne.windSpeed = 14;
console.log(weatherOne.windSpeed);

// Console log the wind speed, the temperature and the humidity using the square brackets syntax
console.log(weatherOne["temp"]);
console.log(weatherOne["humidity"]);
console.log(weatherOne["windSpeed"]);

//Create an object or an array of objects called `forecast` with each day’s temperature, and console log it
const forecast = {
  monday: {
    temperature: 20,
    humidity: 89,
    windSpeed: 14,
  },
  tuesday: {
    temperature: 15,
    hymidity: 80,
    windSpeed: 7,
  },
  wednesday: {
    temperature: 25,
    humidity: 65,
    windSpeed: 1,
  },
};
console.log(forecast);
console.log(forecast.wednesday);
console.log(forecast.monday["temperature"]);

let forecastNew = [
  {
    day: "monday",
    temp: 20,
  },
  {
    day: "tuesday",
    temp: 15,
  },
  {
    day: "wednesday",
    temp: 25,
  },
];
console.log(forecastNew[1]);
console.log(forecastNew[0].day);
console.log(forecastNew[0].temp);

console.log(
  `The temperature for ${forecastNew[0].day} will be ${forecastNew[0].temp}℃`
);

//in my opinion, it might be great
forecastNew.forEach(function (weekDay) {
  console.log(`The temperature for ${weekDay.day} will be ${weekDay.temp}℃`);
});
//whooray, it works!!!
