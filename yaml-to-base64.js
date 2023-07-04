function convertYaml() {
    var yamlInput = document.getElementById("yamlInput").value.trim();

    if (yamlInput === "") {
        alert("Please enter a YAML document.");
        return;
    }

    try {
        var yamlObject = jsyaml.load(yamlInput);
        var jsonString = JSON.stringify(yamlObject);
        var base64String = btoa(jsonString);
        var base64Output = document.getElementById("base64Output");
        base64Output.value = base64String;
    } catch (error) {
        alert("Error converting YAML to base64: " + error.message);
    }
}