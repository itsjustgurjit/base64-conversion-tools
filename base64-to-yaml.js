function convertBase64() {
    var base64Input = document.getElementById("base64Input").value.trim();

    if (base64Input === "") {
        alert("Please enter a base64-encoded YAML document.");
        return;
    }

    try {
        var jsonString = atob(base64Input);
        var yamlObject = jsyaml.safeLoad(jsonString);
        var yamlOutput = document.getElementById("yamlOutput");
        yamlOutput.value = jsyaml.dump(yamlObject);
    } catch (error) {
        alert("Error converting base64 to YAML: " + error.message);
    }
}
