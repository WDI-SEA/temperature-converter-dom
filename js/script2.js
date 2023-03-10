console.log('Hello, front end');

let input = document.querySelector(".input")
let fToC = document.querySelector(".ftoc")
let cToF = document.querySelector(".ctof")
// let submit = document.querySelector(".submit-btn")
let clear = document.querySelector(".clear-btn")
let tempArea = document.querySelector(".temp-area")

let fConversion = function() {
    let preConvValue = input.value
    let postConvValue = (preConvValue - 32) * (5/9)
    tempArea.innerText = postConvValue
}

let cConversion = function() {
    let preConvValue = input.value
    let postConvValue = (preConvValue * 9/5) + 32
    tempArea.innerText = postConvValue
}

let clearText = function() {
    tempArea.innerText = ""

}

fToC.addEventListener("click", fConversion)
cToF.addEventListener("click", cConversion)
clear.addEventListener("clear", clearText)