function convertFromBase64() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a Base64 document.");
        return;
    }

    try {
        var tsvString = atob(base64Input);
        var tsvOutput = document.getElementById("tsvOutput");
        tsvOutput.value = tsvString;
    } catch (error) {
        alert("Error converting Base64 to TSV: " + error.message);
    }
}