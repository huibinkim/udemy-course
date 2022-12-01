// coding challenge 1

const dolphinsScore = 44 + 23 + 71;
const koalasScore = 65 + 54 + 49;

const calcAverage = (scores) => {
  const averageScore = (scores) / 3;
  return averageScore;
}
console.log(calcAverage(koalasScore), calcAverage(dolphinsScore));

function checkWinner(avgDolpins, avgKoalas){
   avgDolpins = calcAverage(dolphinsScore);
   avgKoalas = calcAverage(koalasScore);


}