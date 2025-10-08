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
    alert(`You Lose, Computer Wins , ${computerChoice} beats ${humanChoice}`)
    computerScore++;
  }
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

playgame = () => {
  const total_rounds = prompt("Enter number of rounds you want to play: ");
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
playgame();



