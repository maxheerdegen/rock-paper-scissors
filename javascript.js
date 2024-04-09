//Computer selects rock, paper or scissors
    //CALL math.random to get a random number bewteen 0-2
    //TRANSLATE number to rock, paper or scissors

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

let computerScore = 0;
let playerScore = 0;

const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

const roundWinner = document.createElement("div");
const gameScore = document.createElement("div");

choices.addEventListener("click", (event) => {
    console.log(event.target.className);
    playSingleRound(event.target.className);

    result.appendChild(roundWinner);

    gameScore.textContent = `Player ${playerScore}:${computerScore} Computer`;
    result.appendChild(gameScore);
})



