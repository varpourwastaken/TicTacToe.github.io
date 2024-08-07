document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const button = document.getElementById("reset button");
    const boardElement = document.getElementById("gameboard");

    let playerX = "X";
    let playerO = "O";
    let currentPlayer = playerX;
    let gameActive = true;
    let boardState = Array(9).fill("");

    const winningConditions = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]  
    ];

    function handleClick(e) {
        const cell = e.target;
        const cellIndex = cell.getAttribute('data-index');

        if (boardState[cellIndex] !== "" || !gameActive) {
            return;
        }

        boardState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner(boardState, currentPlayer)) {
            alert(`Player ${currentPlayer} is better then u `);
            resetBoard();
            return;
        }

        currentPlayer = currentPlayer === playerX ? playerO : playerX;
    }

    function checkWinner(board, player) {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] === player && board[b] === player && board[c] === player) {
                return true;
            }


        }


      
        return false;
    }


    function isDraw(board) {

        if (board.includes("")) {
            return false;
        }

     
        if (checkWinner(board, "X") || checkWinner(board, "O")) {
            return false; 
        }

        alert("Draw")
        resetBoard();

    }



    
    function resetBoard() {
        boardState = Array(9).fill("");
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = playerX;
        gameActive = true;
    }

    cells.forEach(cell => cell.addEventListener("click", handleClick));
    button.addEventListener("click", resetBoard);
});
