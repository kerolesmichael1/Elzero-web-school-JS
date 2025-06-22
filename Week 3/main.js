// Task #01
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// Task #02
// let num = 3;
// console.log(num + num); // 6
// console.log(num * num - num); // 6
// console.log(num + num + num - num); // 6
// console.log((num / num) * num + num); // 6
// console.log(num + num + (num % num)); // 6
// console.log(num - num + num + num); // 6

// Task #03
// let num = "10";
// console.log(+num + +num); // 20
// console.log((+num * +num) / +num + +num); // 20
// console.log(((+num + +num) / +num) * +num); // 20
// console.log((+num / +num) * +num + +num); // 20
// console.log((num % +num) + +num + +num); // 20

// Task #04
// let points = 10;
// points++;
// points++;
// points++;
// console.log(points); // 13
// points--;
// points--;
// points--;
// points--;
// points--;
// console.log(points); // 8;

/* Task #05 challenge
let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
*/
/*
 #01
[++a] -> preIncrement a-> 11
[+] -> arithmetic operator
[+b++] -> [+] : unary plus [b++] -> post increment b now = 20 then = 21
[+] -> arithmetic operator
[+c++] -> [+] : unary plus [c++] -> post increment c now = 80 then = 81
[-] -> arithmetic operator
[a++] -> post increment a now = 11 then = 12
result -> 11 + 20 + 80 - 11  = 100

final value :
a -> 12
b -> 21
c -> 81
*/

/*
#02
[++a] -> preIncrement a-> 13
[+] -> arithmetic operator
[-b] -> [-] : unary minus -> -21
[+] -> arithmetic operator
[+c++] -> [+] : unary plus [c++] -> post increment c now = 81 then = 82
[-] -> arithmetic operator
[-a] -> [-] : unary minus [-a++] -> post increment a now = -13 then a = 14
[+] -> arithmetic operator
[+a] -> unary plus : 14

final value :
a -> 14
b -> -21
c -> 82
*/

/*
[--c] post decrement -> c now -> 81
[+] arithmetic operator
[+b] -> unary plus -> 21
[+] arithmetic operator
[--a] post decrement -> a now -> 13
[*] arithmetic operator
[+b++] -> [+b] -> unary plus : 21 [b++] : b now = 21 then = 22
[-] arithmetic operator
[+b] -> unary plus -> 22
[*] arithmetic operator
[a] -> 13
[+] arithmetic operator
[--a] pre decrement -> 12
[-] arithmetic operator
[+true] -> 1
result -> 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1
*/

// Task #06 challenge
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * +e); // 2000
// console.log(-d + ++e * ++g + ++f); // 173
