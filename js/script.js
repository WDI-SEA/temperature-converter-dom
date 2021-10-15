const temperature = document.getElementById('temp')
const conversion = document.getElementById('answer')

function convTemp() {

    function fToC (degrees) {
        const celc = Math.round((degrees - 32) * (5/9))
        return celc
    }
    
    function cToF (degrees) {
        const fahr = Math.round((degrees * (9/5)) + 32)
        return fahr
    }

    if (document.getElementById('fahrenheit').checked) {
        convTemp = fToC(temperature)
        document.getElementById('result').innerHTML = result + ' °F'
    } else {
        convTemp = cToF(temperature)
        document.getElementById('result').innerHTML = result + ' °C'
    }
}

document.getElementById('submit').addEventListener('click', convTemp)
document.getElementById('clear').addEventListener('click', clearButton)

// const temperature = document.getElementById('temp')
// const conversion = document.getElementById('answer')

// function convTemp() {
//     if (document.getElementById('fahrenheit').checked) {
//         conversion.innerHTML = fToC(temperature) + ' °C'
//     } else {
//         conversion.innerHTML = cToF(temperature) + ' °F'
//     }
// }

// function fToC (temperature) {
//     const celc = Math.round((temperature - 32) * (5/9))
//     return celc
// }

// function cToF (temperature) {
//     const fahr = Math.round((temperature * (9/5)) + 32)
//     return fahr
// }

// const inputTemp = document.getElementById('temp')
// const emptyInput = document.getElementById('clear')

// function clearButton() {
//     emptyInput.textContent = ''
//     inputTemp.appendChild(emptyInput)
// }

// document.body.appendChild(inputTemp)