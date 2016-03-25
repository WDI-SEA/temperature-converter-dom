
var container = document.getElementById('container');

// This calculates celsius to farenheit

celToFar = function(event) {
	event.preventDefault();
	var getTemp = document.getElementById('temp').value;
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if (document.getElementById('cel').checked) {
		var conversion = getTemp * (9/5) + 32;
		console.log(conversion);
		element.innerHTML = "This converts to: " + conversion + " F";
		if (conversion <= 32 ) {
			document.body.style['background-color'] = 'blue';
			// elem.classList.add('blue');
		} else if (conversion >= 212) {
			document.body.style['background-color'] = 'orange';
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'rgb(144, 237, 235)';
		}
	}
}

document.getElementById("calc").addEventListener('click', celToFar);
document.getElementById("submit").addEventListener('submit', celToFar);






// this converts farenheit to celsius

farToC = function(event) {
	event.preventDefault();
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
			console.log("why\'s it sooo stinking hot!")
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'rgb(144, 237, 235)';
		}	
	}
}

document.getElementById("calc").addEventListener('click', farToC);
document.getElementById("submit").addEventListener('submit', farToC);


//-------------------------------------------------------------------


celkv = function(event) {
	event.preventDefault();
	var getTemp = parseInt(document.getElementById('temp').value);
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if(document.getElementById('celkv').checked) {
		var conversion = Math.floor(273.15 + getTemp);
		console.log(conversion)
		element.innerHTML = "This converts to: " + conversion + " Kelvin";
		if (conversion <= 0 ) {
			document.body.style['background-color'] = 'blue';
			console.log("This is absolute zero. No cells move, no degeneration, no life. Obtainig absolute zero but more importantly learning to thaw from 0 is key to cryogenic hybernation.")
			
		} else if (conversion >= 373.1339) {
			document.body.style['background-color'] = 'orange';
			console.log("why\'s it sooo stinking hot!")
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'rgb(144, 237, 235)';
		}	
	}
}

document.getElementById("calc").addEventListener('click', celkv);
document.getElementById("submit").addEventListener('submit', celkv);







farkv = function(event) {
	event.preventDefault();
	var getTemp = parseInt(document.getElementById('temp').value);
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if(document.getElementById('farkv').checked) {
		var conversion = Math.floor((getTemp - 32) * (5/9) + 273);
		console.log(conversion)
		element.innerHTML = "This converts to: " + conversion + " Kelvin";
		if (conversion <= 273.2 ) {
			document.body.style['background-color'] = 'blue';
			console.log("brrrrrrr it\s could outside...")
			
		} else if (conversion >= 373.1339) {
			document.body.style['background-color'] = 'orange';
			console.log("why\s it sooo stinking hot!")
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'rgb(144, 237, 235)';
		}	
	}
}

document.getElementById("calc").addEventListener('click', farkv);
document.getElementById("submit").addEventListener('submit', farkv);







kelvinc = function(event) {
	event.preventDefault();
	var getTemp = parseInt(document.getElementById('temp').value);
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if(document.getElementById('kelvc').checked) {
		var conversion = Math.floor(getTemp - 273.15);
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
			document.body.style['background-color'] = 'rgb(144, 237, 235)';
		}	
	}
}

document.getElementById("calc").addEventListener('click', kelvinc);
document.getElementById("submit").addEventListener('submit', kelvinc);






kelvinf = function(event) {
	event.preventDefault();
	var getTemp = document.getElementById('temp').value;
	console.log(getTemp);
	var element = document.getElementById("results");
	
	if(document.getElementById('kelvf').checked) {
		var conversion = Math.floor((getTemp - 273.15) * 1.8000 + 32.00);
		console.log(conversion)
		element.innerHTML = "This converts to: " + conversion + " Far";
		if (conversion <= 0 ) {
			document.body.style['background-color'] = 'blue';
			console.log("brrrrrrr it\s could outside...")
			
		} else if (conversion >= 100) {
			document.body.style['background-color'] = 'orange';
			console.log("why\s it sooo stinking hot!")
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'rgb(144, 237, 235)';
		}	
	}
}

document.getElementById("calc").addEventListener('click', kelvinf);
document.getElementById("submit").addEventListener('submit', kelvinf);

 
