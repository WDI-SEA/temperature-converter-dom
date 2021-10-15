//We must take the input once you press convert to convert it and display the converted value.
//Get the Event Target i.e. the Convert Button
const convertButton = document.getElementById('submitButton')

//Add an event handler - i.e. a callback function to do the conversion
const convertFunction = () => {
    const inputVal = document.getElementById('inputField').value
    const celsius = Math.floor((inputVal - 32) * 5/9)
    const h1Tag = document.createElement('h1')
    h1Tag.id = 'displayH1'
    h1Tag.textContent = `That is ${celsius} degrees Celsius.`
    document.body.appendChild(h1Tag)
}

//Add an event listener to our event target that will listen for a click and invoke a callback function
convertButton.addEventListener('click', convertFunction)


//Get the Event Target for the Clear Button
const clearButton = document.getElementById('clearButton')

//Add an event handler to clear the page
const clearFunction = () => {
    const inputVal = document.getElementById('inputField')
    inputVal.value = ''
    const h1Tag = document.getElementById('displayH1')
    document.body.removeChild(h1Tag)
}

//Add an event listener to the clear button
clearButton.addEventListener('click', clearFunction)