var input = document.querySelector("#temp")
var submitButton = document.querySelector("#submit")
var conversion = document.querySelector("#conversion")
var clearButton = document.querySelector("#clear")
var radioButtons = document.querySelector(".radio")
var farenheitButton = document.querySelector("#f")
var celciusButton = document.querySelector("#c")



submitButton.addEventListener("click", function(){  
  if (farenheitButton.checked) {
    var result = ((input.value - 32) * 5/9).toFixed(2)
    if (result <= 0) {
      conversion.innerText = "🥶 The result is " + result +"° ! Damn, that's cold! 🧊";
    } else if (result >= 100) {
        conversion.innerText = "🥵 The result is " + result +"° ! Damn, that's hot! 🔥";
    } else {
      conversion.innerText = "The result is " + result +"° !";
    }
   } else if(celciusButton.checked) {
    var result = ((input.value * 9/5) + 32).toFixed(2)
    if (result <= 32) {
        conversion.innerText = "🥶 The result is " + result +"° ! Damn, that's cold! 🧊";
      } else if (result >= 212) {
          conversion.innerText = "🥵 The result is " + result +"° ! Damn, that's hot! 🔥";
      } else {
        conversion.innerText = "The result is " + result +"° !";
      }
   } else {
   }
})


clearButton.addEventListener("click", function(){
    input.value = "";
    radioButtons.checked = false;
    celciusButton.checked = false;
    conversion.innerText = "";
})

function onlyNumberKey(evt) { 
          
    // Only ASCII charactar in that range allowed 
    // I stole this code from https://www.geeksforgeeks.org/how-to-force-input-field-to-enter-numbers-only-using-javascript/
    // but I modified it so that I could enter negative numbers 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 45 || ASCIICode > 57 || ASCIICode == 46 || ASCIICode == 47)) 
        return false; 
    return true; 
} 

