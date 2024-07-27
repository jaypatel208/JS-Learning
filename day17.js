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