let HumanScore = 0;
let ComputerScore = 0;
const gameResultDiv = document.getElementById("gameresults");

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "Rock";
    } else if (number === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function startGame() {
    // Reset scores
    HumanScore = 0;
    ComputerScore = 0;

    // Update the result div with a starting message
    gameResultDiv.textContent = "Welcome to Rock, Paper, Scissors! Make your move!";

    // Enable the buttons
    document.getElementById("rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        gameResultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        gameResultDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
        HumanScore++;
    } else {
        gameResultDiv.textContent = `You lost this round. ${computerChoice} beats ${humanChoice}`;
        ComputerScore++;
    }

    gameResultDiv.textContent += `\nCurrent Scores: Human - ${HumanScore}, Computer - ${ComputerScore}`;

    if (HumanScore === 5 || ComputerScore === 5) {
        if (HumanScore === 5) {
            alert("CONGRATS YOU HAVE WON THE GAME");
        } else {
            alert("YOU LOST THE GAME");
        }

        // Disable buttons
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}

function resetGame() {
    // Reset scores
    HumanScore = 0;
    ComputerScore = 0;

    // Clear the game result display
    gameResultDiv.textContent = "Game has been reset. Please make your move!";

    // Enable buttons
    document.getElementById("rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
}

// Start the game automatically when the page loads
window.onload = startGame;

// Set up event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playRound('Rock', getComputerChoice()));
document.getElementById("Paper").addEventListener("click", () => playRound('Paper', getComputerChoice()));
document.getElementById("Scissors").addEventListener("click", () => playRound('Scissors', getComputerChoice()));

document.getElementById("resetButton").addEventListener("click", resetGame);


// it fucking works !!!!!! we can make a lot of improvements to the ui but i learned a lot in the  process
// i learned about dom manipulation
 // i can stop for tonight and make this game look nicer. tomorrow