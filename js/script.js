// get the input element, the temperature buttons, and the convert button
const input = document.querySelector("#temperature");
const radials = document.querySelectorAll(".temp");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");

// add event listener to the convert button
convertBtn.addEventListener("click", () => {
  let unit;

  // loop to see which radial is checked
  for (let i = 0; i < radials.length; i++) {
    if (radials[i].checked) {
      unit = radials[i].value;
      break;
    }
  }

  // get the temperature value from the input
  const value = parseInt(input.value);

  // check if the value is a valid number
  if (isNaN(value)) {
    alert("Please enter a valid number for the temperature.");
    return;
  }

  // convert the temperature to the other two temps
  let fahrenheit, celsius, kelvin;

  let celsiusResult, fahrenheitResult, kelvinResult;

  // display the converted temperature
  if (unit === "Celsius") {
    celsius = value;
    fahrenheit = (value * 9) / 5 + 32;
    kelvin = value + 273.15;
    fahrenheitResult = `${fahrenheit.toFixed(2)}°F`;
    kelvinResult = `${kelvin.toFixed(2)}°K`;
    celsiusResult = "";
  } else if (unit === "Fahrenheit") {
    fahrenheit = value;
    celsius = ((value - 32) * 5) / 9;
    kelvin = celsius + 273.15;
    celsiusResult = `${celsius.toFixed(2)}°C`;
    kelvinResult = `${kelvin.toFixed(2)}°K`;
    fahrenheitResult = "";
  } else if (unit === "Kelvin") {
    kelvin = value;
    celsius = value - 273.15;
    fahrenheit = (value - 273.15) * 1.8 + 32;
    fahrenheitResult = `${fahrenheit.toFixed(2)}°F`;
    celsiusResult = `${celsius.toFixed(2)}°C`;
    kelvinResult = "";
  } else {
    celsiusResult = "WE NEED TEMPERATURE";
    fahrenheitResult = "";
    kelvinResult = "";
  }

  // display the converted temperatures on the screen
  document.querySelector("#celsius").innerHTML = celsiusResult;
  document.querySelector("#fahrenheit").innerHTML = fahrenheitResult;
  document.querySelector("#kelvin").innerHTML = kelvinResult;
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  document.querySelector("#celsius").innerHTML = "";
  document.querySelector("#fahrenheit").innerHTML = "";
  document.querySelector("#kelvin").innerHTML = "";
  const radio = document.querySelector("input[type=radio]:checked");
  radio.checked = false;
});