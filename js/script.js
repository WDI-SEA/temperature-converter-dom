
let submitButton = document.getElementById('submit-button')
let clearButton = document.getElementById('clear-button')
let outputResult = document.getElementById('output-value')
let inputValues = document.getElementById('input-temps')


submitButton.addEventListener('click', function() {
  let fRadio = document.getElementById('fahr').checked  // checking if the radio button is checked
  let cRadio = document.getElementById('cel').checked
  if (fRadio) {
    outputResult.innerText = (inputValues.value - 32)*5/9 + ' °C'; // f--> c
  } else if (cRadio) {
    outputResult.innerText = (inputValues.value / (5/9) +32) + ' °F';  // c--> f
  }
})


// clears the # inside the input box

clearButton.addEventListener('click', function() {
  inputValues.value= ' '
})


