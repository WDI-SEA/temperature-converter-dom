//two functions that convert celcius to fahrenheit and vice versa, to be called later
const celciusToFahrenheit = (inputTemp) => {
    return inputTemp * 9 / 5 + 32
}

const fahrenheitToCelcius = (inputTemp) => {
    return (inputTemp - 32) * 5 / 9
}
// detect whether the button was hit
document.getElementById('submit').addEventListener('click', () => {
    console.log('you clicked the submit button')
// pull in value from the input field
    const inputTemp = document.getElementById('input-temp').value
    console.log('the temp that was entered:', inputTemp)
// pull in radio number
    const celciusCheck = document.getElementById('celc').checked;
    const fahrenheitCheck = document.getElementById('fahr').checked;
    console.log('Celcius is:', celciusCheck)
    console.log('Fahrenheit is:', fahrenheitCheck)
// run relevant function using if/else
// based on the radio number value
// and store the result
    let result
    let resultP
    if (celciusCheck === true) {
        result = celciusToFahrenheit(inputTemp)
        resultP = document.createElement('p')
        resultP.textContent = `${result} Fahrenheit`
    } else if (fahrenheitCheck === true) {
        result = fahrenheitToCelcius(inputTemp)
        resultP = document.createElement('p')
        resultP.textContent = `${result} Celcius`
    }
    const resultDiv = document.getElementById('result-field')
    resultDiv.innerHTML = ''
    resultDiv.appendChild(resultP)
})
// clear button
document.getElementById('clear').addEventListener('click', () => {
    const resultDiv = document.getElementById('result-field')
    resultDiv.innerHTML = ''
    document.getElementById('input-temp').value = ''
})
