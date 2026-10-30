// Assignment 26: Product Dataset Filtering and Summary

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        stock: 10
    },
    {
        id: 2,
        name: "Mobile Phone",
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
    },
    {
        id: 5,
        name: "Jeans",
        category: "Clothing",
        price: 1500,
        stock: 12
    }
];

// 1. Filter Electronics Products

const electronics = products.filter(function(product) {
    return product.category === "Electronics";
});

console.log("Electronics Products:");
console.log(electronics);


// 2. Filter Products Under Rs. 5000

const affordableProducts = products.filter(function(product) {
    return product.price < 5000;
});

console.log("\nAffordable Products:");
console.log(affordableProducts);


// 3. Calculate Total Product Value

const totalValue = products.reduce(function(total, product) {
    return total + (product.price * product.stock);
}, 0);

console.log("\nTotal Inventory Value: Rs.", totalValue);


// 4. Calculate Total Stock

const totalStock = products.reduce(function(total, product) {
    return total + product.stock;
}, 0);

console.log("\nTotal Stock:", totalStock);


// 5. Sort Products by Price

const sortedProducts = [...products].sort(function(a, b) {
    return a.price - b.price;
});

console.log("\nProducts Sorted by Price:");
console.log(sortedProducts);


// 6. Create Product Summary

const summary = products.map(function(product) {
    return {
        productName: product.name,
        price: product.price,
        availableStock: product.stock
    };
});

console.log("\nProduct Summary:");
console.log(summary);
