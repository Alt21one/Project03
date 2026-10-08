const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.querySelector("#activate");

title.textContent = "Welcome to JavaScript";
message.textContent = "The DOM can be changed using JavaScript.";

button.style.backgroundColor = "black";
button.style.color = "white";

message.classList.add("active");