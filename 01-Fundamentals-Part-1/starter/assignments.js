/*
// lecture : values and variables
const country = "Korea";
const continent = "Asia";
let population = 5174;


// lecture : data types
const isIsland = true;
const language = 'korean';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// lecture: var, let, const
population = 5715

console.log(country);
console.log(continent);
console.log(population);

// lecture : Basic operators
halfPopulation = population / 2;
population++;
console.log(population);

let finLand = 6000;
console.log(population > finLand);
let averagePopulation = 3300;
console.log(population < averagePopulation);

const description = country + ' is in ' + continent +', and its ' + population + ' million people speak ' + language;
console.log(description);

// coding challenge #1
const weightMark = 78;
const weightJohn = 92;
const tallMark = 1.69;
const tallJohn = 1.95;

const weightMark2 = 95;
const weightJohn2 = 85;
const tallMark2 = 1.88;
const tallJohn2 = 1.76;

const m_BMI = weightMark / (tallMark ** 2); 
const j_BMI = weightJohn / (tallJohn ** 2); 
const m_BMI2 = weightMark2 / (tallMark2 ** 2); 
const j_BMI2 = weightJohn2 / (tallJohn2 ** 2); 

const markHigherBMI = (m_BMI > j_BMI);
const markHigherBMI2 = (m_BMI2 > j_BMI2);
console.log(markHigherBMI, markHigherBMI2);

// coding challenge #2
if(m_BMI > j_BMI){
  console.log(`Mark's BMI(${m_BMI}) is higher than JOHN's(${j_BMI})!`)
}else{
  console.log(`John's BMI(${j_BMI}) is higher than Mark's(${m_BMI})!!`)
};



const dolphins = (96 + 108 + 89)/3;
const koalas = (88 + 91 + 110)/3;

if(dolphins > koalas){
  console.log('dolphins team is winner');
}else if(dolphins === koalas){
  console.log('draw');
}else{
  console.log('koalas team is winner')
}


// bonus 1
const dolphins = (97 + 112 + 101)/3;
const koalas = (109 + 95 + 106)/3;


if(dolphins > koalas && dolphins >= 100){
  console.log('dolphins team is winner');
}else if(dolphins === koalas && dolphins >= 100 && koalas >= 100){
  console.log('draw');
}else if(koalas > dolphins && koalas >= 100){ 
  console.log('koalas team is winner')
}else{
  console.log('no one wins')
}

*/

const cost = 275;
// let tip;
// if(50 < cost < 300){
//    tip = cost * 0.15;
// }else{
//    tip = cost * 0.2;
// }
// console.log(tip);

const tip = cost <= 300 && cost >= 50 ? cost * 0.15 : cost * 0.2;
// const tip = 50 < cost < 300 ? cost * 0.15 : cost * 0.2;
console.log(`The bill was ${cost}, the tip was ${tip}, and the total value ${cost + tip}`);

// switch(50 < cost < 300){
//   case cost : 
//   console.log(cost * 0.15);
//   break;
//   case cost : 
//   console.log(cost * 0.2);
//   break;
//   default : console.log('there is no tips');
// }