const tempInput = document.querySelector("#tempInput");
const celciusRadio = document.querySelector("#celcius");
const farenheitRadio = document.querySelector("#farenheit");

const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");

let selectedUnit = "c";

const handleUnitChange = (event) => {
  const radio = event.target;
  selectedUnit = radio.value;
};

celciusRadio.addEventListener("input", handleUnitChange);
farenheitRadio.addEventListener("input", handleUnitChange);

const handleSubmit = () => {
  const inputValue = tempInput.value;
  let convertedValue;
  if (!selectedUnit) return;

  // From F to C
  if (selectedUnit === "f") {
    convertedValue = ((inputValue - 32) * 5) / 9;
  }

  if (selectedUnit === "c") {
    convertedValue = (inputValue * 9) / 5 + 32;
  }

  const formattedValue = convertedValue.toFixed();

  updateOutput(formattedValue);
};

submitBtn.addEventListener("click", handleSubmit);

const celciusToHeatString = (temp) => {
  if (temp < 12) {
    return "cold";
  }

  if (temp < 24) {
    return "temperate";
  }

  return "hot";
};

const farenheitToHeatString = (temp) => {
  if (temp < 54) {
    return "cold";
  }

  if (temp < 75) {
    return "temperate";
  }

  return "hot";
};

const updateOutput = (newValue) => {
  const outputBox = document.querySelector(".output");
  const outputVal = document.querySelector("#output-val");
  const outputUnit = document.querySelector("#output-unit");

  const unitToShow = selectedUnit === "c" ? "F" : "C";

  const heatColorMap = {
    cold: "#26219f",
    temperate: "#976227",
    hot: "#b81515",
  };

  const heatString =
    unitToShow === "F"
      ? farenheitToHeatString(newValue)
      : celciusToHeatString(newValue);
  const heatColor = heatColorMap[heatString];

  console.log(heatColor);

  outputBox.style.backgroundColor = heatColor;
  outputBox.style.color = "white";

  outputVal.innerText = newValue;
  outputUnit.innerText = unitToShow;
};

clearBtn.addEventListener("click", () => {
  tempInput.value = "";
  const outputBox = document.querySelector(".output");
  outputBox.style.backgroundColor = "transparent";
  outputBox.style.color = "transparent";
});
