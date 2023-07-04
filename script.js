function convert() {
    // Get the Base64 input and decode it to CSV
    var base64Input = document.getElementById("base64-input").value;
    var csvOutput = atob(base64Input);
  
    // Set the CSV output in the text area
    document.getElementById("csv-output").value = csvOutput;
  }