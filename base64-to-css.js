function convertBase64ToCss() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a Base64-encoded CSS string.");
        return;
    }

    try {
        var cssString = atob(base64Input);
        var cssOutput = document.getElementById("cssOutput");
        cssOutput.value = cssString;
    } catch (error) {
        alert("Error converting Base64 to CSS: " + error.message);
    }
}