function convert() {
    // Get the HTML input and encode it to Base64
    var htmlInput = document.getElementById("html-input").value;
    var base64Output = btoa(htmlInput);
  
    // Set the Base64 output in the text area
    document.getElementById("base64-output").value = base64Output;
  }