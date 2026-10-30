// Assignment 29: Source Code, Sample Output and Test Cases

// Student Object
const student = {
    name: "Ratna Singh",
    course: "BCA Artificial Intelligence",
    semester: 3,
    marks: 85
};

// Function to calculate result
function calculateResult(student) {

    if (student.marks < 0 || student.marks > 100) {
        return "Invalid Marks";
    }

    if (student.marks >= 33) {
        return "Pass";
    }

    return "Fail";
}

// Function to display student details
function displayStudent(student) {

    return {
        name: student.name,
        course: student.course,
        semester: student.semester,
        marks: student.marks,
        result: calculateResult(student)
    };
}

// Sample Output
console.log("STUDENT DETAILS");

console.log(displayStudent(student));


// Test Cases
const testCases = [
    { marks: 85, expected: "Pass" },
    { marks: 30, expected: "Fail" },
    { marks: 33, expected: "Pass" },
    { marks: 101, expected: "Invalid Marks" },
    { marks: -5, expected: "Invalid Marks" }
];

console.log("\nTEST RESULTS");

testCases.forEach((test, index) => {

    const result = calculateResult({
        marks: test.marks
    });

    const status = result === test.expected ? "PASS" : "FAIL";

    console.log(
        `Test ${index + 1}: ${status} | Expected: ${test.expected} | Actual: ${result}`
    );
});
