// OLD: var name = "John";
const name = "John";   // constant
let age = 20;          // can change

age = 21;

console.log(name, age);

// OLD:
// function greet(name) {
//     return "Hello " + name;
// }

// NEW:
const greet = (name) => {
    return `Hello ${name}`;
};

console.log(greet("John"));

let city = "Manila";

// OLD: "I live in " + city
console.log(`Hello. My name is John and i live in ${city}`);

const person = {
    pname: "Ana",
    page: 22
};

const { pname, page } = person;

console.log(pname, page);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);

const add = (a = 0, b = 0) => {
    return a + b;
};

console.log(add(5)); // 5 + 0