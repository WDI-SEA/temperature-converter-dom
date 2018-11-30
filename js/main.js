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

document.addEventListener('DOMContentLoaded', function() {

  const updateConversion = function(temp, elem) {
    elem.value = temp;
  }

  const clearButton = document.querySelector('#clearButton');
  const formData = document.querySelector('#converterForm');

  // Reset Form
  clearButton.addEventListener('click', function() {
    
  });

  // Submit Form
  formData.addEventListener('submit', function(e) {
    //This will prevent from refreshing page
    e.preventDefault();

    // Get temperature and convert to float
    const originalTemp = parseFloat(formData.fromTemp.value);

    const toTempBox = formData.toTemp;
    
    // Get unit types to send to converstion function
    const fromUnitType = formData.fromUnit.value;
    const toUnitType = formData.toUnit.value;

    const convertedTemp = convertTemperature(originalTemp, fromUnitType, toUnitType);

    //+temp.fixed(2) keeps the decimals to 2 onlh if needed
    updateConversion(+convertedTemp.toFixed(2), toTempBox);

  });

});
