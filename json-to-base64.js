function convertJson() {
    var jsonInput = document.getElementById("jsonInput").value.trim();

    if (jsonInput === "") {
        alert("Please enter a JSON object.");
        return;
    }

    try {
        var jsonObject = JSON.parse(jsonInput);
        var base64String = btoa(JSON.stringify(jsonObject));
        var base64Output = document.getElementById("base64Output");
        base64Output.value = base64String;
    } catch (error) {
        alert("Error converting JSON to base64: " + error.message);
    }
}