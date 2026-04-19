// Import fs module
const fs = require("fs");

// Content to write
const message = "Hello from Node.js! This file was created using fs module.";

// Write to file
fs.writeFile("message.txt", message, (err) => {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("File created successfully!");
    }
});