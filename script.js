//Take in each possible input (the 3 image buttons)
const rock = document.querySelector('img[alt="rock"]');
const paper = document.querySelector('img[alt="paper"]');
const scissors = document.querySelector('img[alt="scissors"]');
const resultPara = document.querySelector('.result');
console.log(resultPara);

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
function playRound(playerChoice, computerChoice){
    let result = null;
    let playerWon = null;

    switch(playerChoice){
        case 'rock':
            switch(computerChoice){
                case 'rock':
                    result = 'Tie!';
                    playerWon = 0;
                    break;
                case 'paper':
                    result = 'Computer wins this round, paper beats rock.';
                    playerWon = false;
                    break;
                case 'scissors':
                    result = 'You win this one, rock beats scissors.';
                    playerWon = true;
                    break;
                default:
                    result = 'Something went wrong';
            }
            break;

        case 'paper':
            switch(computerChoice){
                case 'rock':
                    result = 'You took this round, paper beats rock';
                    playerWon = true;
                    break;
                case 'paper':
                    result = 'Looks like you both chose the cowardly option.';
                    playerWon = 0;
                    break;
                case 'scissors':
                    result = 'You lose, scissors beat your sheet of paper. Shocking...';
                    playerWon = false;
                    break;
                default:
                    result = 'Something went wrong';
            }
            break;

        case 'scissors':
            switch(computerChoice){
                case 'rock':
                    result = 'You lose, scissors don\'t do much to a rock.';
                    playerWon = false;
                    break;
                case 'paper':
                    result = 'You win, computer thought paper was a good weapon.';
                    playerWon = true;
                    break;
                case 'scissors':
                    result = 'Tie!';
                    playerWon = 0;
                    break;
                default:
                    result = 'Something went wrong';
            }
            break;

        default:
            result = 'Something went wrong';
    }
    return {playerWon, result};
}

//game() function that continues looping until either the player's score or the computer's score
//has reached 5
function game(){
    //Define player and computer score
    let playerScore = 0,  compScore = 0;
    //Define computer choice, playerChoice and set to null
    let playerChoice = null, compChoice = null;

    //Add 3 event listeners for the buttons
    //Inside each event listener: call playRound() pass player choice based on button, put it in
    //result variable.
    //Set computer choice with getComputerChoice()
    //If playerWon is 0, do nothing
    //If playerWon is true, add 1 to playerScore
    //If playerWon is false, add one to computer score
    const continueGame = (Event) => {
        playerChoice = Event.target.alt;
        compChoice = getComputerChoice();
        let result = playRound(playerChoice, compChoice);
        
    };
    rock.addEventListener('click', continueGame);

    //If playerScore OR compScore reaches 5, declare winner, create playAgain button that resets
    //scores and restarts the game
}

game();