let arr = ["hayatu", "maaz", "gideon", "malik."];

console.log("Names: " + arr);
console.log(arr.length);

// const carr = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ];
// console.log(carr);

//WE CAN ACCESS ARRAY USING INDEXES
/* 
These are some of the available methods to deal with arrays:
Array, length, concat, 
indexOf, slice, splice, 
join, toString, includes,
lastIndexOf, isArray, fill, 
push, pop, shift, 
unshift
  */

// let empArr = array();
// console.log(empArr);

//Creating Static vale

// empArr = array(5); // crestes 5 empty value
// empArr = Array(5).fill("MAAZ");

// console.log(empArr);

//Concatenating array using concat
const firstList = ["Malik", "Maaz", "Musthapha"];
const secondList = ["Fuad", "Aunty promise"];

const lastList = firstList.concat(secondList);
console.log(lastList);

console.log(lastList.length); //we use .length to get the length of an array
console.log(lastList.indexOf("Fuad")); //.indexOf to get the idex of an array
console.log(lastList.includes("Maaz")); // to confirm if exist in an array with the boolean results
lastList.push("aminco"); // pushing items into the array..(adding items to the end of the array)
console.log(lastList);
lastList.pop(); //remove itemes from te end of the array
console.log(lastList);
lastList.shift(); //removing an item from the front of the array
console.log(lastList);
lastList.unshift("Malik"); //adding an item to te front of the array
console.log(lastList);

console.log(lastList.reverse()); //reverse the order of the array

lastList.sort();
console.log(lastList); //arranging array in accending order

//array of arrays
//array can store differnt type of data including an array itself

const allProf = [0, 9, 8, [7, 6, 5, [4, 3, 2]], 1];









//PROJECT
const coderList = [];
