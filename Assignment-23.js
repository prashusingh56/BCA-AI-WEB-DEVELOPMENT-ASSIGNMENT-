// Assignment 23: Merging Settings and Calculating Totals


// 1. Default Settings
const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true,
    fontSize: 16
};


// 2. User Settings
const userSettings = {
    theme: "dark",
    fontSize: 20
};


// 3. Merge Settings Function
function mergeSettings(defaults, user) {

    return {
        ...defaults,
        ...user
    };
}


// 4. Calculate Total Function
function calculateTotal(prices) {

    if (!Array.isArray(prices)) {
        return "Please provide an array";
    }

    if (!prices.every(price =>
        typeof price === "number" &&
        Number.isFinite(price) &&
        price >= 0
    )) {
        return "Invalid price";
    }

    return prices.reduce((total, price) => total + price, 0);
}


// 5. Calculate Average Function
function calculateAverage(numbers) {

    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }

    if (!numbers.every(number =>
        typeof number === "number" &&
        Number.isFinite(number)
    )) {
        return "Invalid numbers";
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);

    return total / numbers.length;
}


// Testing Merge Settings
const finalSettings = mergeSettings(
    defaultSettings,
    userSettings
);

console.log("Merged Settings:");
console.log(finalSettings);


// Testing Calculate Total
const prices = [100, 200, 300, 400];

console.log("Total Amount:", calculateTotal(prices));


// Testing Calculate Average
const marks = [80, 90, 85, 95];

console.log("Average Marks:", calculateAverage(marks));
