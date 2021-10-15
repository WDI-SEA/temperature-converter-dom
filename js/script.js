const getTemp = document.getElementById('temp-input').value;

const fToCRadioButton = document.getElementById('fahrenheitButton')
const cToFRadioButton = document.getElementById('CelciusButton')

function workingRadioButtons () {
        if (cToFRadioButton.checked) {
            displayfahrenheitTemp()
        } else if (fToCRadioButton.checked) {
            displayCelsiusTemp()
        } }

function displayCelsiusTemp () {
    let toFahrenheitEquation = Math.floor(((getTemp - 32) *5) /9)
    document.getElementById('temp-in-h1').innerHTML = toFahrenheitEquation
}

function displayfahrenheitTemp() {
    let toCelciusEquation = Math.floor(((getTemp) * 9/5) + 32)
    document.getElementById('temp-in-h1').innerHTML = toCelciusEquation
}

function clear() {
    document.getElementById("temp-input").value = "";
    document.getElementById("clearButton")[0].innerHTML = "";
    
    
submitButton.addEventListener('click', workingRadioButtons)
clearButton.addEventListener('click', clear)



