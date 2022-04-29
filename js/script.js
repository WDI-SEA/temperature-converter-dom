const userInput = document.querySelector("#userInput");
const celsiusRadio = document.querySelector("#celsius");
const kelvinRadio = document.querySelector("#kelvin");
const theResult = document.querySelector("#result");
const span = document.querySelector("#theTemp");
const clearBtn = document.querySelector("#clear");
const tempBG = document.querySelector("#tempBG");

const convert = () => {
  if (celsiusRadio.checked) {
    convertToC(userInput.value);
  }
  if (kelvinRadio.checked) {
    convertToK(userInput.value);
  }
  hotWarmCold(userInput.value);
};

const convertToC = (temp) => {
  let result = Math.round((temp - 32) * 0.5559);
  theResult.innerText = result;
  span.innerText = "℃";
  return result;
};

const convertToK = (temp) => {
  let result = Math.round((temp - 32) * 0.5559 + 273.15);
  theResult.innerText = result;
  span.innerText = "K";
  return result;
};

const hotWarmCold = (temp) => {
  if (temp <= 50) {
    tempBG.classList.remove("normal", "hot");
    tempBG.classList.add("cold");
  }
  if (temp > 50 && temp < 75) {
    tempBG.classList.remove("cold", "hot");
    tempBG.classList.add("normal");
  }
  if (temp >= 75) {
    tempBG.classList.remove("normal", "cold");
    tempBG.classList.add("hot");
  }
};

document.querySelector("#submitBtn").addEventListener("click", convert);
document.querySelector("#clear").addEventListener("click", function () {
  userInput.value = "";
});
