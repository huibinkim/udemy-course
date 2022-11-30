/*
// lec 32
'use strict';

let hasDriversLicense = false;
const  passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

// const interFace = 'Audio';
// const private = 43;
// const if = 23;

// calling / running / invoking function

function logger() {
  console.log('my name is jonas');
}


// calling function
logger();
logger();

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); 

const num = Number('23');



// function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear){
  return 2037 - birthYear;
}

// function expression
const calcAge2 = function(birthYear){
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/
// lec 35. Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'kim'));
console.log(yearsUntilRetirement(1991, 'kim'));
