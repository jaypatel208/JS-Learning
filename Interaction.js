// Prompt
// result = prompt(title, [default]);
let age = prompt('How old are you?');
alert(`You are ${age} years old`);

// Confirm
// result = confirm(question);
let isVegetarian = confirm("Are you vegetarian?");
alert(isVegetarian);

// Task: A simple page
let userName = prompt('Enter your name');
alert(userName);

// Task: 18+ from comments
confirm("You must be 18+ to view this page's content");
if (age > 18) {
    alert('Being 18+ will nothing change in life');
} else {
    alert('Sorry, first you need to be 18+ for change')
}

// String Conversion
let value = false;
alert(`Type of value is: ${typeof value}`);

value = String(value);
alert(`New type of value is: ${typeof value}`);

// Numeric Conversion
alert("6" / "2");

let str = "123";
alert(`Type of str is: ${typeof str}`);

let num = Number(str);
alert(`Type of num is: ${typeof num}`)

let convertNameToNumber = Number(userName);
alert(convertNameToNumber);

// Boolean Conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(2 ** 53);
console.log(2 ** 54);

// String concatenation with binary
let s = "Daaru" + "Badnaam";
console.log(s);

let counter = 2;
counter++;
console.log(`Counter value is: ${counter}`);

// Task: The postfix and prefix forms
let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(`Value of a: ${a} b:${b} c:${c} d:${d} is`);

// Task: Assignment result
let e = 2;
let f = 1 + (e *= 2);
console.log(`Value of f is: ${f}`);

// Task: Type conversions
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);

// Task: Fix the addition
let w = prompt("First number?", 1);
let q = prompt("Second number?", 2);

alert(+w + +q); // 12

// Comparisons
