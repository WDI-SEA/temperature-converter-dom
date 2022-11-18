// DOM selector
const btn = document.getElementById('submit');
const clear = document.querySelectorAll('clear');
const fromVal = document.querySelectorAll('input[name="fromSelect"]');
let output = document.getElementById('output');
// Functions
function unitChecker() {
    if (inputSelectedUnit === "Celsius") {
        celsiusToFahKel;
    } else if (inputSelectedUnit === "Fahrenheit") {
        fahrenheitToCelKel;
    } else if (inputSelectedUnit === "Kelvin") {
        kelvinToCelFah
    }
}

function fahrenheitToCelKel() {
    if (condition) {
        
    } else if () {

    }
}

function celsiusToFahKel() {
    if (condition) {
        
    } else if () {
        
    }
}

function kelvinToCelFah() {
    if (){

    } else if () {

    }
}

function clearit() {
    console.log('cleared');
}

// Event listeners
btn.addEventListener("click", submitit());

function submitit() {
    let inputSelectedUnit;
    for (const fromVal of value) {
        if (fromVal.checked) {
            inputSelectedUnit = fromVal.value;
            break;
        }
    }
    output.innerText = value
}

function checkOutput() {
    
}

clear.addEventListener("click", clearit());
