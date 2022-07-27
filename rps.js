function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
  case 0:
    return "Rock";
  case 1:
    return "Paper";
  case 2:
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "Tie Game!";
  }
  else if(
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
  else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  }
}

