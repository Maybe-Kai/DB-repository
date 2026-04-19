// Condition example
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// For loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// While loop
console.log("While Loop:");
let j = 1;
while (j <= 3) {
    console.log("Count:", j);
    j++;
}

// Function with parameters
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("John"));

// Function for calculation
function add(a, b) {
    return a + b;
}

console.log("Sum:", add(5, 3));