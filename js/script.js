const getTemp = document.getElementById('temp-input').value;

const fToCRadioButton = document.getElementById('fahrenheitButton')
const cToFRadioButton = document.getElementById('CelciusButton')

function workingRadioButtons () {
        if (cToFRadioButton.checked) {
            displayCelsiusTemp()
        } else if (fToCRadioButton.checked) {
            displayfahrenheitTemp()
        } }

function displayCelsiusTemp () {
    let toCelciusEquation = Math.floor(getTemp * 9/5 + 32)
    document.getElementById('temp-in-h1').innerHTML = toCelciusEquation
}

function displayfahrenheitTemp() {
    let toFahrenheitEquation = Math.floor(getTemp - 32 *5 /9)
    document.getElementById('temp-in-h1').innerHTML = toFahrenheitEquation
}

submitButton.addEventListener('click', workingRadioButtons)