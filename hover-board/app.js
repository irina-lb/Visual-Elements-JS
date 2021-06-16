const board = document.querySelector("#board");
const colors = ["#ff1d58", "#f75990", "#fff685", "#00ddff", "#0049b7"];
const SQUARES_NUMBERS = 700;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomCalor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomCalor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
