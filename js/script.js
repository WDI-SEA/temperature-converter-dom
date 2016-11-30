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


function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function convertTemp() {
    var currentValue = input.tempToConvert.value;
    if (radioF.checked === true) {
        // input.tempInF.checked = false;
        currentValue = (currentValue - 32)/1.8;
    } else {
        // input.tempInC.checked = false;
        currentValue = (currentValue * 1.8) + 32;
    }
    return round(currentValue,1);
}

function drawOutput() {
        if (radioC.checked === true) {
            if (convertTemp() > 89) {
                document.getElementById('colorBox').style.backgroundColor = "red";
            } else if (convertTemp() < 50) {
                document.getElementById('colorBox').style.backgroundColor = "blue";
            } else {
                document.getElementById('colorBox').style.backgroundColor = "goldenrod";
            }
            document.getElementById("output").innerHTML = convertTemp() + "˚F";
        } else {
            if (convertTemp() > 31) {
                document.getElementById('colorBox').style.backgroundColor = "red";
            } else if (convertTemp() < 10) {
                document.getElementById('colorBox').style.backgroundColor = "blue";
            } else {
                document.getElementById('colorBox').style.backgroundColor = "goldenrod";
            }
            document.getElementById("output").innerHTML = convertTemp() + "˚C";
        }
    }
