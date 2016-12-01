console.log('Hello, front end');

function convertToC(f) {
   return (f - 32) * 5/9;
 }

function convertToF(c) {
  return c * 1.8 + 32;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

      var scale = 0;
      //var input = document.getElementById("userInput");
      //var temp = input.value;
      //var userOutput = document.getElementById("userOutput");

      document.getElementById("f").addEventListener("click", function() {
          console.log("F radio clicked");
          scale = 0;
      })

      document.getElementById("c").addEventListener("click", function() {
          console.log("C radio clicked");
          scale = 1;
      })


      document.getElementById("clearButton").addEventListener("click", function() {
          console.log("clear pressed");

          var userInput = document.getElementById("userInput");
          var userOutput = document.getElementById("userOutput");
          var radioSelected = document.getElementById("f");

          userOutput.textContent = "enter something";
          userInput.value = "";

      })



      document.getElementById("submitButton").addEventListener("click", function() {
          console.log("Submit button clicked");
          switch (scale) {
            case 0:
              console.log("ferenheight running");
              var input = document.getElementById("userInput");
              var temp = input.value;
              var userOutput = document.getElementById("userOutput");
              var converted = convertToC(temp);
              userOutput.textContent = converted;
              break;
            case 1:
              console.log("celcius running");
              var input = document.getElementById("userInput");
              var temp = input.value;
              var userOutput = document.getElementById("userOutput");
              var converted = convertToF(temp);
              userOutput.textContent = converted;
              break;
            default:
              console.log("something didn't work");
          }
      }
);



});
