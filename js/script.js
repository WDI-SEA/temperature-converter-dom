document.addEventListener("DOMContentLoaded", function() {

	var buttonS = document.getElementById("submit");
	// console.log(tempF)
	var tempC = 0;
	var display = document.getElementById("output");
	buttonS.addEventListener("click", function(e) {
		e.preventDefault()
		var tempF = Number(document.getElementById("input").value);
		// console.log("hi");
		tempC = ((tempF - 32) / 1.8).toFixed(2);
		display.textContent = tempC.toString();
		console.log(tempC)
		if (tempC <= 0) {
			console.log(true)
			return display.style.backgroundColor = "blue"
		} else if (tempC >= 30) {
			console.log(false)
			return display.style.backgroundColor = "red"
		} 

	})
})