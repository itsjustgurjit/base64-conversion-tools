function convert() {
    // Get the Base64 input and decode it to HTML
    var base64Input = document.getElementById("base64-input").value;
    var htmlOutput = atob(base64Input);
  
    // Set the HTML output in the text area
    document.getElementById("html-output").value = htmlOutput;
  }