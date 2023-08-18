
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
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "playerWin";
    }else{
        console.log(`You lose :-( ${computerSelection} beats ${playerSelection}`);
        return "computerWin";
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection1= prompt("What do you choose? Rock, Paper, or Scissors?");
    if (playSingleRound(playerSelection1, getComputerChoice()) === "playerWin"){
        playerScore ++;
    }else{
        computerScore ++;
    }

    let playerSelection2= prompt("What do you choose? Rock, Paper, or Scissors?");
    if (playSingleRound(playerSelection2, getComputerChoice()) === "playerWin"){
        playerScore ++;
    }else{
        computerScore ++;
    }

    let playerSelection3= prompt("What do you choose? Rock, Paper, or Scissors?");
    if (playSingleRound(playerSelection3, getComputerChoice()) === "playerWin"){
        playerScore ++;
    }else{
        computerScore ++;
    }

    let playerSelection4= prompt("What do you choose? Rock, Paper, or Scissors?");
    if (playSingleRound(playerSelection4, getComputerChoice()) === "playerWin"){
        playerScore ++;
    }else{
        computerScore ++;
    }

    let playerSelection5= prompt("What do you choose? Rock, Paper, or Scissors?");
    if (playSingleRound(playerSelection5, getComputerChoice()) === "playerWin"){
        playerScore ++;
    }else{
        computerScore ++;
    }

    

    if(playerScore > computerScore){
        return `Congrats, you beat the computer ${playerScore} to ${computerScore}`;

    }
    else{
        return `Tough luck, the computer beat you ${computerScore} to ${playerScore}`;
    }


}

console.log(game());
