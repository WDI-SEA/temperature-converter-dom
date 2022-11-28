// Variables
let titleText = document.getElementById('title')
let input = document.getElementById('input')
let calculate = document.getElementById('calc-btn')
let clear = document.getElementById('clear-btn')
let result = document.getElementById('result')

let ftocRadio = document.getElementById("radio1")
let ctofRadio = document.getElementById("radio2")

// Conversion function with radio buttons:


let calculateConversion = function () { if(ftocRadio.checked === true) {

    let inputValue = input.value
    let convertedFtoc = (Math.floor((inputValue - 32) * (5 / 9)))
    result.innerText = (`${convertedFtoc} °C`)

    //  Bonus: change background color of result
    if (convertedFtoc <= 0) {
    result.style.backgroundColor = "cornflowerblue"
    result.innerText = (`${convertedFtoc} °C is freeeeezing 🥶`)
    }
    if (convertedFtoc >= 36) {
    result.style.backgroundColor = "crimson"
    result.innerText = (`${convertedFtoc} °C is super hot! 🥵`)
    }
} else if (ctofRadio.checked === true) {
    let inputValue = input.value
    let convertedCtof = (Math.floor((inputValue * (9/5) + 32)))
    result.innerText = (`${convertedCtof} °F`)

    //  Bonus: change background color of result
    if (convertedCtof <= 32) {
    result.style.backgroundColor = "cornflowerblue"
    result.innerText = (`${convertedCtof} °F is freeeeezing 🥶`)
    }
    if (convertedCtof >= 90) {
    result.style.backgroundColor = "crimson"
    result.innerText = (`${convertedCtof} °F is super hot! 🥵`)
}
}
}
calculate.addEventListener('click', calculateConversion)

// Clear the input box with the clear button:
clear.addEventListener('click', function(e) {
    input.value = '';
    result.innerText = "Result";
    result.style.backgroundColor = "rgb(33, 214, 81)";
})