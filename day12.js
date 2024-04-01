console.log("Day 12 script called");

let str = "Hello";
str.test = 5;
console.log(str.test);

console.log(0xFF);

let num = 12.5345;
console.log(num.toFixed(2));

console.log(isNaN(NaN));
console.log(isNaN("str"));

console.log(NaN === NaN);

console.log(isFinite("15"));
console.log(isFinite("str"));
console.log(isFinite(Infinity));

// Task
// Sum numbers from the visitor
let a = +prompt("The first number", "");
let b = +prompt("The second number?", "");

alert(a + b);

// Repeat until the input is a number
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

// Strings
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

