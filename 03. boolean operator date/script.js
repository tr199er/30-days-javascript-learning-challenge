//BOOLEANM
/* A boolean data type represents one of the two values:true or false. 
Boolean value is either true or false.  
Any comparisons return a boolean value which is either true or false. */

//Assignment operator

/* x += y;
   x -= y;
   x *= y;
   x /= y;
   x %= y;
   x **= y;
*/

// let x = 7;
// let y = 2;

// x += y; //addition
// console.log(x);

// x -= y; //subtraction
// console.log(x);

// x *= y; //multiplication
// console.log(x);

// x /= y; //division
// console.log(x);

// x %= y; //modulus
// console.log(x);

// x **= y; //exponential(power of)
// console.log(x);

/* 
--&& (ampersand)  
--|| (pipe)  
--!  (negation). 
 The && operator gets true only if the two operands are true.
 The || operator gets true either of the operand is true.
 The ! operator negates true to false and false to true.
*/

//ALERT

// let boyName = prompt("what ur name");
// alert("Welcome to day 3 of javascript learning challenge" + " " + boyName);
// confirm(boyName + " " + "Is that ur name?");

// console.log(boyName);


// let count = 0
// console.log(++count)        // 1
// console.log(count)          // 1


// let isRaining = true
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')
// isRaining = false

// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')

// const agree = confirm("Do you agree with te terms and conditions ?")
// console.log(agree);


//EXERCISE
const firstName = "Malik";
const lastName = "Akanni";
const country = "Nigeria";
const city = "Lagos Island";
const age = "26";
const isMarried = false;

console.log(typeof isMarried);

console.log (10 === "10");
console.log(parseInt("9.8") == 10);



var firstValue = "Python"
var secondValue = "Jargon"

console.log(firstValue.length);
console.log(secondValue.length);
let str = `${secondValue}`;


console.log(firstValue.length === str);


console.log(!(false));
