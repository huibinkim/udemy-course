'use strict';

/*
// lec 72. selecting and manipulating elements.
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎀';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 80;
console.log(document.querySelector('.guess').value);
*/

// lec 73. handling click event //

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMsg('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!🎀';
    displayMsg('Correct Number!🎀');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#017777';
    document.querySelector('.number').style.width = '250px';

    // Show highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // high and low guess in clean code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!🎈' : 'Too low!🧨';
      displayMsg(guess > secretNumber ? 'Too high!🎈' : 'Too low!🧨');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '🎃 you lost the game ';
      displayMsg('🎃 you lost the game ');
      displayScore('0');
    }
  }

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!🎈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🎃 you lost the game ';
  //     document.querySelector('.score').textContent = 0;
  //   }

  // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!🧨';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🎃 you lost the game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// reset again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMsg('Start guessing ...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
