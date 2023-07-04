function convertCssToBase64() {
    var cssInput = document.getElementById("cssInput").value.trim();

    if (cssInput === "") {
        alert("Please enter CSS code.");
        return;
    }

    try {
        var base64String = btoa(cssInput);
        var base64Output = document.getElementById("base64Output");
        base64Output.value = base64String;
    } catch (error) {
        alert("Error converting CSS to Base64: " + error.message);
    }
}