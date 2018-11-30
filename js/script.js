

document.addEventListener("DOMContentLoaded", function(){

  //my submit button has an id of "submitBtn"
 var myBtn = document.querySelector("#submitBtn");
 	var myForm = document.querySelector("#my-form");
 		myForm.addEventListener("submit",function(e) {
   		e.preventDefault();
    //rest of code here

	var selectF = document.getElementById('fahrenheit');
	var selectC = document.getElementById('celsius');
	var inputValue = document.getElementById('input').value;
	
	if(selectF.checked){
		fToC(inputValue);
	}
	else{
		cToF(inputValue);
	}

})	
 	var outputValue = document.getElementById('output');

function fToC(doValue){
	var fToCelsius = ((doValue - 32) / 1.8).toFixed(2);
	console.log(fToCelsius);
	outputValue.innerText = fToCelsius + "°C";
}

function cToF(doValue){
	var cToFahrenheit = (doValue * 1.8 + 32).toFixed(2);
	console.log(cToFahrenheit);
	outputValue.innerText = cToFahrenheit + "°F";
}


	var clearBtn = document.querySelector("#clearBtn");
		clearBtn.addEventListener("click",function(reset){
			var inputValue = document.getElementById('input').value;
			var outputValue = document.getElementById('output');
			inputValue = '';
			outputValue.innerText = '';
		});

})
