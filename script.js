'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessBtn = document.querySelector('.guess-btn');
const againBtn = document.querySelector('.again-btn');
const guessInput = document.querySelector('.guess-input');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const title = document.querySelector('.title');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highscore = 0;

guessBtn.addEventListener('click', function () {
  const numInput = Number(guessInput.value);

  // When there is no input
  if (!numInput) {
    message.textContent = 'Please enter a valid number!';

    // When player wins
  } else if (numInput === secretNumber) {
    message.textContent = 'You win!';
    message.style.color = '#F806CC';
    body.style.backgroundColor = '#2E0249';
    number.style.width = '35rem';
    number.textContent = secretNumber;
    if (scoreNum > highscore) {
      highscore = scoreNum;
      highScore.textContent = highscore;
    }
  }

  // Losing -- input not equal random number && check if the input value is between the range
  else if (numInput !== secretNumber && numInput <= 20 && numInput > 0) {
    if (numInput > secretNumber) {
      message.textContent = '⛔ Number is too high';
      message.style.color = 'red';
    }
    if (numInput < secretNumber) {
      message.textContent = '⛔ Number is too low';
      message.style.color = 'red';
    }

    if (scoreNum > 1) {
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      score.textContent = 0;
      message.textContent = 'You lost the game !!!';
    }
  }
  // Invalid input -- not a number
  else {
    message.textContent = 'Out of range ...';
  }
});

//again button
againBtn.addEventListener('click', function () {
  scoreNum = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Guess a number between 1-20';
  score.textContent = scoreNum;
  number.textContent = '?';
  guessInput.value = '';
  body.style.backgroundColor = '#222';
  number.style.width = '25rem';
  message.style.color = '#fff';
});
