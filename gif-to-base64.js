function encodeGifToBase64() {
    var gifInput = document.getElementById("gifInput");
    var base64Output = document.getElementById("base64Output");

    if (gifInput.files.length === 0) {
        alert("Please select a GIF file.");
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = function() {
        var base64String = btoa(fileReader.result);
        base64Output.value = base64String;
    };
    fileReader.onerror = function() {
        console.error("Error reading GIF file:", fileReader.error);
        alert("Error reading GIF file.");
    };
    fileReader.readAsBinaryString(gifInput.files[0]);
}