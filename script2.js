document.getElementById("generateButton").addEventListener("click", function () {
    const lineLength = parseInt(document.getElementById("lineLength").value);
    const lineElement = document.getElementById("line");
    lineElement.textContent = ".".repeat(lineLength);
});
