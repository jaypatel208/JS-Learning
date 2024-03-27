console.log("Day 10 script called");

let user = {};

console.log(user.address ? user.address.street ? user.address.street.name : null : null);

console.log(user.address && user.address.street && user.address.street.name);

const user1 = {
    name: 'John',
    address: {
        city: 'New York',
        postalCode: '10001'
    }
};

// Without optional chaining
const city1 = user1.address ? user1.address.city : undefined;
console.log(city1); // Output: New York

// With optional chaining
const city2 = user1.address?.city;
console.log(city2); // Output: New York

// Accessing non-existent property
const street = user1.address?.street;
console.log(street); // Output: undefined

// Symbols
let id = Symbol("id");
let id1 = Symbol("id");

console.log("Print id : " + id.toString());
console.log("Is id and id1 both are same?? " + (id == id1));

user[id] = 1;
console.log(user[id]);

let user3 = {
    name: "Horn",
    age: 30,
    [id]: 456
};

for (let key in user3) console.log(key);

console.log("Direct access to id of user3: " + user3[id]);

let clonedUser = Object.assign({}, user3);
console.log(clonedUser[id]);

let idGlobal = Symbol.for("idGlobal");

let idAgain = Symbol.for("idGlobal");

console.log("Is idGlobal and idAgain both are same?? " + (idGlobal === idAgain));

let sym = Symbol.for("name");
let sym2 = Symbol.for("age");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
console.log(Symbol.keyFor(id));

class Character {
    constructor(name, strength) {
        this.name = name;
        this.strength = strength;
    }
}

Character.prototype[Symbol.toPrimitive] = function (hint) {
    if (hint === 'string') {
        return `Character: ${this.name}`;
    }
    if (hint === 'number' || hint === 'default') {
        return this.strength;
    }
};

let spiderman = new Character('Peter Parker',89);

console.log(spiderman);
console.log(+spiderman);
console.log(spiderman + 11);