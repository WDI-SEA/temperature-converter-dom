// select all html elements first 

let input = document.querySelector('.input');
let fToC = document.querySelector('.fToC');
let cToF = document.querySelector('.cToF');
let submit = document.querySelector('.submit');
let clear = document.querySelector('.clear');
let tempArea = document.querySelector('.temp-display');

let fConversion = function () {
    let preConversionValue = input.value;
    let postConversionValue = (preConversionValue - 32) * (5/9);
    tempArea.innerText = postConversionValue
}



let celConversion = function () {
    let preConversionValue = input.value;
    let postConversionValue = (preConversionValue * 9/5) + 32;
    tempArea.innerText = postConversionValue
}

let clearText = function() {
    tempArea.innetText = "";
}

fToC.addEventListener("click". fConversion)
cToF.addEventListener("click", celConversion );
clear.addEventListener("click", clearText);