console.log("Day 14 script called");
let arr = new Array("Apple", "Pear");

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][1]);

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length - 1 / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

let demoArr = ["I", "study", "JavaScript"];
demoArr.splice(1, 1);
console.log(demoArr);

function changeText() {
    var paragraph = document.getElementById("myText");

    paragraph.textContent = "Yay";
}

let demoArr1 = ["I", "study", "JavaScript", "right", "now"];
demoArr1.splice(0, 3, "Let's", "dance");
console.log(demoArr1);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 3);

console.log(user.name);

let songs = [
    { id: 1, name: "Dil nu" },
    { id: 2, name: "Wo noor" },
    { id: 3, name: "True stories" }
];

let someSongs = songs.filter(song => song.id < 3);
console.log(someSongs.length);

let cities = ["Mansa", "Ahmedabad", "Gandhinagar"].map(city => city.length);
console.log(cities);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr2 = [1, 2, 4, 5, 8, 2, 47, 5, 29, 48, 541, 84, 4];

arr2.sort(compareNumeric);

console.log(arr2);

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
    return a - b;
});

let animal = 'Dog, Cat, Monkey';

let animalArr = animal.split(', ');

for (let animal of animalArr) {
    console.log(`Animal to adopt ${animal}`);
}

let yetAnotherAnimalArr = animal.split(', ', 2);
console.log(yetAnotherAnimalArr);

let animalStr = yetAnotherAnimalArr.join(';');
console.log(animalStr);

let arrAgain = [23, 21, 4, 45, 7, 4, 51, 1, 87, 84, 51, 5];

let result = arrAgain.reduce((sum, current) => sum + current, 0);

console.log(result);

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(candidate) {
        return candidate.age >= this.minAge && candidate.age < this.maxAge;
    }
};

let candidates = [{ age: 45 }, { age: 16 }, { age: 32 }, { age: 24 }];

let soldiers = candidates.filter(army.canJoin, army);

console.log(soldiers.length);

// Task
function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(camelize("Deva-Deva-Namah"));

// Filter range

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

console.log(filterRange(arrAgain, 1, 4));

// Decreasing order
console.log(arrAgain.sort((a, b) => b - a));

// Copy and sort array
let languages = ["Java", "Kotlin", "Rust", "Javascript", "PHP"];

function copySorted(arr) {
    return arr.slice().sort();
}

let sorted = copySorted(languages);

console.log(sorted);
console.log(languages);

// Iterables

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    console.log(num);
}

for (let char of "Let the sum come up") {
    console.log(char);
}

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr5 = Array.from(arrayLike); // (*)
  console.log(arr5);
  console.log(arr5.pop()); // World (method works)

  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }
  
  let str = '𝒳😂𩷶';
  
  console.log( slice(str, 1, 3) );