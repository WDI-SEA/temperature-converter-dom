// DOM selectors
const form = document.querySelector('#form')
const input = document.querySelector(`#temperature`)
const display = document.querySelector('#display')
const clear = document.querySelector('#clear')
const f = document.querySelector('#farenheit')
const c = document.querySelector('#celsius')
const k = document.querySelector('#kelvin')

//Event listeners
form.addEventListener('submit', function(e) {
    
    const result = document.createElement('p')
    result.textContent
    result.textContent = farenheitToCelsius(input.value)
    display.appendChild(result) 
    e.preventDefault() 
})

clear.addEventListener('click', function(e){
    location.reload()
})


//helper functions

function selector() {
    c.addEventListener('click', (e) => {
        c.setAttribute('selected', true)
    })
}
selector()


function farenheitToCelsius(userInput) {
    //(32°F − 32) × 5/9 = 0°C
    return `${userInput}degrees F = ${(userInput - 32) * (5/9)} C`
    
}

function farenheitToKelvin(userInput) {
    return `${userInput}degrees F = ${(userInput - 32) * (5/9) + 273.15}`

}


function clearButton() {

}