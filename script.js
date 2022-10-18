//Take in each possible input (the 3 image buttons)
const rock = document.querySelector('img[alt="rock"]');
const paper = document.querySelector('img[alt="paper"]');
const scissors = document.querySelector('img[alt="scissors"]');

//Function getComputerChoice() for computer's choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        
    }
}
//Function playRound(playerChoice) to evaluate a round based on PlayerChoice and ComputerChoice
function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let result = null;

    switch(playerChoice){
        case 'rock':
            switch(computerChoice){
                case 'rock':
                    result = 'Tie';
                    break;
                case 'paper':
                    result = 'Player loses';
                    break;
                case 'scissors':
                    result = 'Player wins';
                    break;
                default:
                    result = 'Something went wrong';
            }
            break;

        case 'paper':
            switch(computerChoice){
                case 'rock':
                    result = 'Player wins';
                    break;
                case 'paper':
                    result = 'Tie';
                    break;
                case 'scissors':
                    result = 'Player loses';
                    break;
                default:
                    result = 'Something went wrong';
            }
            break;

        case 'scissors':
            switch(computerChoice){
                case 'rock':
                    result = 'Player loses';
                    break;
                case 'paper':
                    result = 'Player wins';
                    break;
                case 'scissors':
                    result = 'Tie';
                    break;
                default:
                    result = 'Something went wrong';
            }
            break;

        default:
            result = 'Something went wrong';
    }
    return result;
}

//Event listeners for each button that will then call playRound() and pass the player's choice

//game() function that continues looping until either the player's score or the computer's score
//has reached 5