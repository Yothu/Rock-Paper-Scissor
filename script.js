//Dome variables
let userScoreTag = document.getElementById("user-score");
let computerScoreTag = document.getElementById("machine-score");
let resultTag = document.getElementById("result");
let rockBtn = document.getElementById("r");
let paperBtn = document.getElementById("p");
let scissorBtn = document.getElementById("s");
let refreshBtn = document.getElementById("btn");
// SELECTION AND SCORE VARIABLES
let playerSelection;
let choice = 3; //counter for computer choices
let userScore = 0;
let computerScore = 0;
let finalResult = "";


// ROCK CHOICE EVENT-LISTENER

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  let computerSelection = computerPlay(choice);
  if (playerSelection == computerSelection) {
    userScore += 0;
    computerScore += 0;
    finalResult = `It's a draw, nobody wins`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    userScore += 0;
    computerScore += 1;
    finalResult = `computer choice:  ${computerSelection.toUpperCase()} beats your choice: ${playerSelection.toUpperCase()},  you loose`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    userScore += 1;
    computerScore += 0;
    finalResult = `your choice: ${playerSelection.toUpperCase()} beats computer choice: ${computerSelection.toUpperCase()},  you wins!`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  }
});

// PAPER CHOICE EVENT-LISTENER

paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  let computerSelection = computerPlay(choice);
  if (playerSelection == computerSelection) {
    userScore += 0;
    computerScore += 0;
    finalResult = `It's a draw, nobody wins`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    userScore += 1;
    computerScore += 0;
    finalResult = `your choice: ${playerSelection.toUpperCase()} beats computer choice: ${computerSelection.toUpperCase()}, you wins`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    userScore += 0;
    computerScore += 1;
    finalResult = `computer choice: ${computerSelection.toUpperCase()} beats your choice: ${playerSelection.toUpperCase()}, you loose`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  }
});

// Reload Buttom

refreshBtn.addEventListener("click",()=>{
  location.reload();
})


// SCISSOR EVENT-LISTENER

scissorBtn.addEventListener("click", () => {
  playerSelection = "scissor";
  let computerSelection = computerPlay(choice);
  if (playerSelection == computerSelection) {
    userScore += 0;
    computerScore += 0;
    finalResult = `It's a draw, nobody wins`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    userScore += 1;
    computerScore += 0;
    finalResult = `your choice: ${playerSelection.toUpperCase()} beats computer choice: ${computerSelection.toUpperCase()}, you wins`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    userScore += 0;
    computerScore += 1;
    finalResult = `computer choice: ${computerSelection.toUpperCase()} beats your choice: ${playerSelection.toUpperCase()}, you loose`;
    userScoreTag.textContent = userScore;
    computerScoreTag.textContent = computerScore;
    resultTag.textContent = finalResult;
  }
});


// COMPUTER RANDOM FUNCTION CHOICE

function computerPlay(choice) {
  let computerSelector = Math.floor(Math.random() * choice);
  let rock = "rock",
    paper = "paper",
    scissor = "scissor";
  let computerChoice;

  if (computerSelector == 0) {
    computerChoice = rock;
    console.log(computerChoice);
  } else if (computerSelector == 1) {
    computerChoice = paper;
    console.log(computerChoice);
  } else if (computerSelector == 2) {
    computerChoice = scissor;
    console.log(computerChoice);
  }
  return computerChoice;
}