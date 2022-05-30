// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios

function isWindy(speed) {
  if (speed > 5) {
    alert("It is windy");
  } else {
    alert("It is not windy");
  }
}

isWindy(1);
isWindy(20);

// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’
// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

function isWindyNew(speed, unit) {
  if (unit === "metric") return speed > 5;
}

let speed = prompt("What speed of wind?");
let unit = prompt("What is the unit?").toLowerCase().trim();

if (isWindyNew(speed, unit)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}
