/* Operator
// Task #01
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 !== "-10"); // true
console.log(+50 >= +"-40"); // true
console.log(-10 <= -"-40"); // true
console.log(+"10" == 10); // true
console.log(+20 != false); // true
// Task #02

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true
// Task #03

let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a != b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a == b) && !(a === c) && !(a < c)); // true
*/

/* if condition
// Task #01
// let num = 600;
// if (num >= 0 && num < 10) {
//   console.log(`00${num}`);
// } else if (num < 100) {
//   console.log(`0${num}`);
// } else {
//   console.log(num);
// }
// Task #02
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// }

// if (num1 == str && num1 !== str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }

// if (num1 != str2 && typeof num1 !== typeof str2) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// }

// if (str != str2 && typeof str === typeof str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// }

// Task #03
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number"
//   );
// }
// if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//   console.log(
//     "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//   );
// }
// if (
//   num3 !== num1 &&
//   typeof num3 !== typeof num1 &&
//   typeof num3 !== typeof num2
// ) {
//   console.log(
//     "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//   );
// }

// Task #04
// Edit What You Want Here
// let num1 = 20;
// let num2 = 10;
// let num3 = 20;
// let num4 = 51;

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
*/

/*Switch Statement 

let day = "   friday  ";

day = day.trim()[0].toUpperCase() + day.trim().slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
}
    */
/* challenge
let a = 10;
// Task #01
console.log(
  a < 10 ? 10 : a >= 10 && a <= 40 ? "10 to 40" : a > 40 ? "> 40" : "unknown"
);

let st = "Elzero Web School";
// Task #02
if ((st.length * 2).toString() === "34") {
  console.log("Good");
}
// Task #03

if (st[st.toLowerCase().indexOf("w")].toLowerCase() === "w") {
  console.log("Good");
}
// Task #04
if (st.length !== "string") {
  console.log("Good");
}
// Task #05
if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
*/
