document.getElementById('submit').addEventListener('click' , (e) => {	
	let tempInput = parseInt(document.getElementById("user-input").value)	
	let convertedTemp = (((tempInput - 32) * 5) / 9)
	let roundedConvertedTemp = Math.round(convertedTemp)
	document.getElementById('result').textContent = roundedConvertedTemp
	if (roundedConvertedTemp > 100) {
		document.getElementsByTagName("div") = 'red'
	} 
	else if (roundedConvertedTemp < 0) {
		document.getElementsByTagName("div") = 'blue'
	}
	else {
		document.getElementsByTagName("div") = 'white'
	}
})


document.getElementById('clear').addEventListener('click' , (e) => {
	document.getElementById('result').textContent = 'Try Another One'
})