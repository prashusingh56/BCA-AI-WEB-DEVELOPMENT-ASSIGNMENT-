// Assignment 20: Five Reusable Mathematical Functions

// 1. Addition
function add(a, b) {
    return a + b;
}

// 2. Subtraction
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication
function multiply(a, b) {
    return a * b;
}

// 4. Division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// 5. Calculate Square
function square(number) {
    return number * number;
}

// Testing all five functions
console.log("Addition:", add(10, 5));

console.log("Subtraction:", subtract(10, 5));

console.log("Multiplication:", multiply(10, 5));

console.log("Division:", divide(10, 5));

console.log("Square:", square(5));
