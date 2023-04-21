let x = 1;
let currentPlayer;
let rounds = 1;
function playerClick() {
    let cells = document.querySelectorAll(".cells");
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if(cell.textContent !== "") {
            return;
            }
            let player = document.querySelector(".player");
            if(rounds % 2 !== 0) {
                cell.textContent = "X";
                currentPlayer = "Player 1";
                player.textContent = currentPlayer;
            }
            else {
                cell.textContent = "O";
                currentPlayer = "Player 2";
                player.textContent = currentPlayer;
            }
            rounds++;
            const win = playerWin();
            if(win) {
                document.querySelector(".announce").textContent = currentPlayer + " Wins!";
            }
            else if(rounds > 9) {
                document.querySelector(".announce").textContent = "Draw!";
            }
        })
    })
}
playerClick();
function playerWin() {
    const cells = document.querySelectorAll(".cells");
    for(let i = 0; i < cells.length; i += 3) {
        if(cells[i].textContent !== "" &&
            cells[i].textContent === cells[i + 1].textContent &&
            cells[i + 1].textContent === cells[i + 2].textContent) {
            return true;
        }
    }
    for(let i = 0; i < 3; i ++) {
        if(cells[i].textContent !== "" &&
            cells[i].textContent === cells[i + 3].textContent &&
            cells[i + 3].textContent === cells[i + 6].textContent) {
            return true;
            }
    }
    if(cells[0].textContent !== "" &&
        cells[0].textContent === cells[4].textContent &&
        cells[4].textContent === cells[8].textContent) {
        return true;
        }
    if(cells[2].textContent !== "" &&
        cells[2].textContent === cells[4].textContent &&
        cells[4].textContent === cells[6].textContent) {
        return true;
        }
    return false;
}
resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    resetGame();
})
function resetGame() {
    const cells = document.querySelectorAll(".cells");
    cells.forEach(cell => {
        cell.textContent = "";
      });
      rounds = 1;
}