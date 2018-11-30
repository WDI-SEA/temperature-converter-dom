document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");

var type = 3;
var ohYeup = document.getElementById("ohYeup");
var output = document.getElementById("output");
var radioSelected = document.getElementById("f");
// //   output.textContent = "enter something";
// //   ohYeup.value = "";

// incoming F input, do (x°F − 32) × 5/9 = °C
function convertToC(f) {
  return Math.round((f - 32) * 5/9);
}
// incoming C input, do (x°C × 9/5) + 32 = °F
function convertToF(c) {
  return Math.round((c * 1.8) + 32);
}
    

document.getElementById("fah").addEventListener("click", function() {
  console.log("F clicked");
  type = 0;
  console.log(type)
})
document.getElementById("cel").addEventListener("click", function() {
  console.log("C clicked");
  type = 1;
  console.log(type)
})

document.getElementById("letsGo").addEventListener("click", function() {
          console.log("Submit button clicked");
          switch (type) {
            case 0:
              console.log("convertToC");
              var input = document.getElementById("ohYeup");
              var temp = input.value;
              var result = document.getElementById("result");
              var converted = convertToC(temp);
              output.textContent = converted;
              break;
            case 1:
              console.log("convertToF");
              var input = document.getElementById("ohYeup");
              var temp = input.value;
              var result = document.getElementById("result");
              var converted = convertToF(temp);
              output.textContent = converted;
              break;
            default:
              console.log("something didn't work");
              window.alert("Pick a Conversion Type °F or °C !");
          }
      }
);
 });