console.log("Day 9 script called");

let user = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name);
    }
};

// user.sayHi = function(){
//     console.log("Hello!");
// };

user.sayHi();

// Task

// Create a calculator

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();