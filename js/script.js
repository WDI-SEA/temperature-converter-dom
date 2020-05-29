//chrome console check
document.addEventListener("DOMContentLoaded", function() {
    console.log("my page loaded.")
})

//establish variables
let submitButton = document.querySelectorAll(".submit")
let displayTemp = document.querySelectorAll(".convertedTemp")
let enteredTemp = 0
let farenheit = document.getElementById("degreeF")
let celcius = document.getElementById("degreeC")
//let submitButton = document.getElementByClass("submit")
let clearButton = document.querySelectorAll(".clear")

//user clicks submit for farenheit or celcius
submitButton[0].addEventListener("click", function(event) {
    if (farenheit.checked == true) {
            calcTempFare()
    } else {
            calcTempCelc()
        }
    }
)

//calculation to convert user inputted temperature to farenheit
function calcTempFare() {
    let enteredTemp = document.getElementById("userTempLA").value
    console.log(enteredTemp)
    let displayTemp = (((enteredTemp * 9) / 5) + 32)
    document.getElementById("convertedTemp").innerText = displayTemp
}

//calculation to convert user inputted temperature to celcius
function calcTempCelc() {
    let enteredTemp = document.getElementById("userTempLA").value
    console.log(enteredTemp)
    let displayTemp = (((enteredTemp * 9) / 5) + 32)
    document.getElementById("convertedTemp").innerText = displayTemp
}

//user clicks clear button
clearButton[0].addEventListener("click", function (event) {
    document.getElementById("convertedTemp").innerText = "::"
    document.getElementById("userTempLA").innerText = ""
    }
)


//submitButton[0].addEventListener("click", function(event) {
//  document.querySelector(".convertedTemp").innerText = "5"
// })
/*
theDivs[1].addEventListener("click", function(e) {
  document.querySelector("body").style.backgroundColor = "green";
})

*/
