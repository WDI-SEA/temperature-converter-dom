// Converts to/from C,F,K,R scales
const convertTemperature = function (fromTemp, fromUnit, toUnit) {
  switch (true) {
    // CELSIUS -->
    case (fromUnit === 'c' && toUnit === 'c'):
      return fromTemp;
    case (fromUnit === 'c' && toUnit === 'f'):
      return fromTemp * 1.8 + 32;
    case (fromUnit === 'c' && toUnit === 'k'):
      return fromTemp + 273.15;
    case (fromUnit === 'c' && toUnit === 'r'):
      return (fromTemp + 273.15) * 1.8;
    // FAHRENHEIT -->
    case (fromUnit === 'f' && toUnit === 'c'):
      return (fromTemp - 32) * (5 / 9);
    case (fromUnit === 'f' && toUnit === 'f'):
      return fromTemp;
    case (fromUnit === 'f' && toUnit === 'k'):
      return (fromTemp + 459.67) * (5 / 9);
    case (fromUnit === 'f' && toUnit === 'r'):
      return fromTemp + 459.67;
    // KELVIN -->
    case (fromUnit === 'k' && toUnit === 'c'):
      return fromTemp - 273.15;
    case (fromUnit === 'k' && toUnit === 'f'):
      return fromTemp * 1.8 - 459.67;
    case (fromUnit === 'k' && toUnit === 'k'):
      return fromTemp;
    case (fromUnit === 'k' && toUnit === 'r'):
      return fromTemp * 1.8;
    // RANKINE -->
    case (fromUnit === 'r' && toUnit === 'c'):
      return (fromTemp - 491.67) * (5 / 9);
    case (fromUnit === 'r' && toUnit === 'f'):
      return fromTemp - 459.67;
    case (fromUnit === 'r' && toUnit === 'k'):
      return fromTemp * (5 / 9);
    case (fromUnit === 'r' && toUnit === 'r'):
      return fromTemp;
    default:
      return 0;
  }
};

// Main function for form to run when submitted
const submitForm = function (evt) {
  // This will prevent from refreshing page
  evt.preventDefault();

  // Get temperature and convert to float
  // Will need to be updated since form only sends Int
  const originalTemp = parseFloat(evt.target.fromTemp.value);

  const toTempBox = evt.target.toTemp;

  // Get unit types to send to conversion function
  const fromUnitType = evt.target.fromUnit.value;
  const toUnitType = evt.target.toUnit.value;

  const convertedTemp = convertTemperature(originalTemp, fromUnitType, toUnitType);

  // +temp.toFixed(2) keeps the decimals to 2 only if needed
  toTempBox.value = +convertedTemp.toFixed(2);
};

document.addEventListener('DOMContentLoaded', () => {
  const formData = document.querySelector('#converterForm');

  formData.addEventListener('submit', submitForm);
});
