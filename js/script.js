console.log('Hello, front end');

/*1. User puts in a value into the text field
2. User clicks on button
3. The page gets updated with the converted temperature value.
4. Clicking a "Clear" button resets the text field
*/


//when number is entered  -> event listener
// 
// i know i need these :
const tempInput = document.getElementsByClassName('tempInput')

const submitAnswers = document.getElementById('submitButton')

const clearInput = document.getElementById("clearButton")
 
// to grab/change innerHTML
//let tempConversion = document.getElementById("text-square") = tempValue

// want to add an event listener to that this function will run
//function temperatureConverter(valNum) {
  //  valNum = parseFloat(valNum);
  //  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  //}

//conversion fxns
function tempCelToFah(tempInput) {
 return (tempInput * 9/5) +32
 }

function tempFahToCel (tempInput){
    return (tempInput * 1.8) -32
}

//this function needs to run when temp is submitted
function tempConversion (){
    if (tempInput = "Fahrenheit") {
       return tempFahToCel
    } else if (tempInput = "Celcius") {
       return tempCelToFah
    } }

//fxn to submit the answer
submitAnswers.addEventListener ("click" , tempInput)

/*tempInput.addEventListener('submit', )
fxn clear the answer
clearInput.addEventListener () "click" */