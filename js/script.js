let input = document.querySelector(".input")
let  fToc = document.querySelector(".ftoc")
let  cTof = document.querySelector(".ctof")
let submit = document.querySelector(".submit-btn")
let clear = document.querySelector(".clear-btn")
let tempArea =document.querySelector(".temp-area")

let fConversion = function() {
    let preConversionValue = input.value
    let postConversionValue = (preConversionValue -32) * 5/9
    tempArea.innerText =postConversionValue
}
let cConversion = function() {
    let preConversionValue = input.value
    let postConversionValue = (preConversionValue *9/5) +32
    tempArea.innerText =postConversionValue
}

let clearText = function () {
    tempArea.innerText = ""
}

fToc.addEventListener ("click", fConversion)
cTof.addEventListener ("click", fConversion)
clear.addEventListener("click", clearText)




