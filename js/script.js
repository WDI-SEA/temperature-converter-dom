let input = document.querySelector(".input")
let fToC = document.querySelector(".ftoc")
let cToF = document.querySelector(".ctof")
let submit = document.querySelector(".submit-btn")
let clear = document.querySelector(".clear-btn")
let tempArea = document.querySelector(".temp-area")

let fConversion = function() {
    let preConversionValue = input.value
    let postConversionValue = (preConversionValue - 32) * (5/9)
    tempArea.innerText = postConversionValue

    if(postConversionValue < 0) {
        tempArea.style.backgroundColor = "blue"
    } else if (postConversionValue > 50) {
        tempArea.style.backgroundColor = "red"
    }
}

let cConversion = function() {
    let preConversionValue = input.value
    let postConversionValue = (preConversionValue * 9/5) + 32
    tempArea.innerText = postConversionValue

    if(postConversionValue < 32) {
        tempArea.style.backgroundColor = "blue"
    } else if (postConversionValue > 120) {
        tempArea.style.backgroundColor = "red"
    }
}

let clearText = function() {
    tempArea.innerText = ""
}

fToC.addEventListener("click", fConversion)
cToF.addEventListener("click", cConversion)
clear.addEventListener("click", clearText)

