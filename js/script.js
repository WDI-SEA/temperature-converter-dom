
var converted = 0;
var inputSelector = document.getElementById("input-selector");
var outputSelector = document.getElementById("output-selector");
var inputNumber = document.getElementById("units");
var outputText =  document.getElementById('units2');
var buttonReset = document.getElementById('reset');
var buttonConvert = document.getElementById('convert');


function calculateTemperature (){

var typeTemp = inputSelector.value;
var conv =  outputSelector.value;
var units = parseInt(inputNumber.value);
console.log(typeof units)
console.log(typeTemp);
console.log(conv);
console.log(units);

switch (typeTemp || conv) {
  case "celsius":
    if (conv == "fahrenheit") {
      converted = units * (9 / 5) + 32;
    } else if (conv == "kelvin") {
      converted = units + 273.15;
    }else if(conv == "celsius"){
      converted = units;
    }
    break;
  case "fahrenheit":
    if (conv == "celsius") {
      converted = (units - 32) * (5 / 9);
    } else if (conv == "kelvin") {
      converted = ((units - 32) * (5 / 9)) + 273.15;
    }else if(conv == "fahrenheit"){
      converted = units;
    }
    break;
  case "kelvin":
    if (conv == "celsius") {
      converted = units - 273.15;
    } else if (conv == "fahrenheit") {
      converted = ((units - 273.15) * (9 / 5)) + 32;
    }else if(conv == "kelvin"){
      converted = units;
    }
    break;
  default:
  console.log("try again")

}

outputText.value = converted.toFixed(2) ;
console.log(converted);
}

function reset (){
  outputText.value = 0;
  inputNumber.value = 0;
  inputSelector.value = "";
  outputSelector.value = "";
}


inputSelector.addEventListener("change", calculateTemperature);
outputSelector.addEventListener("change",calculateTemperature);
buttonConvert.addEventListener("click",calculateTemperature);
buttonReset.addEventListener("click",reset);
