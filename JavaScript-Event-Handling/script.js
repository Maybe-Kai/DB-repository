// Access elements
const btn = document.getElementById("clickBtn");
const input = document.getElementById("textInput");
const select = document.getElementById("selectBox");
const form = document.getElementById("myForm");
const output = document.getElementById("output");

// Click event
btn.addEventListener("click", () => {
    output.textContent = "Button clicked!";
});

// Input event
input.addEventListener("input", () => {
    output.textContent = "Typing: " + input.value;
});

// Change event
select.addEventListener("change", () => {
    output.textContent = "Selected: " + select.value;
});

// Submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.textContent = "Form submitted!";
});

// Keyup event
input.addEventListener("keyup", (e) => {
    output.textContent = "Last key: " + e.key;
});

// Mouse events
btn.addEventListener("mouseover", () => {
    output.textContent = "Mouse over button";
});

btn.addEventListener("mouseout", () => {
    output.textContent = "Mouse left button";
});

// Focus & Blur
input.addEventListener("focus", () => {
    input.style.background = "#e0f7ff";
});

input.addEventListener("blur", () => {
    input.style.background = "white";
});