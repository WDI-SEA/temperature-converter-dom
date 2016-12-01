console.log('Hello, front end');

function setInputAsConverted() {
  var input = document.getElementsById("userInput");
  var converted = document.getElementById("userOutput");


  var converted = input.value;

  userOutput.textContent = converted;
}

var scale = 0;

function convertToC(f) {
   return (f - 32) * 5/9;
 }
function convertToF(c) {
  return c * 1.8 + 32;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

      document.getElementById("f").addEventListener("click", function() {
          console.log("F radio clicked");
          scale = 0;
      })

      document.getElementById("c").addEventListener("click", function() {
          console.log("C radio clicked");
          scale = 1;
      })

      document.getElementById("submitButton").addEventListener("click", function() {
          console.log("Submit button clicked");
          switch (scale) {
            case 0:
              console.log(convertToC(50));
              break;
            case 1:
              console.log(convertToC(70));
              break;
            default:
              console.log("something didn't work");
          }
  });



});
