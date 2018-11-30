console.log('Hello, front end');
var tempScale = "";
var inputTemp = "";
var outputTemp = "";


document.getElementById("fBtn").addEventListener("click", function() {
	tempScale = "Fahrenheit";
    });

document.getElementById("cBtn").addEventListener("click", function () {
	tempScale = "Celcius";
});


function getTemp () {
    inputTemp = document.getElementById("enteredTemp").value;
};

function solveOutputTemp() {
	getTemp();
	if(tempScale === "Fahrenheit") {
		outputTemp = Math.round((inputTemp - 32)*(5/9));
		document.getElementById("resultTemp").textContent = (inputTemp + " degrees Fahrenheit equals " + outputTemp + " degrees Celcius");
	} else if (tempScale === "Celcius") {
		outputTemp = Math.round((inputTemp * 9/5) + 32);
		document.getElementById("resultTemp").textContent = (inputTemp + " degrees Celcius equals " + outputTemp + " degrees Fahrenheit");
	} else {
		alert("Something went wrong. You need to enter a number in the blue box."); 
	};
};

function clearTemp() {
	document.getElementById("fBtn").checked = false;
	document.getElementById("cBtn").checked = false;
	document.getElementById('enteredTemp').value = "";
};

