function convert() {
    // Get the input text and encode it to Base64
    var inputText = document.getElementById("text-input").value;
    var base64Output = btoa(inputText);
  
    // Set the Base64 output in the text area
    document.getElementById("base64-output").value = base64Output;
  }