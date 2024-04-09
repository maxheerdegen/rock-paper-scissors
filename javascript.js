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
        console.log("player");
    }
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper" 
    ){
        console.log("computer");
    }
    else {
        console.log("draw");
    }
}

function determineWinner(computerCounter, playerCounter) {
    if (computerCounter > playerCounter) {
        console.log(`Computer wins game. ${computerCounter}:${playerCounter}`);
    }
    else if (computerCounter < playerCounter) {
        console.log(`Player wins game. ${playerCounter}:${computerCounter}`);
    }
    else {
        console.log(`Noone wins the game. ${playerCounter}:${computerCounter}`);
    }
}

function playGame() {
    let whoWins;
    let computerCounter = 0;
    let playerCounter = 0;
    for (let round = 1; round <= 5; round++){
        whoWins = playSingleRound();
        if (whoWins === "computer") {
            console.log(`Round ${round} wins computer.`)
            computerCounter++;
        }
        if (whoWins === "player") {
            console.log(`Round ${round} wins player.`);
            playerCounter++;
        }
        if (whoWins === "draw") {
            console.log(`Round ${round} is a draw.`);
        }
    }
    determineWinner(computerCounter, playerCounter);
}

const choices = document.querySelector(".choices");

choices.addEventListener("click", (event) => {
    console.log(event.target.className);
    playSingleRound(event.target.className);
})

