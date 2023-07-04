function convert() {
    // Get the Base64 input and decode it to text
    var base64Input = document.getElementById("base64-input").value;
    var textOutput = atob(base64Input);
  
    // Set the text output in the text area
    document.getElementById("text-output").value = textOutput;
  }