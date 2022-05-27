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
