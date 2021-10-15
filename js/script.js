
// // event listening function to convert when submit is pressed
// //make function to convert from celsius to fahrenheit 

const capturedTemp = document.getElementById("tempInput").value 

const fToCelsius = (capturedTemp - 32 * 5/9)

const CelsiusToF = (capturedTemp + 32 * 9/5)

function choseFahr () {
    return true ;
}

function choseCels () {
    return true ;
}

function clearTemp() {
    document.getElementById('tempInput').value = "" ;
}

function convertTemp () {
    // console.log('this works');
    // if (choseFahr === true) {
    console.log(capturedTemp)
       
    }
   
    
    
    











document.getElementById('submit').addEventListener('click', convertTemp)
document.getElementById('fahr').addEventListener('click', choseFahr)
document.getElementById('cels').addEventListener('click', choseCels)


