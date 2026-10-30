// Assignment 34: Catalogue Data, Utilities and Test Scenarios


// Catalogue Data

const catalogue = [

    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        stock: 10
    },

    {
        id: 2,
        name: "Mobile",
        category: "Electronics",
        price: 20000,
        stock: 15
    },

    {
        id: 3,
        name: "T-Shirt",
        category: "Clothing",
        price: 800,
        stock: 25
    },

    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 3000,
        stock: 8
    }

];


// Utility 1: Find Product by ID

function findProductById(id) {

    return catalogue.find(function(product) {
        return product.id === id;
    });
}


// Utility 2: Filter Products by Category

function filterByCategory(category) {

    return catalogue.filter(function(product) {
        return product.category === category;
    });
}


// Utility 3: Calculate Total Inventory Value

function calculateInventoryValue() {

    return catalogue.reduce(function(total, product) {

        return total + (product.price * product.stock);

    }, 0);
}


// Utility 4: Find Products with Low Stock

function findLowStock(limit) {

    return catalogue.filter(function(product) {
        return product.stock < limit;
    });
}


// Utility 5: Validate Product

function validateProduct(product) {

    if (!product.name || !product.category) {
        return false;
    }

    if (typeof product.price !== "number" || product.price < 0) {
        return false;
    }

    if (!Number.isInteger(product.stock) || product.stock < 0) {
        return false;
    }

    return true;
}


// Test Scenarios

console.log("TEST 1: Find Product");

console.log(findProductById(1));


console.log("\nTEST 2: Filter Electronics");

console.log(filterByCategory("Electronics"));


console.log("\nTEST 3: Inventory Value");

console.log(calculateInventoryValue());


console.log("\nTEST 4: Low Stock Products");

console.log(findLowStock(10));


console.log("\nTEST 5: Validate Product");

const testProduct = {
    name: "Keyboard",
    category: "Electronics",
    price: 1000,
    stock: 20
};

console.log(validateProduct(testProduct));


console.log("\nTEST 6: Invalid Product");

const invalidProduct = {
    name: "Mouse",
    category: "Electronics",
    price: -500,
    stock: 10
};

console.log(validateProduct(invalidProduct));


// Final Summary

console.log("\nCATALOGUE SUMMARY");

console.log("Total Products:", catalogue.length);

console.log("Inventory Value:", calculateInventoryValue());

console.log("All Tests Completed");
