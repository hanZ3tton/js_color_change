const btnRandom = document.getElementById("btnRandomColor");
const box = document.querySelector(".box");
const colorSlider = document.getElementById("colorSlider");

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

btnRandom.addEventListener("click", function (event) {
  event.preventDefault();

  box.style.backgroundColor = generateRandomColor();
});

colorSlider.addEventListener("input", function () {
  const hue = colorSlider.value;

  box.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
});
