/*
// coding challenge 1

// my do job
const dolphinsScore = 85 + 154 + 41;
const koalasScore = 65 + 34 + 27;

const calcAverage = (scores) => {
  const averageScore = (scores) / 3;
  return averageScore;
}

const winner = function checkWinner(avgDolphins, avgKoalas){
  avgDolphins = calcAverage(dolphinsScore);
  avgKoalas = calcAverage(koalasScore);

  if(avgDolphins > (avgKoalas*2)){
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  }else if(avgDolphins*2 < avgKoalas){
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }else{
    console.log(`draw`);
  }
}

console.log(winner());
*/

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