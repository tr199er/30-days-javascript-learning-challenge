/* 
Conditions can be implementing using the following ways:
-if
-if else
-if else if else
-switch
-ternary operator
*/

//IF

// let age = 30;

// if (age > 18) {
//   console.log(`${age} is an adult age`);
// }

// //IF ELSE
// let takeAge = 13;

// if (takeAge > 18) {
//   console.log(`${takeAge} is an adult age`);
// } else {
//   console.log(`given ur age of ${takeAge}, you're still a kid`);
// }

//COMBINATION OF PROMPT, ALERT AND IF/ELSE
// let guestAge = prompt("how old are you");

// if (guestAge >= 18) {
//   //   alert("Hello sir/ma");
// } else {
//   //   alert("below 18");
// }

//if else if else

// let a;

// if (a > 1) {
//   console.log(`${a} is greater than 1`);
// } else if (a == 1) {
//   console.log(`${a} is one`);
// } else if (a < 1) {
//   console.log(`${a} is zero or a negative number `);
// } else {
//   console.log(`${a} is not a number`);
// }

//SWITCH
// let weekDay = "friday";

// switch (weekDay) {
//   case "monday":
//     console.log("it the beginning of a new week");
//     break;
//   case "wednesday":
//     console.log("it the middle of the week");
//     break;
//   case "friday":
//     console.log("weekend loading...TGIF");
//     break;
//   case "saturday":
//     console.log("weekend...");
//     break;
//   case "sunday":
//     console.log("sabatth day...");
//     break;
//   default:
//     console.log("normal day");
//     break;
// }

//TERNARY OPERATION
// let hayatu = 18;

// hayatu == 17 ? console.log("hello") : console.log("hi");


// let malik ;
// malik = 26;

// if (malik == 26) {
//   console.log("A youth");
// } else {
//   console.log("hmmm");
// }


// let babyAge = prompt="what ur baby age?";

// switch (babyAge) {
//   case 1:
//     console.log("a kid ");
//     break;

//   case babyAge < 1:
//     console.log("infant");
    

//   default:
//     console.log("not more a baby");
    
//     break;
// }


//EXERCISE
let userAge = 18;
let underAge = 18 - userAge;

if (userAge > 18 || userAge == 18){
  console.log("you're old enough");
  
}else {
  console.log(`wait for ${underAge} years`);
  
}