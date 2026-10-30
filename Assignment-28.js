// Assignment 28: Arrays and Strings Problem Set


// 1. Find Sum of Array Elements

function arraySum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log("1. Array Sum:", arraySum([10, 20, 30, 40]));


// 2. Find Largest Number

function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return Math.max(...numbers);
}

console.log("2. Largest Number:", findLargest([10, 50, 30, 90, 20]));


// 3. Reverse an Array

function reverseArray(numbers) {
    return [...numbers].reverse();
}

console.log("3. Reversed Array:", reverseArray([1, 2, 3, 4, 5]));


// 4. Remove Duplicate Elements

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log("4. Unique Elements:", removeDuplicates([1, 2, 2, 3, 4, 4]));


// 5. Find Even Numbers

function findEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

console.log("5. Even Numbers:", findEvenNumbers([1, 2, 3, 4, 5, 6]));


// 6. Reverse a String

function reverseString(text) {
    return [...text].reverse().join("");
}

console.log("6. Reversed String:", reverseString("JavaScript"));


// 7. Count Characters

function countCharacters(text) {
    return text.length;
}

console.log("7. Character Count:", countCharacters("Hello World"));


// 8. Check Palindrome

function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === [...cleaned].reverse().join("");
}

console.log("8. Is Palindrome:", isPalindrome("Madam"));


// 9. Count Words

function countWords(text) {
    const cleaned = text.trim();

    if (cleaned === "") {
        return 0;
    }

    return cleaned.split(/\s+/).length;
}

console.log("9. Word Count:", countWords("JavaScript is easy to learn"));


// 10. Convert String into Array

function stringToArray(text) {
    return text.split(" ");
}

console.log("10. String to Array:",
    stringToArray("Learn JavaScript Programming"));
