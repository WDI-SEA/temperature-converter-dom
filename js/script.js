document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  // Prevents form from reloading page
  conversionForm.addEventListener('submit', function(event) {
    console.log('preventing default');
    event.preventDefault();
  });

  reset.addEventListener('click', executeReset);
  // clears the display of the converted temp; input tempto convert automatically
  // clears with the reset button
  function executeReset() {
    console.log('executing reset');
    display.textContent = '';
  }

  submit.addEventListener('click', conversion);
  // converts temp based on radio buttons
  function conversion() {
    var temp2ConvNum = parseInt(temp2Convert.value);
    if (document.getElementById('c2f').checked) {
      convertedTemp = temp2ConvNum * 9 / 5 + 32;
      display.textContent = convertedTemp.toFixed(2) + ' °F';
    }
    if (document.getElementById('f2c').checked) {
      convertedTemp = (temp2ConvNum - 32) * 5 / 9;
      display.textContent = convertedTemp.toFixed(2) + ' °C';
    }
    comfortLevel();
  }
  // comfort level is the basis for the background changing color
  function comfortLevel() {
    if (document.getElementById('c2f').checked) {
      if (convertedTemp > 89) {
        comfort = 'hot';
      } else if (convertedTemp < 50) {
        comfort = 'cold';
      } else {
        comfort = 'warm';
      }
    } else {
      if (convertedTemp > 30) {
        comfort = 'hot';
      } else if (convertedTemp < 10) {
        comfort = 'cold';
      } else {
        comfort = 'warm';
      }
    }
    changeBackgroundColor();
  }
  // background of display changes based if it's hot or cold
  function changeBackgroundColor() {
    if (comfort == 'hot') {
      document.getElementById('display').style.backgroundColor = 'red';
    } else if (comfort == 'cold') {
      document.getElementById('display').style.backgroundColor = 'blue';
    } else {
      document.getElementById('display').style.backgroundColor = 'gray';
    }
  }
});
