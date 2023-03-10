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

console.log(unit)
  // get the temperature value from the input
  const value = parseFloat(input.value);

  // check if the value is a valid number
  if (isNaN(value)) {
    alert('Please enter a valid number for the temperature.');
    return;
  }

  // convert the temperature to the other two temps
  let fahrenheit, celsius, kelvin;
  fahrenheit = value * 9/5 + 32;
  celsius = (value - 32) * 5/9;
  kelvin = celsius + 273.15;

// display the converted temperature
let displayUnit, displayUnit2;
if (unit === "Celsius") {
    displayUnit = `${fahrenheit.toFixed(2)};F`
    displayUnit2 = `${kelvin.toFixed(2)};K`
} else if (unit === "Fahrenheit") {
    displayUnit = `${celsius.toFixed(2)};C`
    displayUnit2 = `${kelvin.toFixed(2)};K`    
} else if (unit === "Kelvin") {
    displayUnit = `${fahrenheit.toFixed(2)};F`
    displayUnit2 = `${celsius.toFixed(2)};C`      
} else {
    displayUnit = "undefined"
    displayUnit2 = "undefined"
}

// display the converted temperatures on the screen
document.querySelector('#celsius').innerHTML = `Celsius: ${displayUnit}`;
document.querySelector('#fahrenheit').innerHTML = `Fahrenheit: ${displayUnit}`;
document.querySelector('#kelvin').innerHTML = `Kelvin: ${displayUnit}`;
});