let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3); // Use let for variable declaration
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Scissors";
    } else {
        return "Paper"; // Correct the spelling to "Paper"
    }
}

function getHumanChoice() {
    const userInput = prompt('Rock, Paper, or Scissors?').trim().toLowerCase(); // Normalize input

    if (userInput === 'rock') {
        return 'Rock';
    } else if (userInput === 'paper') {
        return 'Paper';
    } else if (userInput === 'scissors') {
        return 'Scissors';
    } else {
        console.log('Please enter a valid option');
        return getHumanChoice(); // Recursively prompt again for valid input
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        HumanScore++;
    } else {
        console.log(`You lost this round. ${computerChoice} beats ${humanChoice}`);
        ComputerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Scores: Human - ${HumanScore}, Computer - ${ComputerScore}`);
    if (HumanScore > ComputerScore) {
        console.log('Congratulations! You win the game!');
    } else if (HumanScore < ComputerScore) {
        console.log('You lost the game. Better luck next time!');
    } else {
        console.log("It's a tie game!");
    }
}

// To play the game, call playGame();
// playGame();

// i finished the logic and i optimized the code with chatgpt but i orginially wrote everything but chatgpt fixed my mistakes its time to create the ui
