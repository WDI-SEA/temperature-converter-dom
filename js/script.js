// when submit is clicked, take text from field and convert to selected degrees. update div with new values

let tempInput = document.getElementById('tempInput')
let cRadio = document.getElementById('cTemp')
let fRadio = document.getElementById('fTemp')
let submitButton = document.getElementById('submitButton')
let clearButton = document.getElementById('clearButton')
let output = document.getElementById('tempConversion')

// Add click listener to submit button. On click, run function. If Fahrenheit button is checked, convert user input to Farenheit and add text to output div.. Else (Celcius button is checked) convert user input to Celcius and add text to output div.
submitButton.addEventListener('click', function outputHere() {
    if (fRadio.checked) {
    output.innerText = tempInput.value * 9 / 5 + 32 + '℉';
} else {
    output.innerText =  (tempInput.value - 32) * 5 / 9 + '℃';
}
}
)
// Add click listener to clear button. On click, run function to clear contents of output div.
clearButton.addEventListener('click', function clearDiv() {
    output.innerText = " "})

