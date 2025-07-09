// Task #01

// Task #02
// Task #03
// Task #04
// Task #05
// Task #06
// Task #07

// challenge
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
