
function getComputerChoice(){
    let game_plays = ["Rock","Paper","Scissors"];
    return game_plays[Math.floor(Math.random() * 3)];

}

console.log(getComputerChoice());
