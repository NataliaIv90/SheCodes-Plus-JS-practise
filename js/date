let now = new Date();
console.log(now);
// JS Challenge 1
// Log the current date
let currentDate = now.getDate();
console.log(currentDate);
// JS Challenge 2
// Log the number of milliseconds in the current time
let currentMilliseconds = now.getMilliseconds();
console.log(currentMilliseconds);
// JS Challenge 3
// Log the current day
const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = dayName[now.getDay()];
console.log(currentDay);
// JS Challenge 4
// Log the current year
let currentYear = now.getFullYear();
console.log(currentYear);
// JS Challenge 5
// Log the current month
let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentMonth = monthName[now.getMonth()];
console.log(currentMonth);
// JS Challenge 6
// Display the current date following the following format: Today is Thursday, April 4, 2020
let formatedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
console.log(formatedDate);
// JS Challenge 7
// Create a function formatDate which returns a date following this format: Thursday, April 4, 2020
// Call this function with the current time Log the result such as console.log(formatDate(new Date()));
function formatDate(now) {
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = dayName[now.getDay()];

  let currentYear = now.getFullYear();

  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let currentMonth = monthName[now.getMonth()];

  let formatedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formatedDate;
}
console.log(formatDate(new Date()));
