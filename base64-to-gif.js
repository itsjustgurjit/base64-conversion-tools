function convertBase64ToGif() {
    var base64Input = document.getElementById("base64Input").value.trim();
    var gifOutput = document.getElementById("gifOutput");
    var downloadLink = document.getElementById("downloadLink");

    if (base64Input === "") {
        alert("Please enter a Base64-encoded GIF string.");
        return;
    }

    var binary = atob(base64Input);
    var binaryLength = binary.length;
    var binaryArray = new Uint8Array(binaryLength);
    for (var i = 0; i < binaryLength; i++) {
        binaryArray[i] = binary.charCodeAt(i);
    }
    var blob = new Blob([binaryArray], {type: "image/gif"});
    var dataUrl = URL.createObjectURL(blob);

    gifOutput.src = dataUrl;
    gifOutput.style.display = "block";

    downloadLink.href = dataUrl;
    downloadLink.download = "image.gif";
    downloadLink.style.display = "block";
}