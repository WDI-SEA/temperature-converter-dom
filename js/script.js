// import elements using DOM & save them to variables
// access the clear button, radio button, clear, submit
const textBoxInput = document.getElementById('temp')
console.log(textBoxInput)

const radioF = document.getElementById('Fahrenheit')
console.log(radioF)

const radioC = document.getElementById('Celsius')
console.log(radioC)

const submit = document.getElementById('sub')
console.log(submit)

const reset = document.getElementById('clear')
console.log(reset)

const convertTemp = document.getElementById('outputTemp')
console.log(convertTemp)





function tempConvert(temp, units) {
    let result = 0
    switch(units) {
        case "Fahrenheit":
            result = (temp - 32) * (5/9)
          break;
        case "Celsius":
            result = temp * (9/5) + 32
          break;
        default:
            result = 'Invalid unit!'
          break;
      }
      return result
}

console.log(tempConvert(93, "Fahrenheit"))

// submitButton.addEventListener('click', workingRadioButtons)

// document.getElementById("sub").addEventListener("click", function(tempConvert)