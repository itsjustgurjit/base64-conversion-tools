function convertFromBase64ToHex() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a Base64 document.");
        return;
    }

    try {
        var decodedData = atob(base64Input);
        var hexString = "";
        for (var i = 0; i < decodedData.length; i++) {
            var hex = decodedData.charCodeAt(i).toString(16);
            if (hex.length == 1) {
                hex = "0" + hex;
            }
            hexString += hex;
        }
        var hexOutput = document.getElementById("hexOutput");
        hexOutput.value = hexString;
    } catch (error) {
        alert("Error converting Base64 to hexadecimal: " + error.message);
    }
}