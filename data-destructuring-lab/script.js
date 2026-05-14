console.log("Destructuring Lab Started");


// Step 2: Array Destructuring
const colors = ["red", "blue", "green", "yellow"];

const [first, second] = colors;
console.log(first);
console.log(second);

const [, , third] = colors;
console.log(third);


// Step 3: Object Destructuring
const user = {
  name: "John",
  age: 20,
  course: "IT"
};

const { name, age } = user;
console.log(name);
console.log(age);


// Step 4: Advanced Destructuring
const student = {
  id: 1,
  info: {
    fullname: "John Doe",
    grade: "A"
  }
};

const {
  info: { fullname, grade }
} = student;

console.log(fullname);
console.log(grade);

const { section = "BSIT", id: studentId } = student;

console.log(section);
console.log(studentId);


// Step 5: Destructuring in Functions
function showUser({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const person = {
  name: "Alice",
  age: 22
};

showUser(person);