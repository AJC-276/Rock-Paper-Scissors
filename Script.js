let choice;
const choices = ["Rock", "Paper", "Scissors"];

const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};

console.log(randomValue(choices));

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log("Draw!")
    }

    // If player chose Rock
    if(playerSelection === "Rock") {
        if(computerSelection === "Paper") {
            console.log("You Lost!")
        } else {
            console.log("You Won!")
        }
    }
    // If player chose Paper
    if(playerSelection === "Paper") {
        if(computerSelection === "Scissors") {
            console.log("You Lost!")
        } else {
            console.log("You Won!")
        }
    }

    // If player chose Scissors
    if(playerSelection === "Scissors") {
        if(computerSelection === "Rock") {
            console.log("You Lost!")
        } else {
            console.log("You Won!")
        }
    }
const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));