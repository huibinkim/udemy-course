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
console.log(yearsUntilRetirement(1994 , 'bob'));


// lec 36. functions calling other functions

function cutFruitPieces(fruit){
  return fruit * 3;
}

function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// lec 37 review function
const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  }else{
    console.log(`${firstName} has already retired!`)
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'HuiBin'));
console.log(yearsUntilRetirement(1941, 'HuiBin'));


// lec 39. arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1983, 2008, 2020);

console.log(friends[0]);
console.log(years[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Chris', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const years = [1990, 1930, 2002, 2030, 2022];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages);


// lec 40. Array operation(method)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Hui');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped =  friends.pop(); //Last
console.log(friends);
console.log(popped);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven')); 
console.log(friends.indexOf('Bob')); 

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); 
console.log(friends.includes(23)); 


if(friends.includes('Steven')){
  console.log('you have a friend');
}


// lec 42 object

const jonasArray = [
  'Jonas',
  'Chris',
  2037 - 1991, 
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName : 'Jonas',
  lastName : 'chris',
  age: 2037 - 1991, 
  job: 'teacher',
  friend: ['Michael', 'Peter', 'Steven']
};



// lec 43 dot vs bracket notation
const jonas = {
  firstName : 'Jonas',
  lastName : 'chris',
  age: 2037 - 1991, 
  job: 'teacher',
  friend: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job and friends');

if(jonas[interestedIn]){
  console.log(jonas[interestedIn]);
}else{
  console.log('wrong request choose between firstName, lastName, age, job and friends')
}


jonas.location = 'korea';
jonas['twitter'] = '@jonasChris';
jonas.mom = 'mom';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend dis called Micheal"

console.log(`${jonas['firstName']} has ${jonas.friend.length}, and his best friend is called ${jonas.friend[0]}`);

*/

// lec 44 object method

const jonas = {
  firstName : 'Jonas',
  lastName : 'Chris',
  birthYear: 2037 - 1991, 
  job: 'teacher',
  friend: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true
};
