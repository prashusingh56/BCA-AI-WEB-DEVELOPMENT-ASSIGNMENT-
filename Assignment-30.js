// Assignment 30: Detailed Product Object

const product = {
    id: 101,
    name: "Smart Laptop",
    brand: "TechPro",
    category: "Electronics",

    price: 55000,
    stock: 15,

    specifications: {
        processor: {
            brand: "Intel",
            model: "Core i5",
            generation: "12th Generation"
        },

        memory: {
            ram: "16GB",
            storage: "512GB SSD"
        },

        display: {
            size: "15.6 inches",
            resolution: "1920 x 1080"
        },

        battery: {
            capacity: "5000 mAh",
            backup: "8 Hours"
        }
    },

    warranty: {
        duration: "2 Years",
        type: "Manufacturer Warranty"
    },

    rating: 4.5
};


// Display Product Information

console.log("PRODUCT DETAILS");

console.log("Product ID:", product.id);
console.log("Product Name:", product.name);
console.log("Brand:", product.brand);
console.log("Category:", product.category);
console.log("Price: Rs.", product.price);
console.log("Available Stock:", product.stock);


// Display Nested Specifications

console.log("\nPRODUCT SPECIFICATIONS");

console.log("Processor:", product.specifications.processor.model);

console.log("RAM:", product.specifications.memory.ram);

console.log("Storage:", product.specifications.memory.storage);

console.log("Display:", product.specifications.display.size);

console.log("Battery:", product.specifications.battery.backup);


// Display Warranty

console.log("\nWARRANTY DETAILS");

console.log("Duration:", product.warranty.duration);
console.log("Type:", product.warranty.type);


// Display Rating

console.log("\nProduct Rating:", product.rating);
