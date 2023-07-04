function convert() {
    // Get the CSV input and encode it to Base64
    var csvInput = document.getElementById("csv-input").value;
    var base64Output = btoa(csvInput);
  
    // Set the Base64 output in the text area
    document.getElementById("base64-output").value = base64Output;
  }