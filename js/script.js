// variables needed for the functions
const getTemp = document.getElementById('temp-input');
const submitButton = document.getElementById('submitButton')
const clearButtonButton = document.getElementById('clearButton')

const fToCRadioButton = document.getElementById('fahrenheitButton')
const cToFRadioButton = document.getElementById('CelciusButton')


function workingRadioButtons () {
        if (cToFRadioButton.checked) {
            displayfahrenheitTemp()
        } else if (fToCRadioButton.checked) {
            displayCelsiusTemp()
        } }
// fucntions for temp conversion
function displayCelsiusTemp () {
    let toFahrenheitEquation = Math.floor(((getTemp.value - 32) *5) /9)
    document.getElementById('temp-in-h1').innerHTML = toFahrenheitEquation
}

function displayfahrenheitTemp() {
    let toCelciusEquation = Math.floor(((getTemp.value) * 9/5) + 32)
    document.getElementById('temp-in-h1').innerHTML = toCelciusEquation
}

// function for clear button
function clearButton () {
    window.location.reload()
}

submitButton.addEventListener('click', workingRadioButtons)
clearButtonButton.addEventListener('click', clearButton)



