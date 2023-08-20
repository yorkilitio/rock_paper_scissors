
const resultsContainer = document.querySelector('#resultsContainer');
const singleRoundResult = document.createElement('p');
singleRoundResult.classList.add('singleRoundResult');
const gameWinner = document.createElement('p');
gameWinner.classList.add('gameWinner');
const runningScore = document.createElement('p');
runningScore.classList.add('runningScore');

let playerScore = 0;
let computerScore = 0;
        

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
        console.log(playerScore);
        playerScore ++;
        runningScore.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore} `;
        resultsContainer.appendChild(runningScore);
        
    }
    else if (playerSelectionUpper === computerSelectionUpper){

        singleRoundResult.textContent = `Tie!`;
        resultsContainer.appendChild(singleRoundResult);
        runningScore.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore} `;
        resultsContainer.appendChild(runningScore);
        
    }
    else{
        singleRoundResult.textContent = `You lose :-( ${computerSelection} beats ${playerSelection}`;
        resultsContainer.appendChild(singleRoundResult);
        console.log(computerScore);
        computerScore ++;
        runningScore.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore} `;
        resultsContainer.appendChild(runningScore);
        
    }


    if(playerScore === 5){ 
        gameWinner.textContent = `Hurayyy! You win by ${playerScore} to ${computerScore}`; 
        resultsContainer.appendChild(gameWinner); 
    }else if (computerScore === 5){ 
        gameWinner.textContent = `Sorry :-( The computer wins by ${computerScore} to ${playerScore}`; 
        resultsContainer.appendChild(gameWinner); 
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

