alert('this alert is from exeternal JS');

let message;
message = 'I am variable';
alert(message);

// declaring multiple vaiable in single line
let user = 'John', age = 57, lastName = 'Wick';

// declaring multiple vaiable multi line
let user1 = 'Wade'
let age2 = 45
let lastName2 = 'willson'

// const variables can't be reassigned
const learningDate = '06.03.2024';


// Task: Working with variables
let adminTask;
let nameTask;

nameTask = 'John Task';
adminTask = nameTask;
alert(adminTask);

// Task: Giving the right name
let ourPlanetName = "Earth";
let currentUserName = "John";

// Data types
// There are eight basic data types in JavaScript
console.log(1 / 0);
console.log(Infinity);
console.log("not a number" / 2);

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Boolean (logical type)
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
console.log(`isGreater: ${isGreater}`);

// The “null” value
let fwb = null

// The “undefined” value
let undifined;
console.log(undifined);

// Objects and Symbols
// The typeof operator
console.log(`Type of isGreater: ${typeof isGreater}`);
console.log(`Type of undefined: ${typeof undefined}`)

// Task: What is the output of the script?
let nameTask2 = "Ilya";
console.log( `hello ${1}` );

console.log( `hello ${"name"}` );

console.log( `hello ${nameTask2}` );

// Error here
alert("Hello")
[1, 2].forEach(alert);