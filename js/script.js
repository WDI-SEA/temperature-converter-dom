window.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector('button');
  const form = document.querySelector('form');

  function convertToCelcius(f) {
    const fTemp = f;
    const fToCel = (fTemp - 32) * 5 / 9;
    return Math.floor(fToCel);
  } 

  function convertToFahrenheit(c) {
    const cTemp = c;
    const cToFar = cTemp * 9 / 5 + 32;
    return Math.floor(cToFar);
  } 

  function displayResult(r) {
    document.getElementById('result').innerText = r;
  }
  
  button.addEventListener('click', () => {
    if (document.getElementById('f').checked == true) {
      const farValue = document.getElementById("entry").value;
      const result = convertToCelcius(farValue);
      displayResult(result + '\u00B0');
    } else if (document.getElementById('c').checked == true) {
      const celValue = document.getElementById("entry").value;
      const result = convertToFahrenheit(celValue);
      displayResult(result + '\u00B0');
    }
   
  })

  const clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', () => {
    const clearInput = document.getElementById('entry');
    const clearDisplay = document.getElementById('result');
    clearInput.value = "";
    clearDisplay.innerText = "";
    console.log('clicked');
  })


})




