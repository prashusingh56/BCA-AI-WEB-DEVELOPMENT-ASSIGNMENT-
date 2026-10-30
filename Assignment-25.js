// Assignment 25: Shopping List Manager

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let shoppingList = [];

function showMenu() {
    console.log("\n===== SHOPPING LIST MANAGER =====");
    console.log("1. Add Item");
    console.log("2. View Shopping List");
    console.log("3. Remove Item");
    console.log("4. Exit");

    rl.question("Enter your choice: ", function(choice) {

        switch (choice) {
            case "1":
                addItem();
                break;

            case "2":
                viewList();
                showMenu();
                break;

            case "3":
                removeItem();
                break;

            case "4":
                console.log("Thank you for using Shopping List!");
                rl.close();
                break;

            default:
                console.log("Invalid choice. Try again.");
                showMenu();
        }
    });
}

function addItem() {
    rl.question("Enter item name: ", function(item) {

        if (item.trim() === "") {
            console.log("Item name cannot be empty.");
        } else {
            shoppingList.push(item.trim());
            console.log(item + " added successfully!");
        }

        showMenu();
    });
}

function viewList() {
    console.log("\nYour Shopping List:");

    if (shoppingList.length === 0) {
        console.log("Shopping list is empty.");
        return;
    }

    shoppingList.forEach(function(item, index) {
        console.log((index + 1) + ". " + item);
    });
}

function removeItem() {
    viewList();

    if (shoppingList.length === 0) {
        showMenu();
        return;
    }

    rl.question("Enter item number to remove: ", function(number) {

        const index = Number(number) - 1;

        if (
            !Number.isInteger(Number(number)) ||
            index < 0 ||
            index >= shoppingList.length
        ) {
            console.log("Invalid item number.");
        } else {
            const removed = shoppingList.splice(index, 1);
            console.log(removed[0] + " removed successfully!");
        }

        showMenu();
    });
}

showMenu();
