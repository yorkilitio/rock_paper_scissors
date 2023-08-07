
function getComputerChoice(){
    let game_plays = ["Rock","Paper","Scissors"];
    return game_plays[Math.floor(Math.random() * 3)];

}

function playSingleRound(playerSelection, computerSelection){
    playerSelectionUpper = playerSelection.toUpperCase();
    computerSelectionUpper = computerSelection.toUpperCase();
    
    if((playerSelectionUpper === "PAPER" && computerSelectionUpper === "ROCK")||
    (playerSelectionUpper === "ROCK" && computerSelectionUpper === "SCISSORS")||
    (playerSelectionUpper === "SCISSORS" && computerSelectionUpper === "PAPER")){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You lose :-( ${computerSelection} beats ${playerSelection}`;
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    let playerSelection = prompt("What do you choose? Rock, Paper, or Scissors?");
    

}

console.log(playSingleRound("paper","rock"));
