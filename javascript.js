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
        message.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`
    }
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper" 
    ){
        message.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. Computer wins!`
    }
    else {
        message.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. Draw!`
    }

    result.appendChild(message);
}


const choices = document.querySelector(".choices");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

const message = document.createElement("div");

choices.addEventListener("click", (event) => {
    console.log(event.target.className);
    playSingleRound(event.target.className);
})

