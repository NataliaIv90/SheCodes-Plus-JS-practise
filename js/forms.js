function alertHooray() {
  alert("Hooray!");
}
let hoorayButton = document.querySelector("#special-button");
hoorayButton.addEventListener("click", alertHooray);

function inputPassword(event) {
  event.preventDefault();
  let alertMessage = document.querySelector("#password-input").value;
  alert(alertMessage);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", inputPassword);

function alertMessage(event) {
  event.preventDefault();
  let usersEmail = document.querySelector("#email-input").value;
  let usersName = document.querySelector("#username-input").value;
  alert(`Username - ${usersName}, email - ${usersEmail}`);
}

let emailForm = document.querySelector("#signup-form");
emailForm.addEventListener("submit", alertMessage);
