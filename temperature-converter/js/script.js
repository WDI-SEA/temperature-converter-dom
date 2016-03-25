


var convertButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');

var FahrToCels = function() {
	var temp = document.getElementById('inputTemp').value;
	newTemp = Math.round((temp - 32) / 1.8);
	return newTemp;
}





// var CelsToFahr = function() {
// 	var newTemp = Math.round((inputTemp * 1.8) + 32);
// 	return newTemp;
// }

convertButton.addEventListener('click', function(){
	var inputTemp = document.getElementById('inputTemp').value;
	var outputTemp = FahrToCels(inputTemp);
	// console.log(outputTemp);
	var outputBox = document.getElementById('tempResult');
	
	outputBox.value=outputTemp;
})


resetButton.addEventListener('click', function() {
	var inputTemp = document.getElementById('inputTemp');
	var outputTemp = document.getElementById('tempResult');
	outputTemp.value = "";
	inputTemp.value = "";	
})