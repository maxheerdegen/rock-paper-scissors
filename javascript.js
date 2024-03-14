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

function playSingleRound() {
    let playerSelection;
    let computerSelection = getComputerChoice();
    //GET player selection; test if it's rock, paper or scissors otherwise ask again; selection case insensitive
    while (true) {
        playerSelection = prompt("rock, paper or scissors?").toLowerCase();
        if (
            playerSelection === "rock" ||
            playerSelection === "paper" ||
            playerSelection === "scissors"
        ) {
            break;
        }
        else {
            console.log("Wrong selection");
        }
    }
    //DETERMINE winner of that round
    if (
        computerSelection === "rock" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "rock" 
    ){
        return "player"
    }
    else if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper" 
    ){
        return "computer"
    }
    else {
        return "draw"
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

playGame();

