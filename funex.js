console.log("Function expressions script called");

function sayHi() {
    console.log("Hello");
}

let sayHello = function () {
    console.log("Hello");
};

let func = sayHi;
func();
sayHi();

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

ask("Anonymous function pass", function () { console.log("Yes we received it!!!"); }, function () { console.log("Yes we received it!!!"); });

function sum(a, b) {
    return a + b;
}

let sumEx = function (a, b) {
    return a + b;
};

let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
    welcome = function () {
        console.log("Welcome");
    }
} else {
    welcome = function () {
        console.log("Simon go back");
    }
}