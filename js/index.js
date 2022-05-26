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
