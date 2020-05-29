const radioButton = document.getElementsByName("radio")
const submitButton = document.getElementById("submitButton")
let onScreenResults = document.createElement("p")

function hitSubmit () {
    submitButton.addEventListener("click", function (e) {
      let results = convertTemperature();
      displayResults(results);
    })
}
hitSubmit();

function convertTemperature() {
  let fahrenheitTemp = document.getElementById("°F").checked
  let celciusTemp = document.getElementById("°C").checked
  let typedTemperature = document.getElementById("temperature").value
  if (fahrenheitTemp == true) {
   results = (typedTemperature - 32) * (5/9)
  } else if (celciusTemp == true) {
   results = (typedTemperature * (9/5) + 32)
  } 
  return results;
}

function displayResults(results) {
    let onScreenResults = document.createElement("p");
    onScreenResults.innerText = ("It is " + results + "°.") 
    document.body.appendChild(onScreenResults);
}

