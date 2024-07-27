console.log("Hello,  we are back again")

let user = {
    name: "John",
    age: 30
};

for (let value of Object.values(user)) {
    console.log(value);
}

//Transforming objects
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrice = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrice.meat);

// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

let salaries = {
    "Ankita": 100,
    "Hirva": 200,
    "Nancy": 500,
    "Dhruvi": 900,
};

function sumSalaries(salaries) {
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

console.log("Total salary of employees are: " + sumSalaries(salaries));

// Write a function count(obj) that returns the number of properties in the object:

let someObject = {
    "Aavesham": "Fahad faisal",
    "Msater": "Vjay"
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(`Total properties in object are:  ${count(someObject)}`)

// Object destructing

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// note: order doesn't matter here
let { title, width, height } = options;

console.log(`${title} ${width} ${height}`);

// Destructuring assignment

let destructUser = { name: "Some name", years: 25 };

// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

let { name, years: age, isAdmin = false } = destructUser
console.log(`${name} ${age} ${isAdmin}`);


let salariesProblem = {
    "Janvee": 100,
    "Pinky": 700,
    "Dhruvi": 1200
};

// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function topSalary(salariesProblem) {
    if (Object.keys(salariesProblem).length == 0) {
        return null;
    }

    let maxSalary = 0;
    let topEarner = null;

    for (const [name, salary] of Object.entries(salariesProblem)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topEarner = name;
        }
    }

    return topEarner;
}

console.log(`Top earning person is ${topSalary(salariesProblem)}`)

// Date and time

let now = new Date();
console.log(`current time is ${now}`)

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now adding 24 hours
let Jan02_1970 = new Date(24 * 3600 * 100);
console.log(Jan02_1970);

let date = new Date();
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTimezoneOffset());
console.log(Date.now());

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
let dateObj = new Date("February 20, 2012 03:12:00");
console.log(dateObj);

function getWeekDay(date) {
    let day = date.getDay();
    switch (day) {
        case 0:
            console.log("SUN");
            break;
        case 1:
            console.log("MON");
            break;
        case 2:
            console.log("TUE");
            break;
        case 3:
            console.log("WED");
            break;
        case 4:
            console.log("THU");
            break;
        case 5:
            console.log("FRI");
            break;
        case 6:
            console.log("SAT");
            break;
    }
}

getWeekDay(dateObj);

function getWeekDayOptimized(date) {
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return weekDays[date.getDay()];
}

console.log(`Day of date object is ${getWeekDayOptimized(dateObj)}`);

// Turn the user into JSON and then read it back into another variable.

let userTest = {
    name: "John Smith",
    age: 35
};

let stringifieduser = JSON.stringify(userTest);
console.log(stringifieduser);
let convertedUser = JSON.parse(stringifieduser);
console.log(`User name ${convertedUser.name} and Age is ${convertedUser.age}`);

// Advanced working with functions

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(`6 Power of 2 is: ${pow(2, 6)}`)

function sumToforloop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToRecursion(n) {
    if (n == 1) return 1;
    return n + sumToRecursion(n - 1);
}


function sumToArithmetic(n) {
    return n * (n + 1) / 2;
}

console.log(`Sum of n elements using for loop:${sumToforloop(10)}`);
console.log(`Sum of n elements using recursion:${sumToRecursion(15)}`);
console.log(`Sum of n elements using arithmetic formula:${sumToArithmetic(20)}`);

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(`Factorial of 3 is ${factorial(9)}`);

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(`Fibonacci of 7 is ${fib(7)}`);

//  Rest parameters and spread syntax
function sumAll(...args) { 
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  

console.log(`Sum of 1 to 10 :${sumAll(10)}`);