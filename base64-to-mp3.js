function convertBase64() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a base64-encoded MP3 file.");
        return;
    }

    var audioBlob = base64ToBlob(base64Input, "audio/mp3");
    var audioUrl = URL.createObjectURL(audioBlob);

    var downloadLink = document.createElement("a");
    downloadLink.href = audioUrl;
    downloadLink.download = "audio.mp3";
    downloadLink.click();
}

function base64ToBlob(base64String, mimeType) {
    var byteString = atob(base64String);
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var uint8Array = new Uint8Array(arrayBuffer);

    for (var i = 0; i < byteString.length; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([uint8Array], { type: mimeType });
}