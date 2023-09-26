document.getElementById("convertButton").addEventListener("click", function () {
    const decimalNumber = parseInt(document.getElementById("decimalNumber").value);
    const binaryResultElement = document.getElementById("binaryResult");
    binaryResultElement.textContent = decimalNumber.toString(2);
});
