//variables needed
let fahrenheitClick = document.querySelector('#fahrenheit');
let celciusButton = document.querySelector('#celcius');
let useF = false;
let useC = false;
let finalTemp = 0;
let output = document.querySelector('#outcome');
let clearEntry = document.querySelector('#clearThis');

function setForumlaF() {
  useF = true;
  useC = false;
};
fahrenheitClick.addEventListener('click', setForumlaF)
function setFormulaC() {
  useF = false
  useC = true

};
celciusButton.addEventListener('click', setFormulaC);




/** 
 * Submit button stuff
 */
function submitInput() {
  let userTempInput = document.querySelector('#temp').value;
  if (useF === true) {
    // finalTemp = (userTempInput − 32) * 5/9
    finalTemp = (userTempInput - 32) * 5/9
    output.innerHTML = finalTemp;
  }
  else {
    finalTemp = (userTempInput * 9 / 5) + 32
    output.innerHTML = finalTemp
  };
};

let submitThis = document.querySelector('#submitButton');
submitThis.addEventListener('click', submitInput);

function clearInput() {
  output.innerHTML = ""
}
clearEntry.addEventListener('click', clearInput)




