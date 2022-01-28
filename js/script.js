function tempConvert() {
  if (fButton.checked) {
    const newTemp = (userTemp.valueAsNumber - 32) * (5 / 9);
    convertedTemp.innerText = newTemp + "°C";
  } else if (cButton.checked) {
    const newTemp = (userTemp.valueAsNumber * 9) / 5 + 32;
    convertedTemp.innerText = newTemp + "°F";
  }
}

const userTemp = document.getElementById("usertemp"); //.value to get value from field

const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

const fButton = document.getElementById("°F");
const cButton = document.getElementById("°C");

const output = document.querySelector(".newtemp-container");

const convertedTemp = document.getElementById("convertedtemp");
// wouldn't work with .innerText at end

function clearField() {
  userTemp.value = "";
  convertedTemp.innerText = "";
}

clearButton.addEventListener("click", clearField);

// submitButton.addEventListener("click", tempConvert(userTemp.valueAsNumber));

// fButton.addEventListener("click", function () {
//   console.log("F-button clicked.");
//   console.log(fButton.checked);
// });

submitButton.addEventListener("click", tempConvert);
