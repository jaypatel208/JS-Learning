console.log("Arrow fun called");

let sum = (a, b) => a + b;
console.log(sum(8, 7));

let double = n => n * 2;
console.log(double(4))

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? () => console.log('Hello') : () => console.log('Greetings!');

welcome();