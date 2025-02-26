const p1Button = document.getElementById('p1Button')
const p1Display = document.getElementById('player1display')
const p2Display = document.getElementById('player2display')
const resetButton = document.getElementById('reset')
const winningScoreSelect = document.getElementById('playto')
const resultDisplay = document.getElementById('resultDisplay')
const rpsChoices = document.getElementById('rpsChoices')
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

let lastScore = null;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        rpsChoices.style.display = 'block';
    }
})

rockButton.addEventListener('click', function () {
    playRockPaperScissors('rock');
    pingpongImage.classList.toggle('flip');
});
paperButton.addEventListener('click', function () {
    playRockPaperScissors('paper');
    pingpongImage.classList.toggle('flip');
});

scissorsButton.addEventListener('click', function () {
    playRockPaperScissors('scissors');
    pingpongImage.classList.toggle('flip');

});

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    resultDisplay.textContent = '';
    rpsChoices.style.display = 'none';
    p1Button.style.backgroundColor = '';
    p1Button.textContent = 'Hit the Ball';

    lastScore = null;
}


// Rock, Paper, Scissors logic add on
function playRockPaperScissors(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = `It's a tie! Both chose ${playerChoice}.`;

    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            resultDisplay.textContent += '';
            p1Button.textContent = 'Winner';
        }

        if (lastScore !== 'player1') {
            lastScore = 'player1'
        }

    } else {
        resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            resultDisplay.textContent += '';
            p1Button.textContent = 'Loser';
            p1Button.style.backgroundColor = 'red';
        }

        if (lastScore !== 'player2') {
            lastScore = 'player2'
        }

    }

    rpsChoices.style.display = 'none';
}