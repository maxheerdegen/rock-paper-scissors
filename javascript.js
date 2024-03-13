//Computer selects rock, paper or scissors
    //CALL math.random to get a random number bewteen 0-2
    //TRANSLATE number to rock, paper or scissors

function getComputerChoice() {
    let ChoiceNumber = Math.floor(Math.random() * 3);
    switch (ChoiceNumber) {
        case 0:
            console.log("ok");
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
console.log(computerSelection);

