/*
// coding challenge 1

// my do job
const dolphinsScore = calcAverage(84 + 90 + 40);
const koalasScore = calcAverage(65 + 34 + 27);
const calcAverage = (scores) => {
  return (scores) / 3;
}

const winner = function (avgDolphins, avgKoalas){
  if(avgDolphins > (avgKoalas*2)){
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }else if(avgDolphins*2 < avgKoalas){
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }else{
    console.log(`draw`);
  }
}

winner(dolphinsScore, koalasScore);


// jonas do job
const calcAverage = (a, b, c) => (a + b + c) / 3;
// test1
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(65, 34, 27);

const checkWinner = function(avgDolphins, avgKoalas){
  if(avgDolphins >= 2 * avgKoalas){
    console.log(`dolphins win`);
  }else if(avgKoalas >= 2 * avgDolphins){
    console.log(`koalas win`);
  }else{
    console.log(`no one wins`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);


// coding challenge 2

// const calcTip =function(bill){
//   return bill >= 50 && bill <= 300 ? bill * 0.15 :
//   bill * 0.2;
// }

const calcTip = function(bill){
  if(50 <= bill <= 300){
    return bill * 0.15;
  }else{
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),
              calcTip(bills[2])];

const total = [bills[0]+tips[0], 
              bills[1]+tips[1], bills[2]+tips[2]];

console.log(tips);
console.log(total);

// coding challenge 3

const MarkBMI = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function(){
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const JohnBMI = {
  fullName: 'John Smith',
  mass: 82,
  height: 1.95,

  calcBMI: function(){
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

// call this method.
MarkBMI.calcBMI();
JohnBMI.calcBMI();

console.log(MarkBMI.bmi);
console.log(MarkBMI.bmi>JohnBMI.bmi ? `${MarkBMI.fullName}'s BMI(${MarkBMI.bmi}) is higher than ${JohnBMI.fullName}'s BMI(${JohnBMI.bmi})`
          : `${JohnBMI.fullName}'s BMI(${JohnBMI.bmi})is higher than ${MarkBMI.fullName}'s BMI(${MarkBMI.bmi})!`);
*/

// coding challenge 4

// it's on me :)
const calcTip = (bill) => {
  return 50 <= bill && bill<= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);  
  totals.push(tip + bills[i]);
}

// bonus
const calcAverage = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(calcAverage);
  return sum / arr.length;
}

console.log(calcAverage(totals));


