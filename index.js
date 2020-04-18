let playerCounter = 0;
let computerCounter = 0;
let computerSelection = "";

function game() {

    playRound(getComputerSelection(), playerSelection);
    declareWinner(playerCounter, computerCounter);
    
    
    const scoreArea = document.querySelector(['.running-score']);
    const computerScore = document.createElement('p');
    scoreArea.innerHTML = '';
    computerScore.textContent = 'The current score is... Robot: ' + computerCounter + ' Human: ' + playerCounter;
    scoreArea.appendChild(computerScore);  

    const resultsDisplay = document.querySelector(['.round-result']);
    const resultsPing = document.createElement('p');
    resultsDisplay.innerHTML = '';
    resultsPing.textContent = resultsDeclaration;
    resultsDisplay.appendChild(resultsPing);

}


function playRound(computerSelection, playerSelection) {
    switch(playerSelection + computerSelection) {
        //player win scenarios
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;

        //player lose scenarios   
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;

        //player tie scenarios
        case "rockrock":            
        case "paperpaper":    
        case "scissorsscissors":
            tie();
            break;
    }
    
}   

//Get player input from buttons
let playerSelection = '';
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
});

//Generates a random number and uses that to determine the computer's choice.
function getComputerSelection() {
    let num = Math.random() * 6;
    if (num <= 2) {
        return "rock";
    } else if (num >= 4) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Keeps a counter of the player's score and the computer's score in the counter variables
//Create the results of each round at the bottom of the page
let roundFeedback = "";

const roundResultContainer = document.querySelector(['.round-result']);
const results = document.createElement('p');
results.textContent = roundFeedback;
roundResultContainer.appendChild(results);

function win() {
    playerCounter++;
    roundFeedback = 'You win this time human...';
}

function lose() {
    computerCounter++;
    roundFeedback = 'Better luck next time human';
}

function tie() {
    roundFeedback = 'Draw!';
}

//Compares counters, first counter to get to 3 gets an output
let resultsDeclaration = "";
function declareWinner (playerCounter, computerCounter) {
    if (playerCounter == 3) {
        resultsDeclaration = 'Player wins!';
    } else if (computerCounter == 3) {
        resultsDeclaration = 'Player loses...';
    } else {
        resultsDeclaration = '';
    }
    

}




//Creates the running score at the bottom of the page. 
// const scoreArea = document.querySelector(['.running-score']);
// const computerScore = document.createElement('p');
// computerScore.textContent = 'The current score is... Robot: ' + computerCounter + ' Human: ' + playerCounter;
// scoreArea.appendChild(computerScore);
