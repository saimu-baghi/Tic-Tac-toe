class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
        this.gameOver = false;

        for (let i = 0; i < 9; i++) {
            const cell = document.querySelector(`.cell[data-position="${i}"]`);
            cell.addEventListener('click', () => this.makeMove(i));
        }
    }

    makeMove(position) {
        if (this.gameOver) {
            alert('Game over. Please start a new game.');
            return;
        }

        if (this.board[position] === null) {
            this.board[position] = this.currentPlayer;
            this.checkWinner();
            this.checkDraw();
            this.updadeBoard();
            this.switchPlayer();
        } else {
            alert('Invalid move. The position is already taken. Try again.');
        }
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winner = this.currentPlayer;
                this.gameOver = true;
                result.textContent = `Player ${this.winner} wins!`;
                return;
            }
        }
    }

    checkDraw() {
        if (this.gameOver != true) {
            if (!this.board.includes(null)) {
                this.gameOver = true;
                result.textContent = 'It\'s a draw!';
            }
        }
    }

    resetGame() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
        this.gameOver = false;
        this.updadeBoard();
    }

    updadeBoard() {
        const boardElement = document.getElementById('board');

        this.board.forEach((cell, index) => {
            const cellElement = boardElement.children[index];
            cellElement.textContent = cell;

        });
    }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();

    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    // Event listener for reset button
    resetBtn.addEventListener('click', () => {
        game.resetGame();
        result.textContent = '';
    });
});
