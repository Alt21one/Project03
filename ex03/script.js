let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounter() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "#17212b";
  }
}

function increment() {
  count += 1;
  updateCounter();
}

function decrement() {
  count -= 1;
  updateCounter();
}

function resetCounter() {
  count = 0;
  updateCounter();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", resetCounter);

updateCounter();
