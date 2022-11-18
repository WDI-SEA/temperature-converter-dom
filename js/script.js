// Variables
let titleText = document.getElementById('title')
let input = document.getElementById('input')
let calculate = document.getElementById('calc-btn')
let clear = document.getElementById('clear-btn')
let result = document.getElementById('result')

// Conversion function

let calculateFtocConversion = function () {
    let inputValue = input.value
    let convertedFtoc = (inputValue - 32) * (5 / 9)
    result.innerText = (`${convertedFtoc} °C`)

    //  Bonus: change background color of result
    if (convertedFtoc <= 0) {
    result.style.backgroundColor = "cornflowerblue"
    result.innerText = (`${convertedFtoc} °C is freeeeezing`)
    }
    if (convertedFtoc >= 36) {
    result.style.backgroundColor = "crimson"
    result.innerText = (`${convertedFtoc} °C is super hot!`)
    }
} 
calculate.addEventListener('click', calculateFtocConversion)

// Clear the input box with the clear button:
clear.addEventListener('click', function(e) {
    input.value = '';
    result.innerText = "Result";
    result.backgroundColor = null
})


//STILL WORKING ON THIS 😅:
// if(ftocRadio.checked === true) {

// // Radio buttons:
// let ftocRadio = document.getElementById("radio1")
// let ctofRadio = document.getElementById("radio2")

// // Radio specific functionality:

// // When someone types a value and clicks F and "calculate"
// if(ftocRadio.checked === true && ) {
//     calculate.addEventListener('click', calculateFtocConversion)
// // When someone types a value and clicks C and "calculate"
//  } else if(ctofRadio.checked === true) {
//         calculate.addEventListener('click', calculateCtofConversion)
//  }