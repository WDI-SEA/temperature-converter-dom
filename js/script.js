var input = document.getElementById('form');
var radioF = input.tempInF;
var radioC = input.tempInC;
radioF.addEventListener('click', radioSelector(radioF));
radioC.addEventListener('click', radioSelector(radioC));
function radioSelector(option) {
  if (option.checked === false) {
    option.checked = true;
  }
  return option;

}
function findComfortLevel() {
    var comfort = "";
    if (radioC.checked === true) {
      if (convertTemp() > 89) {
        comfort = "hot";
      } else if (convertTemp() < 50) {
        comfort = "cold";
      } else {
        comfort = "warm";
      }
    } else {
      if (convertTemp() > 31) {
          comfort = "hot";
      } else if (convertTemp() < 10) {
          comfort = "cold";
      } else {
          comfort = "warm";
      }
    }
    return comfort;
  }

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function convertTemp() {
  var currentValue = input.tempToConvert.value;
  if (radioF.checked === true) {
    // input.tempInF.checked = false;
    currentValue = (currentValue - 32) / 1.8;

  } else {
    // input.tempInC.checked = false;
    currentValue = (currentValue * 1.8) + 32;
  }
  return round(currentValue, 1);
}

function drawOutput() {
  $("#colorBox").find("img").remove();
  var thermometer = document.createElement('img');
  if (radioC.checked === true) {
    document.getElementById("output").innerHTML = convertTemp() + "˚F";
  } else {
    document.getElementById("output").innerHTML = convertTemp() + "˚C";
  }
  if (findComfortLevel() == "hot") {
    thermometer.setAttribute("src", "img/thermometer_hot.png");
    document.getElementById("colorBox").appendChild(thermometer);
    document.getElementById('body').style.backgroundImage = "url(img/desert.jpg)"; // set background as desert and display hot thermometer
  } else if (findComfortLevel() == "cold") {
    thermometer.setAttribute("src", "img/thermometer_cold.png");
    document.getElementById("colorBox").appendChild(thermometer);
    document.getElementById('body').style.backgroundImage = "url(img/winter.jpg)";// set background as winter and display cold thermometer
  } else {
    thermometer.setAttribute("src", "img/thermometer_warm.png");
    document.getElementById("colorBox").appendChild(thermometer);
    document.getElementById('body').style.backgroundImage = "url(img/tropical-island-beach.jpg)";// set background as beach and display warm thermometer

  }

}
