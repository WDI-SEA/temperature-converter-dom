

var faren = document.getElementById("farenheit")
var cel = document.getElementById("celcius")
var outPutValue = document.getElementById("outPut");


document.addEventListener("DOMContentLoaded", function() {
  

// This keeps the button from refereshing
var buttonClick = document.getElementById("temp")
buttonClick.addEventListener("submit", function(e) {
  e.preventDefault();

var inputValue = document.getElementById("input").value;

	if(faren.checked){
		getCelsius(inputValue);
	}
	else {
		getFar(inputValue);
	}

});


function getCelsius(x) {
  var celsius = ((x-32) * 5 / 9).toFixed(2);
  outPutValue.innerHTML = celsius + " &#8451;";
}

function getFar(y) {
  var far = ((y * 9/5) + 32).toFixed(2);
  outPutValue.innerHTML = far + " &#8457;";
}

function clearAll(reset){
	var value = document.getElementById("input");
	value.textContent = "";
	faren.checked = false;
	cel.checked = false;
	outPutValue.textContent = "";
}

var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", clearAll)



})





