
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function(event) {
  let inputVal = document.querySelector("#inputText").value
  let fahrenheit = document.getElementById("#tempF");
  let celsius = document.getElementById("#tempC");
    if (fahrenheit.checked == true) {
      inputVal = (inputVal - 32) * 5/9 ;
    } else if (celsius.checked == true) {
      inputVal = ((inputVal/5)*9)+32 ;
    } else {
    alert ("Please select temperature unit first!");  
    } 
  document.getElementById("#result").value = inputVal;
});

let clearBtn = document.querySelector("#clear");
document.addEventListener("click", function(event) {
    document.querySelector("#result").innerText = "";
});