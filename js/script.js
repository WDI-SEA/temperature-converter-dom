
function convertToF(celsius) {
    parseInt(celsius)
    console.log(celsius)
    let fahrenheit = celsius * 9/5 + 32
    console.log(fahrenheit);
  }
function formsSubmit(event) {
    event.preventDefault()
    let temp = tempInput.value
    console.log(temp)
    convertToF(temp)
}
  
//https://medium.com/@DylanAttal/convert-celsius-to-fahrenheit-in-javascript-b6b76b47c4f0

// User puts in a value into the text field
const changeButton = document.getElementById('converter')
const tempInput = document.querySelector('.temp')
const form = document.querySelector('form')
// User clicks on button
form.addEventListener('submit', (formsSubmit))
// The page gets updated with the converted temperature value.
// Clicking a "Clear" button resets the text field