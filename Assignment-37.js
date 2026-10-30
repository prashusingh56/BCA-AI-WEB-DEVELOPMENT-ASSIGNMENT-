<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Content Updater</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #eef2ff;
            padding: 25px;
        }

        .container {
            max-width: 450px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 12px;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            box-sizing: border-box;
        }

        button {
            padding: 12px;
            background: #4f46e5;
            color: white;
            border: none;
            cursor: pointer;
        }

        .profile {
            margin-top: 20px;
            padding: 15px;
            background: #eef2ff;
            border-radius: 8px;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>Update Your Profile</h1>

        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name">

        <label for="course">Course:</label>
        <input type="text" id="course" placeholder="Enter your course">

        <label for="bio">About Me:</label>
        <textarea id="bio" placeholder="Write about yourself"></textarea>

        <button id="updateButton">Update Profile</button>

        <div class="profile">
            <h2 id="profileName">Your Name</h2>
            <p id="profileCourse">Your Course</p>
            <p id="profileBio">Your Introduction</p>
        </div>

    </div>

    <script>
        const nameInput = document.getElementById("name");
        const courseInput = document.getElementById("course");
        const bioInput = document.getElementById("bio");

        document.getElementById("updateButton")
            .addEventListener("click", function() {

            const name = nameInput.value.trim();
            const course = courseInput.value.trim();
            const bio = bioInput.value.trim();

            if (!name || !course || !bio) {
                alert("Please fill all fields.");
                return;
            }

            // textContent safely displays user input.
            document.getElementById("profileName").textContent = name;

            document.getElementById("profileCourse").textContent =
                "Course: " + course;

            document.getElementById("profileBio").textContent =
                "About Me: " + bio;

        });
    </script>

</body>
</html>
