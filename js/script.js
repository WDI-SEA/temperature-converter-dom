document.addEventListener("DOMContentLoaded",function(e){
	e.preventDefault()


function fahranheitToCelsius(inputTemp){
	var cTemp = (inputTemp - 32) * (5/9);
	cTemp = cTemp.toFixed(2);
	return cTemp;
};

function celsiusToFahranheit(inputTemp){
	var fTemp = (inputTemp*1.8+32);
	fTemp = fTemp.toFixed(2);
	return fTemp;
};


//var formValue = document.querySelector('form');
var fToCRadio = document.querySelector('.temp-type-f')
var cToFRadio = document.querySelector('.temp-type-c')
var result = document.querySelector('.result');
var tempForm = document.querySelector('.form');
var clearButton = document.querySelector('.clear-button');
//var background = document.querySelector('.output');

function backgroundF(fTemp){
	if(fTemp<=33) {
		document.querySelector('.output').id = "cold";
	} else if(fTemp >= 100){
		document.querySelector('.output').id = "hot";
	} else if(fTemp<100 && fTemp>33) { document.querySelector('.output').id = "temperate"}
};

function backgroundC(cTemp){
	if(cTemp<=0) {
		document.querySelector('.output').id = "cold";
	} else if(cTemp > 33){
		document.querySelector('.output').id = "hot";
	} else if(cTemp <33 && cTemp>0) { document.querySelector('.output').id = "temperate"}
};

// clearButton.addEventListener('Clear',function(e){
// 	e.preventDefault();
// 	tempForm = "";
// });

tempForm.addEventListener('submit',function(e){
	e.preventDefault();
	var userTempInput = document.getElementById('text-box').value;
	//console.log(userTempInput);
if(cToFRadio.checked) {
	var fTemp = celsiusToFahranheit(userTempInput);
	result.innerHTML = fTemp+'&deg; F';
	backgroundF(fTemp);
}
else{var cTemp = fahranheitToCelsius(userTempInput);
	result.innerHTML = cTemp+ '&deg; C';
	backgroundC(cTemp);
		}
	});
});