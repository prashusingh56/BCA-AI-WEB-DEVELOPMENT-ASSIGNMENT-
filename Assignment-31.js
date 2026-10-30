// Assignment 31: Shopping Cart Object

const cart = {

    items: [],

    // Add Product to Cart
    addProduct: function(name, price, quantity) {

        if (typeof name !== "string" || name.trim() === "") {
            return "Invalid Product Name";
        }

        if (!Number.isFinite(price) || price <= 0) {
            return "Invalid Price";
        }

        if (!Number.isInteger(quantity) || quantity <= 0) {
            return "Invalid Quantity";
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });

        return "Product Added Successfully";
    },


    // Calculate Total Amount
    calculateTotal: function() {

        return this.items.reduce(function(total, item) {

            return total + (item.price * item.quantity);

        }, 0);
    },


    // Calculate Total Quantity
    calculateQuantity: function() {

        return this.items.reduce(function(total, item) {

            return total + item.quantity;

        }, 0);
    },


    // Display Cart
    displayCart: function() {

        console.log("\nSHOPPING CART");

        this.items.forEach(function(item) {

            console.log(
                item.name +
                " | Price: Rs. " + item.price +
                " | Quantity: " + item.quantity
            );

        });

        console.log("Total Quantity:", this.calculateQuantity());

        console.log("Total Amount: Rs.", this.calculateTotal());
    }

};


// Add Products

console.log(cart.addProduct("Laptop", 50000, 1));

console.log(cart.addProduct("Mouse", 500, 2));

console.log(cart.addProduct("Keyboard", 1000, 1));


// Test Invalid Quantity

console.log(cart.addProduct("Headphones", 1500, -2));


// Display Cart

cart.displayCart();
