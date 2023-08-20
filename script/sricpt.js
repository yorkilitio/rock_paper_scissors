
const resultsContainer = document.querySelector('#resultsContainer');
const singleRoundResult = document.createElement('p');
singleRoundResult.classList.add('singleRoundResult');
const gameWinner = document.createElement('p');
gameWinner.classList.add('gameWinner');
const runningScore = document.createElement('p');
runningScore.classList.add('runningScore');
        

function getComputerChoice(){
    let game_plays = ["Rock","Paper","Scissors"];
    return game_plays[Math.floor(Math.random() * 3)];

}

function playSingleRound(playerSelection, computerSelection){
    let playerSelectionUpper = playerSelection.toUpperCase();
    let computerSelectionUpper = computerSelection.toUpperCase();
    
    if((playerSelectionUpper === "PAPER" && computerSelectionUpper === "ROCK")||
    (playerSelectionUpper === "ROCK" && computerSelectionUpper === "SCISSORS")||
    (playerSelectionUpper === "SCISSORS" && computerSelectionUpper === "PAPER")){
        singleRoundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        resultsContainer.appendChild(singleRoundResult);
        return "playerWin";
    }
    else if (playerSelectionUpper === computerSelectionUpper){

        singleRoundResult.textContent = `Tie!`;
        resultsContainer.appendChild(singleRoundResult);
        return "draw";
    }
    else{
        singleRoundResult.textContent = `You lose :-( ${computerSelection} beats ${playerSelection}`;
        resultsContainer.appendChild(singleRoundResult);
        return "computerWin";
    }

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    button.addEventListener('click',function(){
        playSingleRound(button.id,getComputerChoice());
    }
    
    )

}

);

function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    
    runningScore.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore} `;
    resultsContainer.appendChild(runningScore);
    
    /*
    if(playerScore > computerScore){
        console.log("score is computing");
        gameWinner.textContent = `Congrats, you beat the computer ${playerScore} to ${computerScore}`;
        resultsContainer.appendChild(gameWinner);
        return `Congrats, you beat the computer ${playerScore} to ${computerScore}`;

    }
    else if (computerScore > playerScore){
        gameWinner.textContent = `Tough luck, the computer beat you ${computerScore} to ${playerScore}`;
        resultsContainer.appendChild(gameWinner);
        return `Tough luck, the computer beat you ${computerScore} to ${playerScore}`;
    }
    */



}

game();
