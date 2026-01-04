const container = document.querySelector(".container");
const changeSizeBtn = document.querySelector(".change-size");

let size = 16;

function displayGrid (size) {
  for (i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";

    const squareSize = Math.floor((container.offsetWidth - size) / size);
    
    for (j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.className = "square";

      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      row.appendChild(square);
    }

    container.appendChild(row)

  }
}
function randomRGB() {
  const randNum = Math.floor(Math.random() * 255) + 1;
  return randNum;
}

function hoverSquare () {
  const squares = document.querySelectorAll(".square");
  
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    })
  })
}

changeSizeBtn.addEventListener("click", () => {
  do {
    size = Number(prompt("Which size do you want?"));
  } while (isNaN(size) || size <= 0 || size > 100)
    
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
    
  displayGrid(size);
  hoverSquare();
})
  
  
displayGrid(size);
hoverSquare();