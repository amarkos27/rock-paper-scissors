//Take in each possible input (the 3 image buttons)
const buttonList = document.querySelectorAll('img');
const textArea = document.querySelector('h2');

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
                    result = 'You took this round, paper beats rock.';
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
    let score = '';
    //Define computer choice, playerChoice and set to null
    let playerChoice = null, compChoice = null;

    //Add 3 event listeners for the buttons
    buttonList.forEach(button => button.addEventListener('click', continueGame));

    //Inside each event listener: call playRound() pass player choice based on button, put it in
    //result variable.
    //Set computer choice with getComputerChoice()
    //If playerWon is 0, do nothing
    //If playerWon is true, add 1 to playerScore
    //If playerWon is false, add 1 to computer score
    function continueGame(e) {
        playerChoice = e.target.alt;
        compChoice = getComputerChoice();
        let result = playRound(playerChoice, compChoice);
        if(result.playerWon === 0){
            score = `Player: ${playerScore} Computer: ${compScore}`
            textArea.textContent = result.result +`\n${score}`;
        } else if(result.playerWon){
            playerScore++;
            score = `Player: ${playerScore} Computer: ${compScore}`
            textArea.textContent = result.result +`\n${score}`;
        } else{
            compScore++;
            score = `Player: ${playerScore} Computer: ${compScore}`
            textArea.textContent = result.result +`\n${score}`;
        }

        //If playerScore OR compScore reaches 5, declare winner, create playAgain button that resets
        //scores and restarts the game
        if(playerScore === 5){
            textArea.textContent = 'You win! For now...';
            resetGame();
        } else if(compScore === 5){
            textArea.textContent = 'You lose! Better luck next time, chump.';
            resetGame();
        }
    };
    
    function resetGame() {
        buttonList.forEach(button => {
            button.removeEventListener('click', continueGame);
            button.classList.remove('gameOn');
        });

        playerScore = 0;
        compScore = 0;
        let button = document.createElement('button');
        let buttonArea = document.querySelector('.buttonArea');
        
        button.classList.add('btn')
        button.textContent = 'Go again?';
        buttonArea.appendChild(button);

        button.addEventListener('click', () => {
            textArea.textContent = 'Choose your weapon';
            button.parentNode.removeChild(button);
            buttonList.forEach(node => node.classList.add('gameOn'));
            game();
        });
    }
}

game();