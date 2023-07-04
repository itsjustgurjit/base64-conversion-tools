function convertFromHexToBase64() {
    var hexInput = document.getElementById("hexInput").value.trim();

    if (hexInput === "") {
        alert("Please enter a hexadecimal string.");
        return;
    }

    try {
        var decodedData = "";
        for (var i = 0; i < hexInput.length; i += 2) {
            decodedData += String.fromCharCode(parseInt(hexInput.substr(i, 2), 16));
        }
        var base64String = btoa(decodedData);
        var base64Output = document.getElementById("base64Output");
        base64Output.value = base64String;
    } catch (error) {
        alert("Error converting hexadecimal to Base64: " + error.message);
    }
}