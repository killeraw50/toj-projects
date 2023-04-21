let x = 1;
let currentPlayer;
let rounds = 1;
let gameFinished = false;
const cells = document.querySelectorAll(".cells");
const resetButton = document.querySelector(".reset");
const player = document.querySelector(".player");
const display = document.querySelector(".announce");

function playerClick() {
    if(gameFinished) {
        return;
    }
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if(gameFinished || cell.textContent !== "") {
            return;
            }
            if(rounds % 2 !== 0) {
                cell.textContent = "X";
                currentPlayer = "Player 1";
                player.textContent = "Player 2";
            }
            else {
                cell.textContent = "O";
                currentPlayer = "Player 2";
                player.textContent = "Player 1";
            }
            rounds++;
            const win = playerWin();
            if(win) {
                display.textContent = currentPlayer + " Wins!";
            }
            else if(rounds > 9) {
                display.textContent = "Draw!";
            }
        })
    })
}
playerClick();
function playerWin() {
    for(let i = 0; i < cells.length; i += 3) {
        if(cells[i].textContent !== "" &&
            cells[i].textContent === cells[i + 1].textContent &&
            cells[i + 1].textContent === cells[i + 2].textContent) {
                gameFinished = true;
            return true;
        }
    }
    for(let i = 0; i < 3; i ++) {
        if(cells[i].textContent !== "" &&
            cells[i].textContent === cells[i + 3].textContent &&
            cells[i + 3].textContent === cells[i + 6].textContent) {
                gameFinished = true;
            return true;
            }
    }
    if(cells[0].textContent !== "" &&
        cells[0].textContent === cells[4].textContent &&
        cells[4].textContent === cells[8].textContent) {
            gameFinished = true;
        return true;
        }
    if(cells[2].textContent !== "" &&
        cells[2].textContent === cells[4].textContent &&
        cells[4].textContent === cells[6].textContent) {
            gameFinished = true;
        return true;
        }
    return false;
}
resetButton.addEventListener("click", () => {
    resetGame();
})
function resetGame() {
    cells.forEach(cell => {
        cell.textContent = "";
      });
      rounds = 1;
      gameFinished = false;
      player.textContent = "Player 1";
}