<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Node Relationships</title>
</head>
<body>

    <h1 id="heading">DOM Relationships</h1>

    <div id="container">
        <p id="first">First Paragraph</p>
        <p id="second">Second Paragraph</p>
        <p id="third">Third Paragraph</p>
    </div>

    <div id="output"></div>

    <script>
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const container = document.getElementById("container");

        const output = document.getElementById("output");

        output.innerHTML = `
            <h2>DOM Relationships</h2>
            <p>Parent: ${first.parentElement.id}</p>
            <p>First Child: ${container.firstElementChild.textContent}</p>
            <p>Last Child: ${container.lastElementChild.textContent}</p>
            <p>Next Sibling: ${first.nextElementSibling.textContent}</p>
            <p>Previous Sibling: ${second.previousElementSibling.textContent}</p>
            <p>Children Count: ${container.children.length}</p>
        `;
    </script>

</body>
</html>
