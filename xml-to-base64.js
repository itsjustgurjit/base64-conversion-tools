function convertXml() {
    var xmlInput = document.getElementById("xmlInput").value.trim();

    if (xmlInput === "") {
        alert("Please enter an XML document.");
        return;
    }

    var base64String = btoa(xmlInput);
    var base64Output = document.getElementById("base64Output");
    base64Output.value = base64String;
}