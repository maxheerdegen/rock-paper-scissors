function getComputerChoice() {
    let ChoiceNumber = Math.floor(Math.random() * 3);
    switch (ChoiceNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function eventHandler() {
    playSingleRound(event.target.className);

    result.appendChild(roundWinner);

    gameScore.textContent = `Player ${playerScore}:${computerScore} Computer`;
    result.appendChild(gameScore);

    endGame();
}

function playSingleRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (
        computerSelection === "rock" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "rock" 
    ){
        roundWinner.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`
        return playerScore++;
    }
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper" 
    ){
        roundWinner.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. Computer wins!`
        return computerScore++;
    }
    else {
        roundWinner.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. Draw!`
    }
}

function endGame() {
    if (computerScore === 5 || playerScore === 5) {
        choices.removeEventListener("click", eventHandler);
    
        if (computerScore === 5) {
            gameEnd.textContent = "Game over. Computer wins the game.";
        }
    
        else if (playerScore === 5) {
            gameEnd.textContent = "Game over. You win the game.";
        }
    
        result.appendChild(gameEnd);
    }
}

let computerScore = 0;
let playerScore = 0;

const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

const roundWinner = document.createElement("div");
const gameScore = document.createElement("div");
const gameEnd = document.createElement("div");

choices.addEventListener("click", eventHandler);



