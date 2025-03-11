//functio declration
function functionName() {}
functionName();

//function without a parameter
// function product() {
//   let num = 3;
//   let sqr = num * num;
//   console.log(sqr);
// }

// product();

//Function returning value
// function addTwoNumbers() {
//   let numOne = 2;
//   let numTwo = 3;
//   let total = numOne + numTwo;
//   return total;
// }

// console.log(addTwoNumbers());

//function with a parameter

// function yoo(y) {
//   let sum = y + y;
//   return sum;
// }
// console.log(yoo(4));

//function with two parameter
// function hello(helOne, helTwo) {
//   let kill = `${helOne} ${helTwo}`;
//   return kill;
// }

// console.log(hello("Malik", "Akanni"));

// function tr199er(userName) {
//   let owner = userName;
//   return owner;
// }

// console.log(tr199er("malik"));

// function declaration

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
