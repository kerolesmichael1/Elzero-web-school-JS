// Task #01
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(1e5 + 0); // 100000
console.log(1_0_0_0_0_0); // 100000
console.log(99e3 + 1e3); // 100000

// Task #02
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Task #03
console.log(Number.MAX_SAFE_INTEGER.toString().length);
// Task #04
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

// Task #05
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Task #06
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

// Task #07
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// Challenge
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Task #01
console.log(parseInt(d));

// Task #2
console.log(a ** parseInt(d));

// Task #3
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));

// Task #04

console.log((parseInt(b) / Math.ceil(d)).toFixed(2));
console.log(Math.ceil(parseInt(b) / Math.ceil(d)));

// string tasks :
// Task #01
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase().repeat(3)); // eee

// Task #02
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

// string challenge
let text = "Elzero Web School";

console.log(text.charAt(2).toUpperCase() + text.slice(3, 6));

console.log(text.substr(-4, 1).toUpperCase().repeat(8));

console.log(text.split(" ", 1));

console.log(`${text.substr(0, 6)} ${text.substr(-6, 6)}`);

console.log(
  text[0].toLowerCase() +
    text.slice(1, -1).toUpperCase() +
    text.substr(-1, 1).toLowerCase()
);
