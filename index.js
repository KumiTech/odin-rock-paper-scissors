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
function getHumanChoice(){
  let humanChoice = prompt("Input your choice (Rock, Paper or Scissors): ");
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  return humanChoice;
}

// Logic for a single round
let playRound = (humanChoice, computerChoice) => {
  alert("You chose: " + humanChoice);
  alert("Computer chose: " + computerChoice);
  if (computerChoice === humanChoice){
    alert("It's a tie");
  } else if ((humanChoice === "Rock" && computerChoice ==="Scissors") || (humanChoice === "Scissors" && computerChoice ==="Paper") || (humanChoice === "Paper" && computerChoice ==="Rock")) {
    alert("You win");
    humanScore++;
  } else {
    alert("You Lose, Computer Wins")
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
