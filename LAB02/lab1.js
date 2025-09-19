const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask the user for their choice
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  // Get user's choice and convert to uppercase
  const userSelection = result.userSelection.toUpperCase();

  // Generate computer's choice using random number
  const randomNumber = Math.random();
  let computerSelection = '';

  if (randomNumber < 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNumber < 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  // Display both choices
  console.log(`User chose: ${userSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
