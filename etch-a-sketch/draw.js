const grid = document.querySelector(".grid");
const sizeInput = document.getElementById("size");
sizeInput.addEventListener("input", function generateGrid() {
    grid.innerHTML = "";
    let gridSize = document.getElementById("size").value;
    if (gridSize < 4 || gridSize > 100) {
        grid.textContent = "Please enter a value greater than 4 and less than a 100";
        return;
    }
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            grid.appendChild(square);
        }
    }
    grid.style.width = (gridSize * 22 + "px");
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("color");
        });
    });
});