let fahrValue
let celsiusValue
let kelvinValue

const toCelsius = (temp, unit) => {
    if (unit === 'f') {
        return Math.floor((temp - 32) * 1.8)
    } else {
        return Math.floor(temp - 273)
    }
}

const toFahr = (temp, unit) => {
    if (unit === 'c') {
        return Math.floor(temp * 1.8 + 32)
    } else {
        return Math.floor(0 * 1.8 + 32)
    }
}

const toKelvin = (temp, unit) => {
    if (unit === 'f') {
        return Math.floor((temp - 32) * 1.8 + 273)
    } else {
        return Math.floor(parseFloat(temp) + 273)
    }
}

//convert user's input to other units
const convertTemp = (userInput, unit) => {
    switch (unit) {
        case 'k':
            kelvinValue = userInput
            fahrValue = toFahr(userInput, unit)
            celsiusValue = toCelsius(userInput, unit)
            break
        case 'c':
            celsiusValue = userInput
            fahrValue = toFahr(userInput, unit)
            kelvinValue = toKelvin(userInput, unit)
            break
        case 'f':
            fahrValue = userInput
            celsiusValue = toCelsius(userInput, unit)
            kelvinValue = toKelvin(userInput, unit)
    }
}

//grab radio value
const findUnit = () => {
    const unit = document.getElementsByName('unit')
    for (i = 0; i < unit.length; i++) {
        if (unit[i].checked) {
            return unit[i].value
        }
    }
}

const clearHandler = () => {
    //reset input field
    let inputField = document.getElementById('userInput')
    inputField.value = ""
}

const displayConversion = (usersUnit) => {
    //create a div
    const newDiv = document.createElement('div')
    //give it the class conversionDisplay
    newDiv.className += 'conversionDisplay'
    //insert the div into output div
    document.querySelector('form').append(newDiv)
    //create h2
    const h2 = document.createElement('h2')
    const div = document.querySelector('form').lastElementChild
    //set h2 innertext
    switch (usersUnit) {
        case 'c':
            h2.innerText = celsiusValue + "\u00B0C"
            break
        case 'f':
            h2.innerText = fahrValue + "\u00B0F"
            break
        case 'k':
            h2.innerText = kelvinValue + "\u00B0K"
            break
    }
    //insert h2 into new div
    div.appendChild(h2)
}

const clearDisplay = () => {
    //get last child of the form
    const input = document.querySelector('form')
    const lastChild = input.lastElementChild.className
    //if its the right class, delete it and it's sibling
    if (lastChild === 'conversionDisplay') {
        input.lastElementChild.remove()
        input.lastElementChild.remove()
    }
}

const submitHandler = () => {
    clearDisplay()
    //collect data from input
    const userInput = document.getElementById('userInput').value
    //collect input temperature unit
    const unit = findUnit()
    //convert to others
    convertTemp(userInput, unit)
    
    //display converted temps in new divs
    switch (unit) {
        case 'k':
            displayConversion('c')
            displayConversion('f')
            break
        case 'c':
            displayConversion('k')
            displayConversion('f')
            break
        case 'f':
            displayConversion('k')
            displayConversion('c')
            break
    }
    //clear input
    clearHandler()
}

//listen for click on submit
document.getElementById('submit').addEventListener('click', () => {
    submitHandler()
})

//listen for click on clear
document.getElementById('clear').addEventListener('click', () => {
    clearHandler()
    
})