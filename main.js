let btnClear = document.querySelector("button");
let inputs = document.querySelectorAll("input, textarea");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}
