function getComputerChoice() {
    let randNum = Math.floor(Math.random() * (4 - 1) + 1);
    if (randNum == 1) {
        return 'rock';
    } else if (randNum == 2) {
        return 'paper';
    } else if (randNum == 3) {
        return 'scissors'
    } else {
        return 'Error'
    }
}

var tied = 0;
var won = 0;
var lost = 0;

function playGameOnce() {
    let computerChoice = getComputerChoice();
    let playerChoiceUnedited = prompt('Please enter rock, paper, or scissors')
    let playerChoice = playerChoiceUnedited.toLowerCase();
    
    

    if (playerChoice == computerChoice) {tied += 1; return `The computer threw ${computerChoice}, it is a tie`; }
    
    if (playerChoice == 'rock' && computerChoice == 'scissors') {won += 1; return `The computer threw ${computerChoice}, you won!`; }
    if (playerChoice == 'rock' && computerChoice == 'paper') {lost += 1; return `The computer threw ${computerChoice}, you lose`; }

    if (playerChoice == 'paper' && computerChoice == 'rock') {won += 1; return `The computer threw ${computerChoice}, you won!`; }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {lost += 1; return `The computer threw ${computerChoice}, you lose`; }

    if (playerChoice == 'scissors' && computerChoice == 'paper') {won += 1; return `The computer threw ${computerChoice}, you won!`; }
    if (playerChoice == 'scissors' && computerChoice == 'rock') {lost += 1; return `The computer threw ${computerChoice}, you lose`; }

}


function playGame () {
    let results = ''
    

    for (let i = 0; i <= 4; i++) {
        results += playGameOnce() + "<br>";
    }
    
    document.getElementById("results").innerHTML = results
    let score = won + '/' + lost + '/' + tied
    document.getElementById("score").innerHTML = score
}