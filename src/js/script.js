
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');
  var tempInput = document.getElementById('tempInput');
  var output = document.getElementById('output');
  var radio = document.getElementById('radioFahrenheit');



  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    if(radio.checked){

	    var convertedTempF = (tempInput.value - 32) * (5 / 9);

	    output.innerHTML = convertedTempF;
	    
	} else {
		var convertedTempC = (tempInput.value * 9/5) +32;

		output.innerHTML = convertedTempC
		
	}

	if(radio.checked && convertedTempF > 25){
		output.className += " hot";

	} else if(radio.checked && convertedTempF < 10){
		output.className += "cold";
	} else if(!radio.checked && convertedTempC > 80){
		output.className += " hot";	
	} else if(!radio.checked && convertedTempC < 35){
		output.className += "cold";
	}


  });
});






