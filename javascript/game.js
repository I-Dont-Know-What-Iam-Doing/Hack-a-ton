// document.addEventListener('DOMContentLoaded', () => {
//     let score = 0;
//     let numLength = 3;
//     let numbers = [];
//     const delay = 5000; // 5 seconds

//     const scoreElement = document.getElementById('score');
//     const gameContent = document.getElementById('game-content');
//     const startButton = document.getElementById('start-button');
//     const viewLeaderboardButton = document.getElementById('view-leaderboard-button');

//     function updateScore() {
//         scoreElement.textContent = score;
//     }

//     function displayNumbers() {
//         gameContent.innerHTML = `
//             <h2>Remember these numbers:</h2>
//             <p>${numbers.join(' ')}</p>
//         `;
//         setTimeout(() => {
//             gameContent.innerHTML = '';
//             getUserInput();
//         }, delay);
//     }

//     function getUserInput() {
//         gameContent.innerHTML = `
//             <h2>Enter the ${numLength} numbers separated by spaces:</h2>
//             <input type="text" id="user-input" placeholder="e.g., 1 2 3">
//             <button id="submit-button">Submit</button>
//         `;
//         document.getElementById('submit-button').addEventListener('click', checkAnswer);
//     }

//     function checkAnswer() {
//         const userInput = document.getElementById('user-input').value.trim().split(' ').map(Number);
//         if (userInput.length === numLength && JSON.stringify(userInput) === JSON.stringify(numbers)) {
//             alert('Congratulations! You remembered the numbers correctly.');
//             score++;
//         } else {
//             alert(`Sorry, that's not correct. The correct numbers were: ${numbers.join(' ')}`);
//         }
//         updateScore();
//     }

//     function startGame() {
//         numLength = parseInt(prompt('Choose difficulty (3 - easy, 5 - medium, 7 - hard):'), 10);
//         if (![3, 5, 7].includes(numLength)) {
//             alert('Invalid difficulty level');
//             return;
//         }
//         numbers = Array.from({ length: numLength }, () => Math.floor(Math.random() * 100) + 1);
//         displayNumbers();
//     }

//     function viewLeaderboard() {
//         fetch('leaderboard.json')
//             .then(response => response.json())
//             .then(data => {
//                 let leaderboardContent = '<h2>Leaderboard</h2>';
//                 for (const [user, scores] of Object.entries(data)) {
//                     const totalScore = scores.reduce((a, b) => a + b, 0);
//                     leaderboardContent += `<p>${user}: Total Score ${totalScore} | Games Won ${scores.length}</p>`;
//                 }
//                 gameContent.innerHTML = leaderboardContent;
//             });
//     }

//     startButton.addEventListener('click', startGame);
//     viewLeaderboardButton.addEventListener('click', viewLeaderboard);
// });


document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let numLength = 3;
    let numbers = [];
    const delay = 5000; // 5 seconds

    const scoreElement = document.getElementById('score');
    const gameContent = document.getElementById('game-content');
    const startButton = document.getElementById('start-button');
    const viewLeaderboardButton = document.getElementById('view-leaderboard-button');

    function updateScore() {
        scoreElement.textContent = score;
    }

    function displayNumbers() {
        gameContent.innerHTML = `
            <h2>Remember these numbers:</h2>
            <p>${numbers.join(' ')}</p>
        `;
        setTimeout(() => {
            gameContent.innerHTML = '';
            getUserInput();
        }, delay);
    }

    function getUserInput() {
        gameContent.innerHTML = `
            <h2>Enter the ${numLength} numbers separated by spaces:</h2>
            <input type="text" id="user-input" placeholder="e.g., 1 2 3">
            <button id="submit-button">Submit</button>
        `;
        document.getElementById('submit-button').addEventListener('click', checkAnswer);
    }

    function checkAnswer() {
        const userInput = document.getElementById('user-input').value.trim().split(' ').map(Number);
        if (userInput.length === numLength && JSON.stringify(userInput) === JSON.stringify(numbers)) {
            alert('Congratulations! You remembered the numbers correctly.');
            score++;
        } else {
            alert(`Sorry, that's not correct. The correct numbers were: ${numbers.join(' ')}`);
        }
        updateScore();
        saveScore();
    }

    function saveScore() {
        const username = prompt('Enter your username to save your score:');
        if (username) {
            fetch('http://127.0.0.1:5000/leaderboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, score })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Score saved:', data);
            })
            .catch(error => {
                console.error('Error saving score:', error);
            });
        }
    }

    function viewLeaderboard() {
        fetch('http://127.0.0.1:5000/leaderboard')
            .then(response => response.json())
            .then(data => {
                let leaderboardContent = '<h2>Leaderboard</h2>';
                for (const [user, scores] of Object.entries(data)) {
                    const totalScore = scores.reduce((a, b) => a + b, 0);
                    leaderboardContent += `<p>${user}: Total Score ${totalScore} | Games Won ${scores.length}</p>`;
                }
                gameContent.innerHTML = leaderboardContent;
            });
    }

    startButton.addEventListener('click', () => {
        numLength = parseInt(prompt('Choose difficulty (3 - easy, 5 - medium, 7 - hard):'), 10);
        if (![3, 5, 7].includes(numLength)) {
            alert('Invalid difficulty level');
            return;
        }
        numbers = Array.from({ length: numLength }, () => Math.floor(Math.random() * 100) + 1);
        displayNumbers();
    });

    viewLeaderboardButton.addEventListener('click', viewLeaderboard);
});



viewLeaderboardButton.addEventListener('click', () => {
    window.location.href = 'leaderboard.html'; // Adjust this path as necessary
});
