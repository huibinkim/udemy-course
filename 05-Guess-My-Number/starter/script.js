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

// lec 73. handling click event
const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
