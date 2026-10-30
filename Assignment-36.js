<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Selection Challenge</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 25px;
            background: #f0f4ff;
        }

        .box {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
        }

        button {
            padding: 10px 15px;
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>

<body>

    <h1 id="mainHeading">Element Selection Challenge</h1>

    <p class="description">This is the first paragraph.</p>
    <p class="description">This is the second paragraph.</p>

    <div class="box">Box One</div>
    <div class="box">Box Two</div>

    <button id="changeButton">Select Elements</button>

    <h2>Results:</h2>
    <div id="output"></div>

    <script>
        const heading = document.getElementById("mainHeading");

        const paragraphs = document.querySelectorAll(".description");

        const boxes = document.getElementsByClassName("box");

        const firstBox = document.querySelector(".box");

        const output = document.getElementById("output");

        document.getElementById("changeButton")
            .addEventListener("click", function() {

            heading.textContent = "Elements Selected Successfully!";

            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = "blue";
            });

            Array.from(boxes).forEach(function(box) {
                box.style.background = "#dbeafe";
            });

            output.textContent =
                "Heading selected successfully. " +
                "Paragraphs found: " + paragraphs.length +
                ". Boxes found: " + boxes.length +
                ". First box: " + firstBox.textContent;
        });
    </script>

</body>
</html>
