// Create the variables needed
let temperature = 0;
let celsiusButton = document.getElementById("convertToC");
let kelvinButton = document.getElementById("convertToK");
let temperatureDisplay = document.getElementById("temperature");
let userNumber = document.getElementById("amount");
 


// Functions and there on click events


const convertToC = () => {
  temperature = Math.floor((parseInt(userNumber.value) - 32) * (5/9));
  temperatureDisplay.innerText = `${temperature}°C`;
  if (temperature < 0) {
    temperatureDisplay.style.color = "blue";
  } else if (temperature > 45) {
    temperatureDisplay.style.color = "red";
  } else {
    temperatureDisplay.style.color = 'white';
  }
}

const convertToK = () => {
  temperature = Math.floor((parseInt(userNumber.value) + 459.67) * (5/9));
  temperatureDisplay.innerText = `${temperature}°K`;
  if (temperature < 274) {
    temperatureDisplay.style.color = "blue";
  } else if (temperature > 321) {
    temperatureDisplay.style.color = "red";
  } else {
    temperatureDisplay.style.color = 'white';
  }
}

celsiusButton.addEventListener("click", convertToC);
kelvinButton.addEventListener("click", convertToK);