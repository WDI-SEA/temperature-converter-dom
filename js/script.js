document.addEventListener("DOMContentLoaded", function() {

	var buttonS = document.getElementById("submit");
	var buttonC = document.getElementById("clear");
	var radioF = document.getElementById("radiof");
	var radioC = document.getElementById("radioc");
	var tempF = 0
	var tempc = 0
	var display = document.getElementById("output");
	buttonS.addEventListener("click", function(e) {
	e.preventDefault()
		console.log('c: ', radioC.checked, 'f: ', radioF.checked)
		tempF = Number(document.getElementById("input").value);
		tempC = ((tempF - 32) / 1.8).toFixed(2);
		display.textContent = tempC.toString();
		if (tempC <= 0) {
			console.log(true)
			return display.style.backgroundColor = "blue"
		} else if (tempC >= 30) {
			console.log(false)
			return display.style.backgroundColor = "red"
		} 
	})
	buttonC.addEventListener("click", function(e) {
		e.preventDefault()
		document.getElementById("input").value = ""
	})
})