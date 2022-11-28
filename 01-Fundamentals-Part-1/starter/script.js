// let js = 'amazing';
// if(js === 'amazing') alert('javascript is jun');
/*
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("jonas");

let firstName = "bob";
let first = 'jonas';
let firstNamePerson
let first_name_person
console.log(firstName);

// variable name conventions 11~12강의
let PI = 3.141;

let myFirstJob = 'programmer';
let myCurrentJob = "teacher";

// 위의 변수 이름이 더 직관적임. 
let job1 = 'programmer';
let job2 = 'teacher';


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jo');

javascriptIsFun = 'yes!';
console.log(javascriptIsFun);

let year;
console.log(year);

year = 199;
console.log(year);

console.log(typeof null); 


// 13강의
let age = 30;
age = 31;
console.log(age); 

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';



// 14. basic operation
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Hui bin';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; //x = x + 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // > , <, >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019); 

const  now = 2037;
const ageJo = now - 1991;
const ageSo = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJo + ageSo) / 2;
console.log(ageJo, ageSo, averageAge);

// lec 17
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + ".";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple 
lines`);


// lec 18
const age = 15 ;
// const isOldEnough = age >= 18;

if(age >= 18){
  console.log('sarah can drink right now 😎')
}else{
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. wait another ${yearsLeft} years :)`)
}

const birthYear = 2021;
let century;

if(birthYear <= 2000){
   century = 20;
}else{
   century = 21;
}
console.log(century);


// lec 20

// type conversion
const inputYear = '1991';
console.log(Number(inputYear)); 
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //Nan
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old') //위와 동일
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

*/

// lec 21
// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
  console.log("don't spend it")
}else{
  console.log('you should get a job!')
} 

let height;
if(height){
  console.log('yo! height is defined');
}else{
  console.log('height is undefined')
}