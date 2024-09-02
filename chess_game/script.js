const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
let board = [];
let selectedSquare = null;
let currentTurn = 'white';

// Initialize the chess board
function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        const row = Math.floor(i / 8);
        const col = i % 8;
        square.dataset.row = row;
        square.dataset.col = col;
        square.addEventListener('click', handleSquareClick);
        boardElement.appendChild(square);
        board.push(square);
    }
    renderBoard();
}

// Render the board with pieces
function renderBoard() {
    // Clear previous pieces
    board.forEach(square => square.innerHTML = '');

    // Place initial pieces
    const pieces = [
        'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
        'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
        'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'
    ];

    board.forEach((square, index) => {
        const piece = pieces[index];
        if (piece) {
            const pieceElement = document.createElement('span');
            pieceElement.textContent = piece;
            pieceElement.classList.add('piece');
            square.appendChild(pieceElement);
        }
    });
}

// Handle square click
function handleSquareClick(event) {
    const target = event.currentTarget;
    if (selectedSquare) {
        movePiece(selectedSquare, target);
        selectedSquare = null;
        currentTurn = currentTurn === 'white' ? 'black' : 'white';
        statusElement.textContent = `${currentTurn.charAt(0).toUpperCase() + currentTurn.slice(1)}'s turn`;
    } else {
        selectedSquare = target;
    }
}

// Move a piece
function movePiece(fromSquare, toSquare) {
    toSquare.innerHTML = fromSquare.innerHTML;
    fromSquare.innerHTML = '';
}

// Initialize the board
createBoard();
