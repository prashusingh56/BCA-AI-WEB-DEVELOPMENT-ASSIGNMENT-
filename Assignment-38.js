<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Interactive Profile</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4ff;
            padding: 25px;
        }

        .profile {
            max-width: 450px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
        }

        .profile-card {
            padding: 15px;
            background: #eef2ff;
            border-radius: 8px;
        }

        .active {
            border: 3px solid green;
        }

        .hidden {
            display: none;
        }

        .favorite {
            background: #ffe4e6;
        }

        button {
            padding: 10px;
            margin: 5px;
            cursor: pointer;
        }

        button:focus-visible {
            outline: 3px solid #2563eb;
            outline-offset: 3px;
        }
    </style>
</head>

<body>

    <main class="profile">

        <h1>Interactive Profile</h1>

        <section class="profile-card" id="profileCard">

            <h2>Ratna Singh</h2>

            <p>BCA Artificial Intelligence Student</p>

            <p id="profileDetails">
                Learning HTML, CSS and JavaScript.
            </p>

        </section>

        <button id="activeButton" aria-pressed="false">
            Activate Profile
        </button>

        <button id="favoriteButton" aria-pressed="false">
            Add to Favourite
        </button>

        <button id="hideButton" aria-expanded="true"
            aria-controls="profileCard">
            Hide Profile
        </button>

        <p id="status" role="status" aria-live="polite">
            Profile is currently inactive.
        </p>

    </main>

    <script>
        const card = document.getElementById("profileCard");
        const status = document.getElementById("status");

        // Activate Profile
        document.getElementById("activeButton")
            .addEventListener("click", function() {

            const active = card.classList.toggle("active");

            this.setAttribute("aria-pressed", active);

            status.textContent = active
                ? "Profile is now active."
                : "Profile is now inactive.";
        });

        // Favourite Profile
        document.getElementById("favoriteButton")
            .addEventListener("click", function() {

            const favorite = card.classList.toggle("favorite");

            this.setAttribute("aria-pressed", favorite);

            status.textContent = favorite
                ? "Profile added to favourites."
                : "Profile removed from favourites.";
        });

        // Hide or Show Profile
        document.getElementById("hideButton")
            .addEventListener("click", function() {

            const hidden = card.classList.toggle("hidden");

            this.textContent = hidden ? "Show Profile" : "Hide Profile";

            this.setAttribute("aria-expanded", !hidden);

            status.textContent = hidden
                ? "Profile is hidden."
                : "Profile is visible.";
        });
    </script>

</body>
</html>
