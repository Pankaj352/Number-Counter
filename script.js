const box = document.getElementById("box");
const countBox = document.getElementById("count");
let count = 0;
const err = document.getElementById("error");

function increment() {
 countBox.textContent = count++;
 err.textContent = "";
}
function decrement() {
  if (count < 1) {
    err.textContent = Error("Cannot go below 0");
  } else {
   countBox.textContent = count--;
   err.textContent = "";
  }
}

function reset() {
 count = 0;
 countBox.textContent = count;
 err.textContent = "";
}
