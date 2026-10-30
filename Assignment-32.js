// Assignment 32: Profile Summary Generator

const student = {

    name: "Ratna Singh",
    age: 20,
    course: "BCA Artificial Intelligence",
    college: "Invertis University",
    city: "Bareilly",
    semester: 3,

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java"
    ]

};


// 1. Object.keys()

console.log("OBJECT KEYS");

console.log(Object.keys(student));


// 2. Object.values()

console.log("\nOBJECT VALUES");

console.log(Object.values(student));


// 3. Object.entries()

console.log("\nOBJECT ENTRIES");

console.log(Object.entries(student));


// 4. Create Profile Summary

function generateProfileSummary(profile) {

    const summary = Object.entries(profile)
        .map(([key, value]) => {

            if (Array.isArray(value)) {
                return key + ": " + value.join(", ");
            }

            return key + ": " + value;

        });

    return summary.join("\n");
}


// 5. Display Profile Summary

console.log("\nSTUDENT PROFILE SUMMARY");

console.log(generateProfileSummary(student));


// 6. Object.assign()

const updatedProfile = Object.assign({}, student, {
    semester: 4,
    city: "Lucknow"
});

console.log("\nUPDATED PROFILE");

console.log(updatedProfile);


// 7. Object.hasOwn()

console.log("\nPROPERTY CHECK");

console.log(
    "Has Name:",
    Object.hasOwn(student, "name")
);

console.log(
    "Has Email:",
    Object.hasOwn(student, "email")
);
