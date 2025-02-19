// loops we use in js

//-----FOR LOOP
/* for(initialization, condition, increment/decrement){
    code goes here
   }  */

// for (let x = 1; x <= 10; x++) {
//   console.log(x);
// }

// const xCode = ["maaz", "musthapha", "Malik"];
// const newArr = [];

// for (let y = 0; y <= xCode.length - 1; y++) {
//   newArr.push(xCode[y].toUpperCase());
//   console.log(newArr);
// }

// const page = ["one", "two", "three", "four", "five"];
// let we = [];

// for (let x = 0; x <= page.length; x++){
//   we.push(page[x]);
//   console.log(we);
// }

//chztgpt exercise

// for (let y = 0; y <= 20; y++){
//   if (y % 3 === 0 && y % 2 === 0){
//     console.log("Divisible by 6");

//   } else if (y % 3 === 0){
//     console.log("Divisible by 3");

//   }else if  (y % 2 === 0) {
//     console.log("Even");

//   }else {
//     console.log(y);

//   }
// };

//WHILE LOOP
// let a = 0;
// while (a <= 5) {
//   console.log(a);
//   a++;
// }

//DOWHILE LOOP
// let b = 5;
// do {
//   console.log(b);
//   b--;
// } while (b >= 0);

//FOR OF
//We use for of for array

// let names = ["malik", "gideon", "alex"];

// for (let name of names){
//   console.log(name.toUpperCase());

// };

//Break

// for ( x = 1; x <= 20 - 1; x++){

//   console.log(x);
//   if (x % 7 === 0){
//     console.log("Found it");
//     break;
//   }
// }

//EXERCISE level 1

let pattern = "";

for (x = 0; x <= 7; x++) {
  pattern += "#";
  console.log(pattern);
}
