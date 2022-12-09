// 1. create a function 'printForecast' which takes in an array 'arr' and
// logs a string like the above to the console.
// Try it with both test datasets.
// problem : printForecast 라는 함수를 만든다. 그 함수는 arr라는 배열을 가지고 있고
// 날짜에 맞춰서 차례로 나타남.

// problem-solving and sub-problems!!!!
// 1) understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// -Transform array into string
// -Transform each element to string
// -Strings needs to contain day (index + 1)
// Add ... between elements and start and end of string

// arr에 배열을 넣기
// console.log에 순서대로 arr안의 value 넣기
// 1, 2, 3 등 차례로 숫자를 console.log에 넣기

// 2. Use the problem-solving framework:
// Understand the problem and break it up into sub-problems!

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// for me
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const temp = arr[i];
//     console.log(` ${temp} in ${i + 1}days`);
//   }
// };

// const realTemp = printForecast(data1);

console.log(`... ${data1[0]} ... ${data1[1]} ... ${data1[2]}`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]} in ${i + 1}days`;
  }
  console.log(str);
};
printForecast(data2);
