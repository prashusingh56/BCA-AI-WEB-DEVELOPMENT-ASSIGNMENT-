// Assignment 24: Practical with Test Cases and Reflection

// Validation utility functions

function isValidName(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return false;
    }
    return true;
}

function isValidAge(age) {
    if (typeof age !== "number" || !Number.isInteger(age)) {
        return false;
    }
    return age >= 1 && age <= 120;
}

function isValidEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Test cases

const testCases = [
    {
        name: "Valid Name",
        result: isValidName("Ratna"),
        expected: true
    },
    {
        name: "Empty Name",
        result: isValidName(""),
        expected: false
    },
    {
        name: "Valid Age",
        result: isValidAge(20),
        expected: true
    },
    {
        name: "Invalid Age",
        result: isValidAge(150),
        expected: false
    },
    {
        name: "Valid Email",
        result: isValidEmail("student@gmail.com"),
        expected: true
    },
    {
        name: "Invalid Email",
        result: isValidEmail("studentgmail.com"),
        expected: false
    }
];

// Run all test cases

console.log("ASSIGNMENT 24 - TEST RESULTS");

testCases.forEach((test, index) => {
    const status = test.result === test.expected ? "PASS" : "FAIL";

    console.log(
        `${index + 1}. ${test.name}: ${status}`
    );
});

// Short Reflection

console.log("\nSHORT REFLECTION");

console.log("1. I learned how to create reusable validation functions.");
console.log("2. I understood the importance of test cases.");
console.log("3. I learned how to identify invalid inputs.");
console.log("4. Testing helps to improve program reliability.");
