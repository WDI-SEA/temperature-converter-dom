// get the input element, the temperature buttons, and the convert button
const input = document.querySelector('#temperature');
const radials = document.querySelectorAll('.temp');
const convertBtn = document.querySelector('#convert-btn');

// add event listener to the convert button
convertBtn.addEventListener('click', () => {

let unit

// loop to see which radial is checked
for (let i=0; i<radials.length; i++) {
    if (radials[i].checked) {
        unit=radials[i].value
        break;
    }
}

  // get the temperature value from the input
  const value = parseFloat(input.value);

  // check if the value is a valid number
  if (isNaN(value)) {
    alert('Please enter a valid number for the temperature.');
    return;
  }

  // convert the temperature to the other two scales
  let fahrenheit, celsius, kelvin;
  fahrenheit = value * 9/5 + 32;
  celsius = (value - 32) * 5/9;
  kelvin = celsius + 273.15;

  // display the converted temperatures

  let displayValue, displayUnit;
  switch (unit) {
    case 'fahrenheit':
      displayValue = fahrenheit.toFixed(2);
      displayUnit = '&deg;F';
      break;
    case 'celsius':
      displayValue = celsius.toFixed(2);
      displayUnit = '&deg;C';
      break;
    case 'kelvin':
      displayValue = kelvin.toFixed(2);
      displayUnit = ' K';
      break;
    default:
      displayValue = 'N/A';
      displayUnit = '';
  }
  const temperatureDisplay = `${displayValue}${displayUnit}`;
  document.querySelector('#temperature-display').innerHTML = temperatureDisplay;

});

//   const fahrenheitDisplay = `${fahrenheit.toFixed(2)}&deg;F`;
//   const celsiusDisplay = `${celsius.toFixed(2)}&deg;C`;
//   const kelvinDisplay = `${kelvin.toFixed(2)} K`;
//   document.querySelector('#fahrenheit').innerHTML = fahrenheitDisplay;
//   document.querySelector('#celsius').innerHTML = celsiusDisplay;
//   document.querySelector('#kelvin').innerHTML = kelvinDisplay;
});