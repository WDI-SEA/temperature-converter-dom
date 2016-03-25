//event listeners

calculate = function() {
	var getTemp = document.getElementById('temp').value;
	console.log(getTemp);
	
	if (document.getElementById('cel').checked) {
		var conversion = getTemp * (9/5) + 32;
		console.log(conversion);
		if (conversion <= 32 ) {
			document.body.style['background-color'] = 'blue';
		} else if (conversion >= 212) {
			document.body.style['background-color'] = 'orange';
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'white';
		}
	} else {
		conversion = (getTemp - 32) * (5/9);
		console.log(conversion)
		if (conversion <= 0 ) {
			document.body.style['background-color'] = 'blue';
		} else if (conversion >= 100) {
			document.body.style['background-color'] = 'orange';
		} else {
			console.log('Man this is a nice temp.... unless its still hot....');
			document.body.style['background-color'] = 'white';
		}
	}
}

document.getElementById("calc").addEventListener('click', calculate) 









// function calculateC = {
// 	getTemp * (9/5) + 32;
// 	return
// }



// f = c * 9/5 + 32
