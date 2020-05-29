let convertedTemperature;

function convertTemperature() {
  let radioF = document.getElementById("F");
  let radioC = document.getElementById("C");

  if (radioF.checked == true) {
    toFahrenheit();
  } else if (radioC.checked == true) {
    toCelsius();
  } else {
    console.log("You must select C or F");
  }

  clearForm();
}

function clearForm() {
  setTimeout(function () {
    document.getElementById("temp-form").reset();
  }, 5000);
}

function toCelsius() {
  event.preventDefault();
  // Get the temperature value input from user
  let tempToBeConverted = document.getElementById("temperature").value;
  // Convert temperature to celsius
  convertedTemperature = Math.round(((tempToBeConverted - 32) * 5) / 9);
  // Append result to to the result div
  document.getElementById("result-div").innerHTML =
    "<p>The temperature is " +
    convertedTemperature +
    String.fromCharCode(176) +
    "  C</p>";
  // Clear result div after 5 seconds
  setTimeout(function () {
    document.getElementById("result-div").innerHTML = "";
  }, 5000);
}

function toFahrenheit() {
  event.preventDefault();
  // Get the temperature value input from user
  let tempToBeConverted = document.getElementById("temperature").value;
  // Convert temperature to celsius
  convertedTemperature = Math.round((tempToBeConverted * 9) / 5 + 32);
  // Append result to the result div
  document.getElementById("result-div").innerHTML =
    "<p>The temperature is " +
    convertedTemperature +
    String.fromCharCode(176) +
    " F</p>";
  // Clear result div after 5 seconds
  setTimeout(function () {
    document.getElementById("result-div").innerHTML = "";
  }, 5000);
}
