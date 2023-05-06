let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
console.log(saveEl);
function INCREMENT() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  saveEl.textContent += countEl.textContent + " - ";
  countEl.innerText = 0;
  count = 0;
}
