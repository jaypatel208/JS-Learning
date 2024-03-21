console.log("Objects script called");

let user = new Object();
let user1 = {
    name: "John",
    age: 30,
    isAdmin: false,
    "likes birds": false
};

console.log("User 1 name is: " + user1.name);
console.log("User 1 name is: " + user1.age);

console.log("Is user 1 admin??: " + user1.isAdmin);
delete user1.isAdmin
console.log("Is user 1 admin??: " + user1.isAdmin);

console.log("Does user1 likes birds: " + user1["likes birds"]);

let fruit = prompt("Which fruit to buy?", "Apple");

let bag = {
    [fruit]: 5,
};

alert("The user demanded " + fruit + " in the amount of " + bag[fruit] + ".");

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

function makeUserShort(name, age) {
    return { name, age }
}

let john = makeUser("John Wick", 30);
console.log("Details of John, Full Name: " + john.name + ", Age: " + john.age);

let deadpool = makeUserShort("Wade Willson", 46);
console.log("Details of deadpool, Full name: " + deadpool.name + ", Age:" + deadpool.age);

console.log("age" in deadpool);
console.log("work" in deadpool);

// Task

// Hello, object
let userTask = new Object();
userTask.name = "John";
userTask.surname = "Smith";
console.log("Current details of userTask, Name: " + userTask.name + ", Surname: " + userTask.surname);
userTask.name = "Pete";
console.log("Current details of userTask, Name: " + userTask.name + ", Surname: " + userTask.surname);
delete userTask.name
console.log("Current details of userTask, Name: " + userTask.name + ", Surname: " + userTask.surname);

// Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule));
schedule["8:30"] = "Get up";
console.log(isEmpty(schedule));

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log("sum of salaries is: " + sum);

// Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log("value of menu after multiplication: " + menu);

