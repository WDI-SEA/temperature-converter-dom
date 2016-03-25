


// This calculates celsius to farenheit

calculate = function() {
	var getTemp = document.getElementById('temp').value;
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if (document.getElementById('cel').checked) {
		var conversion = getTemp * (9/5) + 32;
		console.log(conversion);
		element.innerHTML = "This converts to: " + conversion + " F";
		if (conversion <= 32 ) {
			document.body.style['background-color'] = 'blue';
		} else if (conversion >= 212) {
			document.body.style['background-color'] = 'orange';
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'white';
		}
	}
}

document.getElementById("calc").addEventListener('click', calculate);






// this converts farenheit to celsius

farToC = function() {
	var getTemp = document.getElementById('temp').value;
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if(document.getElementById('far').checked) {
		var conversion = (getTemp - 32) * (5/9);
		console.log(conversion)
		element.innerHTML = "This converts to: " + conversion + " Celsius";
		if (conversion <= 0 ) {
			document.body.style['background-color'] = 'blue';
			console.log("brrrrrrr it\s could outside...")
			
		} else if (conversion >= 100) {
			document.body.style['background-color'] = 'orange';
			console.log("why\s it sooo stinking hot!")
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'white';
		}	
	}
}

document.getElementById("calc").addEventListener('click', farToC);



 
