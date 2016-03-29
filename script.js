// var fToC = (temp - 32) * 5 / 9;

var celsius = function() {
	var temperature = document.getElementById('temp').value; 
	console.log("celsuis function: " + temperature)

	var newTemperature = (temperature - 32) * 5 / 9; 
	document.getElementById('temp').value = newTemperature;
}

document.getElementById('convert').addEventListener('click', function() {
	celsius()
})

document.getElementById('clear').addEventListener('click', function() {
	document.getElementById('temp').value = '';
});


