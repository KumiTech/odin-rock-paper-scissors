// Simple Rock Paper Scissors Game

 // Player score variables
let humanScore = 0;
let computerScore = 0;

// Logic to get computer choice
let getComputerChoice = () => {
  const randomSelector = Math.random();
  let computerChoice;
  if (randomSelector < 1/3) {
    computerChoice = "Rock";
  } else if (randomSelector < 2/3){
    computerChoice = "Scissors";
  } else{
    computerChoice = "Paper";
  }
  return computerChoice;
}

// Logic to get human choice
// function getHumanChoice(){
//   let humanChoice = prompt("Input your choice (Rock, Paper or Scissors): ");
//   humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
//   return humanChoice;
// }

// Logic for a single round
// let playRound = (humanChoice, computerChoice) => {
//   let message = ""
//   message = "You chose: " + humanChoice;
//   message = "Computer chose: " + computerChoice;
//   if (computerChoice === humanChoice){
//     message = "It's a tie";
//   } else if ((humanChoice === "Rock" && computerChoice ==="Scissors") || (humanChoice === "Scissors" && computerChoice ==="Paper") || (humanChoice === "Paper" && computerChoice ==="Rock")) {
//     message = ("You win");
//     humanScore++;
//   } else {
//     message = `You Lose, Computer Wins , ${computerChoice} beats ${humanChoice}`
//     computerScore++;
//   }
//   displayResult.textContent = message
// }

// Selecting buttons
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//displays for results
const roundResult = document.getElementById('round-result');
const scoreDisplay = document.getElementById('score');
const gameWinner = document.getElementById('game-winner');



//logic for game play
function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) {
      return ; 
    }

    const computerChoice = getComputerChoice();
    let resultMessage = '';

    if (humanChoice === computerChoice) {
      resultMessage = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
      (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      humanScore++;
      resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    
    roundResult.textContent = resultMessage;
    scoreDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    
    if (humanScore === 5) {
      gameWinner.textContent = 'Congratulations! You won the game!';
      disableButtons();
      
    } else if (computerScore === 5) {
      gameWinner.textContent = 'Oh no! The computer won the game!';
      disableButtons();
      
    }
}

function disableButtons() {
  document.querySelectorAll('#buttons button').forEach(button => {
    button.disabled = true;
  });
}


/* const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection); */

// Logic for a full game until one player reaches 5 points
/* playgame = () => {
  while (humanScore < 5 && computerScore < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    alert("Your score: " + humanScore + " Computer score: " + computerScore);
    }
    if (humanScore === 5){
      alert("Congratulations! You won the game!");
      }
      else {
        alert("Computer won the game! Better luck next time.");
    }
    }
    
    Logic for a full game of 5 rounds
    
    /* playgame = () => {
      const total_rounds = 5;
      let rounds_played = 0;
      
      while (rounds_played < total_rounds){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    rounds_played++;
    alert("Your score: " + humanScore + " Computer score: " + computerScore);
    }
    if (humanScore > computerScore){
      alert("Congratulations! You won the game!");
      }
      else if (computerScore > humanScore) {
        alert("Computer won the game! Better luck next time.");
        }
        }
        playgame(); */
        
        // Logic for a full game of n rounds
        
        // playgame = () => {
          //   const total_rounds = prompt("Enter number of rounds you want to play: ");
          //   let rounds_played = 0;
          
          //    while (rounds_played < total_rounds){
            //     const humanSelection = getHumanChoice();
            //     const computerSelection = getComputerChoice();
            //     playRound(humanSelection, computerSelection);
            //     rounds_played++;
            //     alert("Your score: " + humanScore + " Computer score: " + computerScore);
            //   }
            //   if (humanScore > computerScore){
              //     alert("Congratulations! You won the game!");
              //   }
              //   else if (computerScore > humanScore) {
//     alert("Computer won the game! Better luck next time.");
//   }
// }
// playgame();

// Event listeners for buttons
rockButton.addEventListener('click', () => {
  playRound("Rock") 
});

paperButton.addEventListener("click",() => {
  playRound("Paper")
  
})

scissorsButton.addEventListener("click",() => {
  playRound("Scissors")
})
