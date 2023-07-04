function convertAudio() {
    var audioInput = document.getElementById("audioInput");

    if (audioInput.files.length > 0) {
        var file = audioInput.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
            var base64String = event.target.result.split(",")[1];
            var base64Output = document.getElementById("base64Output");
            base64Output.value = base64String;
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please select an audio file.");
    }
}