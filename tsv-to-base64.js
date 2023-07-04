function convertToBase64() {
    var tsvInput = document.getElementById("tsvInput").value.trim();

    if (tsvInput === "") {
        alert("Please enter a TSV document.");
        return;
    }

    try {
        var base64String = btoa(tsvInput);
        var base64Output = document.getElementById("base64Output");
        base64Output.value = base64String;
    } catch (error) {
        alert("Error converting TSV to Base64: " + error.message);
    }
}