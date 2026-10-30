<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Profile Event Map</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4ff;
            padding: 25px;
        }

        .container {
            max-width: 500px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 12px;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            box-sizing: border-box;
        }

        button {
            padding: 10px 15px;
            background: #4f46e5;
            color: white;
            border: none;
            cursor: pointer;
        }

        .profile {
            background: #eef2ff;
            padding: 15px;
            margin-top: 20px;
        }

        #eventLog {
            margin-top: 20px;
            background: #f3f4f6;
            padding: 12px;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>Interactive Student Profile</h1>

        <form id="profileForm">

            <label for="studentName">Student Name</label>
            <input type="text" id="studentName" required>

            <label for="studentCourse">Course</label>
            <input type="text" id="studentCourse" required>

            <button type="submit">Update Profile</button>

        </form>

        <div class="profile">

            <h2 id="displayName">Student Name</h2>

            <p id="displayCourse">Course Name</p>

            <button type="button" id="likeButton">
                Like Profile
            </button>

            <p id="likes">Likes: 0</p>

        </div>

        <h2>Event Map</h2>

        <div id="eventLog" aria-live="polite">
            Events will appear here.
        </div>

    </div>

    <script>
        let likes = 0;

        const eventLog = document.getElementById("eventLog");

        function logEvent(message) {
            eventLog.textContent = message;
        }

        // Event 1: Form Submit
        document.getElementById("profileForm")
            .addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("studentName").value.trim();
            const course = document.getElementById("studentCourse").value.trim();

            document.getElementById("displayName").textContent = name;

            document.getElementById("displayCourse").textContent = course;

            logEvent("Submit Event: Profile updated successfully.");
        });

        // Event 2: Button Click
        document.getElementById("likeButton")
            .addEventListener("click", function() {

            likes++;

            document.getElementById("likes").textContent =
                "Likes: " + likes;

            logEvent("Click Event: Profile liked.");
        });

        // Event 3: Input Event
        document.getElementById("studentName")
            .addEventListener("input", function() {

            logEvent("Input Event: Student name is being entered.");
        });

        // Event 4: Keyboard Event
        document.getElementById("studentCourse")
            .addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                logEvent("Keyboard Event: Enter key pressed.");
            }
        });
    </script>

</body>
</html>
