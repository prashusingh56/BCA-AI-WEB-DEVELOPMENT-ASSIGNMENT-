// Assignment 27: Text Cleaning Utility

// 1. Remove Extra Spaces

function removeExtraSpaces(text) {
    if (typeof text !== "string") {
        return "";
    }

    return text.trim().replace(/\s+/g, " ");
}


// 2. Convert Text to Uppercase

function toUpperCase(text) {
    if (typeof text !== "string") {
        return "";
    }

    return text.toUpperCase();
}


// 3. Convert Text to Lowercase

function toLowerCase(text) {
    if (typeof text !== "string") {
        return "";
    }

    return text.toLowerCase();
}


// 4. Capitalize First Letter

function capitalizeText(text) {
    const cleaned = removeExtraSpaces(text);

    if (cleaned === "") {
        return "";
    }

    return cleaned.charAt(0).toUpperCase() +
        cleaned.slice(1).toLowerCase();
}


// 5. Clean Email Input

function cleanEmail(email) {
    if (typeof email !== "string") {
        return "";
    }

    return email.trim().toLowerCase();
}


// 6. Clean Form Data

function cleanFormData(formData) {
    return {
        name: capitalizeText(formData.name),
        email: cleanEmail(formData.email),
        city: capitalizeText(formData.city)
    };
}


// Testing Utility Functions

console.log("Remove Spaces:",
    removeExtraSpaces("  Hello    World  "));

console.log("Uppercase:",
    toUpperCase("hello world"));

console.log("Lowercase:",
    toLowerCase("HELLO WORLD"));

console.log("Capitalize:",
    capitalizeText("ratna singh"));

console.log("Clean Email:",
    cleanEmail("  STUDENT@GMAIL.COM  "));


// Testing Form Data

const formData = {
    name: "  ratna   singh ",
    email: " RATNA@GMAIL.COM ",
    city: " bareilly "
};

console.log("\nCleaned Form Data:");
console.log(cleanFormData(formData));
