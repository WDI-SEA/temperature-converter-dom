var F_TEMP = "fahrenheit";
var C_TEMP = "celsius";

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM Loaded');

  var submitButton = document.getElementById("submit").addEventListener("click", getTempValue);
  var clearButton = document.getElementById("clear").addEventListener("click", clearForm);
});

function getTempValue(){
  var temp = document.getElementById("temp").value;

  if(temp){

    if(isNaN(temp)){
      clearForm();
      document.getElementById("error-msg").textContent = "The temperature must be a number";
    } else {
      //convert temperature
      if(document.getElementById("fahrenheit").checked){
        convertToCelsius(temp);
      } else {
        convertToFahrenheit(temp);
      }
    }

  } else { //otherwise it's empty do nothing
    clearForm();
    document.getElementById("error-msg").textContent = "The temperature field can't be empty";
  }
}

function convertToCelsius(fTemp){
  var convertedTemp = Math.floor((fTemp- 32) / 1.8);
  document.getElementById("result").innerHTML =  convertedTemp + " &deg;C";

  //change result background color
  changeResultBgColor(convertedTemp, C_TEMP);

}

function convertToFahrenheit(cTemp){
  var convertedTemp = Math.floor((cTemp  * 1.8) + 32);
  document.getElementById("result").innerHTML =  convertedTemp + " &deg;F";

  //change result background color
  changeResultBgColor(convertedTemp, F_TEMP);

}

function changeResultBgColor(temp, units){
  if(units === F_TEMP){
    if(temp <= 32){
      displayFreezingTemp();
    } else if(temp >= 85){
      displayScorchingTemp();
    } else {
      displayMildTemp();
    }
  }
  else {
    if(temp <= 0){
      displayFreezingTemp();
    } else if(temp >= 29){
      displayScorchingTemp();
    } else {
      displayMildTemp();
    }
  }
}

function clearForm(){
  //clear input
  document.getElementById("temp").value = "";
  //clear result
  document.getElementById("result").textContent = "---";
  document.getElementById("result").style.backgroundColor = "AliceBlue";
  document.getElementsByTagName("img")[0].className = "thermometer";
  //clear error message
  document.getElementById("error-msg").textContent = "Have a nice day"
}

function displayFreezingTemp(){
  document.getElementById("result").style.backgroundColor = "PowderBlue ";
  document.getElementsByTagName("img")[0].className = "freezing";
  document.getElementById("error-msg").textContent = "Brr it's cold!"
}

function displayScorchingTemp() {
  document.getElementById("result").style.backgroundColor = "Crimson ";
  document.getElementsByTagName("img")[0].className = "scorching";
  document.getElementById("error-msg").textContent = "Ouch it's hot!"
}

function displayMildTemp(){
  document.getElementById("result").style.backgroundColor = "AliceBlue";
  document.getElementsByTagName("img")[0].className = "mild";
  document.getElementById("error-msg").textContent = "Have a nice day"
}
