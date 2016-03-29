var fToC = (temp - 32) * 5 / 9;

var celsius = function() {
	var temperature = document.getElementById('temp').value; 
	console.log(temperature)

	var newTemperature = temperature * 2
	document.getElementById('temp').value = newTemperature;

	// var result = -32) * 5 / 9;
	// console.log(celsius)
}



document.getElementById('convert').addEventListener('click', function() {
	celsius()
})

document.getElementById('clear').addEventListener('click', function() {
	console.log("clear pressed");
});















// function thirdDown(yardage, playType, player){
// 	console.log(yardage + " yard " + playType + " to " + player);
// }

// thirdDown(22, 'pass', 'Jordy Nelson');

