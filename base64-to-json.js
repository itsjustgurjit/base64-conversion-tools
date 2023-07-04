function convertBase64() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a base64-encoded JSON string.");
        return;
    }

    try {
        var jsonString = atob(base64Input);
        var jsonObject = JSON.parse(jsonString);
        var jsonOutput = document.getElementById("jsonOutput");
        jsonOutput.value = JSON.stringify(jsonObject, null, 4);
    } catch (error) {
        alert("Error converting base64 to JSON: " + error.message);
    }
}