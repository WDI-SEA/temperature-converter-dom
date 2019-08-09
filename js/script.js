// check if browser works
console.log('Hello, front end');

// refernces desired elements
var theFormElement = document.getElementById('temprature-form');
var inputTempElement = document.getElementById('input-temp');
var cTempElement = document.getElementById('c-temp');
var fTempElement = document.getElementById('f-temp');
var outputElement = document.getElementById('output');
var clearButton = document.getElementById('clear-button');
// console.dir(cTempElement.value);
// console.dir(fTempElement);



theFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    if (fTempElement.checked === true) {
        var input = inputTempElement.value;
        var temoCalculation = (((input.trim() -32) * 5/9));
        outputElement.textContent = temoCalculation += ' C'; 
    }
    else {
        var input = inputTempElement.value;
        var temoCalculation = (((input.trim() * 9/5) + 32));
        outputElement.textContent = temoCalculation += ' F';
    }
});

function convertTemp(temp) {
    // if/else to calculate temp
    var tempC = input;
    tempC = 21;
    var tempF = (tempc / 1.8) + 32;
    console.log(tempF);

     if (tempC === celsius) {
        console.log("this is the celsius")
     }
     else if (tempF === checked) {
        //  do this
        console.log("this is the fahrenheit")
     }
    
}

clearButton.addEventListener('click', function(e) {
    event.preventDefault();

    outputElement.textContent = '';
})