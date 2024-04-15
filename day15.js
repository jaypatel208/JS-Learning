console.log("Day 15 script called");

let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');


console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));

let john = { name: "John" };
let ben = { name: "Ben" };

let visitCountMap = new Map();
let visitCountObj = {};
visitCountObj[ben] = 234;
visitCountObj[john] = 123;

visitCountMap.set(john, 123);

console.log(visitCountMap.get(john));
console.log(visitCountObj["[object Object]"]);

let recipeMap = new Map([['cucumber', 150], ['tomatoes', 350], ['onion', 50]]);

for (let vegetables of recipeMap.keys()) {
    console.log(vegetables);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

let map2 = new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']]);

console.log(map2.get(1));

let obj = { name: "John", age: 30 };

let mapEntries = new Map(Object.entries(obj));

console.log(mapEntries.get('name'));

let prices = Object.fromEntries([['banana', 3], ['apple', 2], ['mango', 4]]);

console.log(prices.apple);

let set = new Set();

let aaj = { name: "Aaj" };
let sunte = { name: "Sunte" };
let jab = { name: "Bitatni tere saye me" };

set.add(aaj);
set.add(sunte);
set.add(jab);

for (let user of set) {
    console.log(user.name)
}

// Iteration over Set

let setIteration = new Set(["Oranges", "Apple", "Mango"]);
for (let value of setIteration) console.log(value);

setIteration.forEach((value, valueAgain, set) => {
    console.log(value);
});

// Tasks

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(values));

let anagram = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

console.log(aclean(anagram));

// Iterable keys

let map1 = new Map();
map1.set("name", "John");
let keys = Array.from(map1.keys());
keys.push("more");
console.log(keys);

// WeakMap and WeakSet
let john1 = { name: "John" };
let array = [john1];
john = null;

let hey = { name: "Hey" };
let heyMap = new Map();
heyMap.set(hey, "...");

hey = null

let keysHey = heyMap.keys();
for (let key of keysHey) {
    if (key !== null) {
        console.log(key);
    }
}

let weakMap = new WeakMap();
let someObj = {};
weakMap.set(someObj, "Ok");

function greet(name) {
    console.log(`Hello, ${name} how are you doing today?`);
}

console.log(greet("john"));
// Task
const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }
}

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return "Invalid Operator";
    }
}

function basicOpp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}

function repeatStr(n, s) {
    let initialString = "";
    for (var i = 0; i < n; i++) {
        initialString += s;
    }
    return initialString;
}

function repeatStrOp(n, s) {
    return s.repeat(n);
}

console.log(repeatStrOp(4, "Dil hai chota sa"));

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let num of array) {
        sum += num;
    }

    return sum / array.length;
}

function updateLight(current) {
    switch (current) {
        case "green": return "yellow";
        case "yellow": return "red";
        case "red": return "green";
        default: return "Invalid status"
    }
}

function updateLightOP(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}