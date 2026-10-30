<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reusable Card Rendering</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4ff;
            padding: 25px;
        }

        h1 {
            text-align: center;
            color: #3730a3;
        }

        .container {
            max-width: 900px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card h2 {
            color: #4f46e5;
        }

        .card p {
            color: #555;
        }

        .card button {
            background: #4f46e5;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>

<body>

    <h1>Student Cards</h1>

    <main class="container" id="cardContainer"></main>

    <script>

        // Student Data
        const students = [
            {
                name: "Ratna Singh",
                course: "BCA Artificial Intelligence",
                semester: "3rd Semester"
            },
            {
                name: "Priya Sharma",
                course: "BCA Computer Science",
                semester: "2nd Semester"
            },
            {
                name: "Anjali Verma",
                course: "BBA",
                semester: "1st Semester"
            },
            {
                name: "Neha Gupta",
                course: "BCA",
                semester: "4th Semester"
            }
        ];


        // Reusable Card Rendering Function
        function renderCard(student) {

            const card = document.createElement("div");

            card.className = "card";

            const heading = document.createElement("h2");
            heading.textContent = student.name;

            const course = document.createElement("p");
            course.textContent = "Course: " + student.course;

            const semester = document.createElement("p");
            semester.textContent = "Semester: " + student.semester;

            const button = document.createElement("button");
            button.textContent = "View Profile";

            button.addEventListener("click", function() {
                alert("Student Name: " + student.name);
            });

            card.appendChild(heading);
            card.appendChild(course);
            card.appendChild(semester);
            card.appendChild(button);

            return card;
        }


        // Render All Student Cards
        function renderAllCards(studentList) {

            const container = document.getElementById("cardContainer");

            container.replaceChildren();

            studentList.forEach(function(student) {

                const card = renderCard(student);

                container.appendChild(card);

            });
        }


        // Display Cards
        renderAllCards(students);

    </script>

</body>
</html>
