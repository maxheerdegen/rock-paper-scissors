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

function playSingleRound(computerSelection, playerSelection) {
    if (
        computerSelection === "rock" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "rock" 
    ){
        return "Player wins"
    }
    if (
        computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper" 
    ){
        return "Computer wins"
    }
    else {
        return "It's a draw."
    }
}

//GET User Selection, case insensitive 

//DETERMINE winner
    //CASE playerSelection OF
    //1: playerSelection beats ComputerSelection
        //OUTPUT Player wins
    //2: computerSelection beats playerSelection
        //OUTPUT Computer wins
    //3: playerSelection equals computerSelection
        //OUTPUR Draw

const computerSelection = getComputerChoice();
let playerSelection;
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

console.log(playerSelection);
console.log(computerSelection);
console.log(playSingleRound(computerSelection, playerSelection));

