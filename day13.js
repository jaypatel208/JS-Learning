console.log("Day 13 script called");

let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);
console.log("Length of guestList: " + guestList.length);
console.log("Got 9th char of guseList: " + guestList[9]);

for (let char of guestList) {
    console.log(char);
}

console.log("Index of Pete in guestList: " + guestList.indexOf("Pete"));

let str = 'As sly as a fox, as strong as an ox';

let target = 'as';

let pos = 0;
let pos1 = -1;

while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}

while ((pos1 = str.indexOf(target, pos1 + 1)) != -1) {
    console.log(`Shorter algo, Found at ${pos1}`);
}

let str1 = "Widget with id";

if (str1.indexOf("Widget") != -1) {
    console.log("We found it");
}

console.log("Widget with id".includes("Widget"));

console.log("Hello".includes("Bye"));

console.log("Me chahu tuzko".startsWith("Me"));
console.log("Woho ooo ooo ooo".endsWith("oo"));

let lyrics = "Keh bhi de keh bhi de";
console.log(`Sliced lyrics: ${lyrics.slice(3, 7)}`);

let guzaarish = "Bs ek haa ki guzarish"
console.log(`Sliced: ${guzaarish.substring(4, 8)}`);

console.log("j".codePointAt(0).toString(16));

let fun = '';

for (let i = 65; i <= 220; i++) {
    fun += String.fromCodePoint(i);
}
console.log("Fun string: " + fun);

let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Orange", "Plum", "Mango"];

for (var i = 0; i < fruits.length; i++) {
    console.log(`At index ${i} fruit is ${fruits[i]}`);
}

console.log(`Last fruit is : ${fruits.at(-1)}`);

console.log(fruits.pop());
console.log(fruits.push("Banana"));
console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}

let numbers = [1,2,3,4,5,6,7,8,9,0];