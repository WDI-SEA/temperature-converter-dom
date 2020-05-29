console.log('Hello, front end');

let inputTemp = null;
let outputTemp = null;
let inputTempType = "";
let outputTempType = "";
let kelvinTemp = null;
let outputLabel = "";

const convertToKelvin = function(temperature, tempType){
    switch(tempType){
        case "kelvin":
            return temperature;
            break;
        case "celsius":
            return temperature + 273.15;
            break;
        case "farenheit":
            return (temperature-32) * 5 / 9 + 273.15;
    }
}

const convertFromKelvin = function(temperature, tempType){
    switch(tempType){
        case "kelvin":
            outputLabel = "K";
            return temperature;
            break;
        case "celsius":
            outputLabel = "C";
            return temperature - 273.15;
            break;
        case "farenheit":
            outputLabel = "F";
            return (temperature -273.15) * 9 / 5 + 32;
    }
}

//clear all fields on the page.  All of them, even though only the input text field is listed below.
document.getElementById("clear").addEventListener("click", function(event){
    const inputField = document.getElementById("userInput");
    inputField.value = "";
})

document.getElementById("submitButton").addEventListener("click", function(event){
    if (isNaN(inputTemp)){
        document.getElementById("result").innerHTML = "temperature input must be a number";
    } else {
        inputTemp = Number(document.getElementById("userInput").value);
        inputTempType = document.querySelector("input[name=convertFrom]:checked").value;
        outputTempType = document.querySelector("input[name=convertTo]:checked").value;
        //for simplicity, convert all incoming temps to kelvin, then convert that to the user-selected output
        kelvinTemp = convertToKelvin(inputTemp, inputTempType);
        outputTemp = convertFromKelvin(kelvinTemp, outputTempType);
        document.getElementById("result").innerHTML = `${outputTemp.toFixed(2)}°${outputLabel}`;
    }
})