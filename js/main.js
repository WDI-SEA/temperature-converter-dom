// Converts to/from C,F,K,R scales
const convertTemperature = function(fromTemp, fromUnit, toUnit) {
  switch(fromUnit) {
    case 'c':
      switch(toUnit) {
        case 'c':
          return fromTemp;
        case 'f':
          return fromTemp * 1.8 + 32;
        case 'k':
          return fromTemp + 273.15;
        case 'r':
          return (fromTemp + 273.15) * 1.8;
        default:
          return 0;
      }
      break;
    case 'f':
      switch(toUnit) {
        case 'c':
          return (fromTemp - 32) * (5 / 9);
        case 'f':
          return fromTemp;
        case 'k':
          return (fromTemp + 459.67) * (5 / 9);
        case 'r':
          return fromTemp + 459.67;
        default:
          return 0;
      }
      break;
    case 'k':
      switch(toUnit) {
        case 'c':
          return fromTemp - 273.15;
        case 'f':
          return fromTemp * 1.8 - 459.67;
        case 'k':
          return fromTemp;
        case 'r':
          return fromTemp * 1.8;
        default:
          return 0;
      }
      break;
    case 'r':
      switch(toUnit) {
        case 'c':
          return (fromTemp - 491.67) * (5 / 9);
        case 'f':
          return fromTemp - 459.67;
        case 'k':
          return fromTemp * (5 / 9);
        case 'r':
          return fromTemp;
        default:
          return 0;
      }
    default:
      return 0;
  }
};

// Main function for form to run when submitted
const submitForm = function(evt) {
  //This will prevent from refreshing page
  evt.preventDefault();

  // Get temperature and convert to float
  // Will need to be updated since form only sends Int
  const originalTemp = parseFloat(evt.target.fromTemp.value);

  const toTempBox = evt.target.toTemp;

  // Get unit types to send to conversion function
  const fromUnitType = evt.target.fromUnit.value;
  const toUnitType = evt.target.toUnit.value;

  const convertedTemp = convertTemperature(originalTemp, fromUnitType, toUnitType);

  //+temp.toFixed(2) keeps the decimals to 2 only if needed
  toTempBox.value = +convertedTemp.toFixed(2);

};

document.addEventListener('DOMContentLoaded', function() {

  const formData = document.querySelector('#converterForm');

  formData.addEventListener('submit', submitForm);

});
