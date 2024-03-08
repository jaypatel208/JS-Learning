
// The “if” statement

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert('You are right!');


let company = prompt('Which company created Javascript?', '');
(company == 'Netscape') ? alert('Right!') : alert('Wrong.');

// Task: The name of JavaScript
let officialNameOfJs = prompt('What is the official name of JavaScript?', '');
if (officialNameOfJs == 'ECMAScript') { alert('Right!') } else { alert('You don\'t know? ECMAScript!'); }

// Task: Show the sign
let showTheSign = prompt('Enter a number');
if (showTheSign > 0) {
    alert('1')
} else if (showTheSign == 0) {
    alert('0')
} else {
    alert('-1')
}

// Task: Rewrite 'if' into '?'
let a = 1
let b = 2
let result = (a + b < 4) ? 'Below' : 'Over'
alert(result);

// Task: Rewrite 'if..else' into '?'
let login = 'Employee'
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ''
alert(message)

// Logical operators
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert('The time is 12:30');
}

// Task: Check the login
let whoIsVisitor = prompt('Who\'s there???');
if (whoIsVisitor == 'Admin') {
    let password = prompt('Enter Password');
    if (password == 'TheMaster') {
        alert('Welcome!')
    } else if (password == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (whoIsVisitor == null) {
    alert('Canceled');
} else {
    alert('I don\'t know you');
}

// Nullish coalescing operator '??'


// Loops: while and for
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++
} while (j < 3);

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// Labels for break/continue

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        if (!input) break outer;
    }
}

alert('Done!');

// Task: Repeat until the input is correct
let num;
do {
    num = prompt('Enter a number greater than 100?', "0");
} while (num <= 100 && num);

// Task: Output prime numbers
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(`Prime numbers upto n:${i}`);
}