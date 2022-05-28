
// JS Challenge 1
// Given an object called paris, log its temperature

let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

console.log(paris.temperature);

// JS Challenge 2
// Create an object called sydney similar to paris and log its temperature (use fake data)

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 25,
  capitalCity: false
};

console.log(sydney.temperature);

// JS Challenge 3
// Create an array with 3 different Australian city names only and log each name

let auCity = ["Sydney", "Melbourne", "Perth"];
console.log(auCity[0]);
console.log(auCity[1]);
console.log(auCity[2]);

// JS Challenge 4
// Create an array of 3 cities with the same properties as paris and console log each city temperature

const cities = [
  {
    name: "Kyiv",
    country: "Ukraine",
    language: "Ukrainian",
    temperature: 25,
    capitalCity: true
  },
  {
    name: "Krakiv",
    country: "Poland",
    language: "Polish",
    temperature: 18,
    capitalCity: false
  },
  {
    name: "Vilnus",
    country: "Lithuania",
    language: "Lithuanian",
    temperature: 8,
    capitalCity: true
  }
];

// #1

console.log(cities[0].temperature);
console.log(cities[1].temperature);
console.log(cities[2].temperature);

// #2

cities.forEach(function (city) {
  console.log(city.temperature);
});
