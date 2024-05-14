// loops we use in js

//-----FOR LOOP
/* for(initialization, condition, increment/decrement){
    code goes here
   }  */

for (let x = 1; x <= 10; x++) {
  console.log(x);
}

const xCode = ["maaz", "musthapha", "Malik"];
const newArr = [];

for (let y = 0; y <= xCode.length - 1; y++) {
  newArr.push(xCode[y].toUpperCase());
  console.log(newArr);
}

//WHILE LOOP
let a = 0;
while (a <= 5) {
  console.log(a);
  a++;
}

//DOWHILE LOOP
let b = 5;
do {
  console.log(b);
  b--;
} while (b >= 0);

//FOR OF
//We use for of for array




