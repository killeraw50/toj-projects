let container = document.querySelector(".container");
let grid = document.querySelector(".grid");
function generateGrid(size) {
    grid.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            grid.appendChild(square);
        }
    }
    grid.style.width = (size * 22 + "px");
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("color");
    });
    });
}