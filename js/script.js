console.log('Hello, front end');


//// TESTING PURPOSES PPLEASE IGNORE /////

// const getNum_getElem = document.getElementById('inputField')


// const getNum_querySel = document.querySelector('#inputField')


// getNum_getElem;
// console.log(document.getElementById('inputField')).value;

// getNum_querySel;
// console.log(document.querySelector('#inputField')).value;


///// TESTING PURPOSES PLEASE IGNORE /////




////////// VARIABLES ////////////

// let Celcius = null;
// let Farenheit = null;
let temp = 0;

//let getNum = document.getElementById('inputField'); moved to functions
//let inputNum = inputField.value;
const readout = document.querySelector('#readout');
const submitButton = document.querySelector('#submitButton');
const clearButton = document.querySelector('#clearButton');

const inputField = document.querySelector('#inputField')
/* ASKME const inputField = document.getElementById('inputField');
let inputNum = inputField.value;*/ //These 2 functions don't run in chrome for some reason


/////////// FUNCTIONS ///////////

// activateSubmitButton
// when clicked, takes input from input field and converts it according to radio 'temperatureConverterRadio', then displays that value in h2 'readout', then clears the input field
submitButton.addEventListener('click', function(e) {
  writeToReadout(calculateConversion(document.querySelector('#inputField').value));
})

//test function
// submitButton.addEventListener('click', function(e) {
//   writeToReadout(calculateConversion(getNum_querySel))
// })
// submitButton.addEventListener('click', function(e) {
//   writeToReadout(calculateConversion(getNum_getElem).value)
// })

clearButton.addEventListener('click', function(e) {
  clearInputField();
  clearReadout();
})

// calculateConversion
// if radial CtF (Celsius to farenheit) is clicked, returns (NUM - 32)*(5/9);
// if radial FtC (farenheit to Celcius) is clicked, returns (number + 32)*(9/5);

function calculateConversion(t) {
  if (inputField.value === "") {
    return "Please enter a value."
  }
  else if (document.getElementById('farenToCelc').checked) {
    return (t + " degrees Farenheit is equivalent of " + ((t - 32)*(5 / 9)).toFixed(2) + " degrees Celcius.");
}
  else if (document.getElementById('celcToFaren').checked) {
    return (t + " degrees celcius is equivalent of " + (32 + t * (9 / 5)).toFixed(2) + "degrees farenheit.");
  }
  else {
    return "please select a conversion type.";
}
}

// var button1 = document.getElementById("button1");
// var button2 = document.getElementById("button2");

// if (button1.checked){
//     alert("radio1 selected");
// }else if (button2.checked) {
//     alert("radio2 selected");
// }

function clearInputField() {
  // document.getElementById('inputField').remove()
  // const newInput = document.createElement("input");
  // newInput.id = "inputField";
  // newInput.type = "text";
  // document.getElementById('inputContainer').appendChild(newInput);
  document.getElementById('inputField').select();
  document.getElementById('inputField').setRangeText("");
}

// writeToReadout
// write input to readout
function writeToReadout(num) {
  readout.innerText = num
}

// clearReadout
// clears numerical input from id 'readout', after conversion is complete

function clearReadout() {
  readout.innerText = null;
}

console.log(temp);