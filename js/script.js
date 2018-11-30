document.addEventListener('DOMContentLoaded', function() {
  console.log('dom content has loaded');
  //   var myButton = document.querySelector('#submitBtn');
  var myForm = document.querySelector('#myForm');

  var result = document.querySelector('#result');

  myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    tempToConvert = Number(document.querySelector('#temperature').value);
    if (document.querySelector('#fromF').checked) {
      isNaN(tempToConvert)
        ? alert('Please use a number!')
        : (convertedTemp = fromFtoC(tempToConvert).toFixed(1));
      result.innerHTML = convertedTemp + '&deg; F';
      if (Number(convertedTemp) <= 32) {
        turnBlue();
      } else if (Number(convertedTemp >= 91.4)) {
        turnRed();
      } else {
        turnGreen();
      }
    } else {
      //
      isNaN(tempToConvert)
        ? alert('Please use a number!')
        : (convertedTemp = fromCtoF(tempToConvert).toFixed(1));
      result.innerHTML = convertedTemp + '&deg; C';
      if (Number(convertedTemp) <= 0) {
        turnBlue();
      } else if (Number(convertedTemp >= 33)) {
        turnRed();
      } else {
        turnGreen();
      }
    }
  });
});

var fromFtoC = tempInF => tempInF * 1.8 + 32;

var fromCtoF = tempInC => ((tempInC - 32) * 5) / 9;

let turnBlue = function() {
  document.querySelector('body').className = 'moon-gray bg-dark-blue';
};
let turnRed = function() {
  document.querySelector('body').className = 'yellow bg-dark-red';
};
let turnGreen = function() {
  document.querySelector('body').className = 'dark-gray bg-washed-green';
};
