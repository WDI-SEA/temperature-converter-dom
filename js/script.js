const inputFahrenheitRadioButton = document.querySelector("#input-F-button");
const outputFahrenheitRadioButton = document.querySelector("#output-F-button");
const inputCelsiusRadioButton = document.querySelector("#input-C-button");
const outputCelsiusRadioButton = document.querySelector("#output-C-button");
const inputKelvinRadioButton = document.querySelector("#input-K-button");
const outputKelvinRadioButton = document.querySelector("#output-K-button");
const userInput = document.querySelector("#txt-input-temp");
const ans = document.querySelector("#return");
const inputSpan = document.querySelector("#answer");

// function that takes a fahrenheit number and outputs celsius
function fahrenheitToCelsius(input) {
  let tempC;
  tempC = (input - 32) * (5 / 9);
  inputSpan.innerText = tempC;
  return tempC;
}

function fahrenheitToKelvin(input) {
  let tempCK;
  tempK = (input - 32) * (5 / 9) + 273.15;
  inputSpan.innerText = tempK;
  return tempK;
}

function CelsiusToFahrenheit(input) {
  let tempF;
  tempF = input * (9 / 5) + 32;
  inputSpan.innerText = tempF;
  return tempF;
}

function CelsiusToKelvin(input) {
  let tempK;
  tempK = input + 273.15;
  inputSpan.innerText = tempK;
  return tempK;
}

function KelvinToCelsius(input) {
  let tempC;
  tempC = input - 273.15;
  inputSpan.innerText = tempC;
  return tempC;
}

function KelvinToFahrenheit(input) {
  let tempF;
  tempF = (input - 273.15) * (9 / 5) + 32;
  inputSpan.innerText = tempF;
  return tempF;
}

function convert() {
  let num = parseInt(userInput.value);
  if (inputFahrenheitRadioButton.checked) {
    if (outputFahrenheitRadioButton.checked) {
    } else if (outputCelsiusRadioButton.checked) {
      fahrenheitToCelsius(userInput.value);
    } else if (outputKelvinRadioButton.checked) {
      fahrenheitToKelvin(userInput.value);
    }
  } else if (inputCelsiusRadioButton.checked) {
    if (outputFahrenheitRadioButton.checked) {
      CelsiusToFahrenheit(userInput.value);
    } else if (outputCelsiusRadioButton.checked) {
    } else if (outputKelvinRadioButton.checked) {
      CelsiusToKelvin(num);
    }
  } else if (inputKelvinRadioButton.checked) {
    if (outputFahrenheitRadioButton.checked) {
      KelvinToFahrenheit(userInput.value);
    } else if (outputCelsiusRadioButton.checked) {
      KelvinToCelsius(userInput.value);
    } else if (outputKelvinRadioButton.checked) {
    }
  }
}

console.log(userInput.value);
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", convert);
