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
  const pScore = document.querySelector('#pScore');
  const cScore = document.querySelector('#cScore');
  let message;
  
  if (computerSelection === playerSelection) {
    message = "Tie Game!";
  }
  else if(
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
    cScore.innerHTML = parseInt(cScore.innerHTML) + 1;
    message = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  else {
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    message = `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  
  // Update match history
  const round = document.createElement('div');
  const history = document.querySelector('#history');
  
  round.classList.add('round');
  round.textContent = message;
  history.appendChild(round);
  
  // End game at 5 points
  if(cScore.innerHTML === '5' || pScore.innerHTML === '5') {
    endGame();
  }
}

function endGame() {
  const scores = document.querySelector('h2');
  const buttons = document.querySelectorAll('button');
  
  // Show winner
  const winner = pScore.innerHTML === '5' ? 'You' : 'Computer';
  scores.textContent = `Game over. ${winner === 'You' ? 'You are the winner' : 'The computer wins'}!`;
  
  buttons.forEach((button) => {
    button.remove();
  });
}

function camelCase(string) {
  return string.toLowerCase().replace(/^./,string.charAt(0).toUpperCase());
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('button');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(camelCase(button.id), getComputerChoice());
  });
});