console.log('Hello, front end');


// let submitButton = document.querySelector("#input")

// submitButton.addEventListener("click", function(e) {
// console.log("button was clicked")
// })
/* Things to do
-input field
-submit button
-clear button
-when button is pressed, the temperature is converted
-a box where new temp is displayed
-radio button
*/
let input = document.querySelector("#input")
let submitButton = document.querySelector("#submit")
let clearButton = document.querySelector("#clear")
let resultTemp = document.querySelector(".result")

submitButton.addEventListener("click", submit)
clearButton.addEventListener("click", clear)

function submit () {
  let inputTemp = document.getElementById("input").value
  if(document.getElementById("tempOptions").value === "Celsius") {
    tempC = (5/9)*(inputTemp - 32)
    resultTemp.innerText = tempC + "°C"
  } if(document.getElementById("tempOptions").value === "Fahrenheit") {
    tempF = (1.8 * inputTemp) + 32
    resultTemp.innerText = tempF + "°F"
  }
}

function clear () {
  document.getElementById("input").value = ""
  document.getElementsByClassName("result").value = ""
  document.querySelector(".result").style.background = "white"
}



// let temperatureF = 80;
// let conversion = 'C';

// if (conversion === 'K') {
//     temperatureK = (5/9)*(temperatureF + 459.67);
//     console.log(temperatureK)
// } else if (conversion === 'C') {
//     temperatureC = (5/9)*(temperatureF - 32);
//     console.log(temperatureC)
// } else {
//     console.log("Please input a temperature.")
// }
