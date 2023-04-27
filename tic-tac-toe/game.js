let rounds = 1;
let gameFinished = false;
const cells = document.querySelectorAll(".cells");
const resetButton = document.querySelector(".reset");
const player = document.querySelector(".player");

function playerClick() {
    if(gameFinished) {
        return;
    }
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            let currentPlayer;
            if(gameFinished || cell.textContent !== "") {
                return;
            }
            cell.textContent = (rounds % 2 !== 0) ? "X" : "O";
            currentPlayer = (rounds % 2 !== 0) ? "Player 1" : "Player 2";
            player.textContent = (rounds % 2 !== 0) ? "Player 2 turn" : "Player 1 turn";
            rounds++;
            const win = playerWin();
            if(win) {
                player.textContent = currentPlayer + " Wins!";
            }
            else if(rounds > 9) {
                player.textContent = "Draw!";
            }
        })
    })
}
playerClick();
function playerWin() {
    for(let i = 0; i < cells.length; i += 3) {
        if(cells[i].textContent !== "" && cells[i].textContent === cells[i + 1].textContent && cells[i + 1].textContent === cells[i + 2].textContent) {
            gameFinished = true;
            return true;
        }
    }
    for(let i = 0; i < 3; i ++) {
        if(cells[i].textContent !== "" && cells[i].textContent === cells[i + 3].textContent && cells[i + 3].textContent === cells[i + 6].textContent) {
            gameFinished = true;
            return true;
            }
    }
    if(cells[0].textContent !== "" && cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent) {
        gameFinished = true;
        return true;
        }
    if(cells[2].textContent !== "" && cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent) {
        gameFinished = true;
        return true;
        }
    return false;
}
resetButton.addEventListener("click", () => {
    cells.forEach(cell => {
        cell.textContent = "";
    });
    rounds = 1;
    gameFinished = false;
    player.textContent = "Player 1 turn";
})