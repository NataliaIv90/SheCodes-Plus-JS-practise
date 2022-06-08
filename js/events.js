// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

function alertWeather() {
  alert(`It is 18 degrees`);
}

let button = document.querySelector("#temperature-button");
button.addEventListener("click", alertWeather);

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function changeButton() {
  let button = document.querySelector("#temperature-button");
  button.innerHTML = "18 degrees";
}

button.addEventListener("click", changeButton);
