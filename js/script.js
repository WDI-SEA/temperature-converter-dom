//console.log('Hello, front end');
///get temp value
//create function to convert temps
//new temp into output

// DOM References
var formElement = document.getElementById('form');
var inputTempElement = document.getElementById('deg');
var radioCElement = document.getElementById('radioC');
var radioFElement = document.getElementById('radioF');
var outputElement = document.getElementById('output');
var submitButtonElement = document.getElementById('submit');
var clearButtonElement = document.getElementById('clear');
// var temperature = document.getElementById('deg').value;
var conversionElement = document.getElementById('deg');

// Add Event Listeners
submitButtonElement.addEventListener('click', handleClick);


var temps = deg.value;

function handleClick(event) {
	event.preventDefault
	console.log('Hello World');
}

function convertTemp(temp, deg, conversion) {
	return conversion;
}

function celsiusToFahrenheit(celsius) {
	var fahrenheit = Math.round((celsius * (9/5)) + 32);
	return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
	var celsius = Math.round((fahrenheit - 32) * (5/9));
	return celsius;
}


//add an event listener to the buttons




//create a condition to activate the output

//for (var i = 0; i < form; i++) {
	// if (form[i].checked == true) {
	// 	if (radioForm[i].value == 'celsius') {
	// 		result = celsiusToFahrenheit('deg');
	// 	}
	// }

	
// 	else {
// 		result = fahrenheitToCelsius('deg');
// 		document.getElementById('output').textContent = result + 'fahrenheit';
// 		document.getElementById('output').textContent = result + 'celsius';
// 	}
// }



