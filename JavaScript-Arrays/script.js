// Create arrays
let numbers = [1, 2, 3];
let fruits = ["apple", "banana", "orange"];

console.log("Original:", numbers);

// Array methods
numbers.push(4);        // add at end
numbers.pop();          // remove last
numbers.shift();        // remove first
numbers.unshift(0);     // add at start

console.log("Updated:", numbers);
console.log("Length:", numbers.length);

// Create object
let person = {
    name: "John",
    age: 20,
    city: "Manila"
};

// Access properties
console.log(person.name);        // dot notation
console.log(person["age"]);      // bracket notation

// Modify properties
person.age = 21;
person["city"] = "Angeles";

console.log("Updated Object:", person);

let nums = [1, 2, 3, 4, 5];

// forEach
nums.forEach(n => console.log("Value:", n));

// map
let doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// filter
let even = nums.filter(n => n % 2 === 0);
console.log("Even:", even);

// Array of objects
let students = [
    { name: "Ana", grade: 90 },
    { name: "Ben", grade: 75 },
    { name: "Cara", grade: 85 }
];

// Access data
students.forEach(s => {
    console.log(s.name + ":", s.grade);
});

// Filter students with grade >= 80
let topStudents = students.filter(s => s.grade >= 80);
console.log("Top Students:", topStudents);

