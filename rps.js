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
    console.log("Tie Game!");
    return 0;
  }
  else if(
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
  else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  }
}

function game() {
  let score = 0;
  for(let i = 0; i < 5; i++) {
    let playerSelection = camelCase(prompt("Pick Rock, Paper, or Scissors."));
    let computerSelection = getComputerChoice();
    console.log(`You picked ${playerSelection}`);
    console.log(`Computer picked ${computerSelection}`);
    score += playRound(playerSelection, computerSelection);
    console.log(`Current score is ${score}. Round ${i + 1} out of 5.`);
  }
}


function camelCase(string) {
  return string.toLowerCase().replace(/^./,string.charAt(0).toUpperCase());
}

game();
