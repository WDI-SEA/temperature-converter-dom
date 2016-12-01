document.addEventListener("DOMContentLoaded", function() {

	function convertFtoC() {
		var celsius = document.getElementById("result");
		var input = document.getElementsByTagName("input")[0];
		var result = (input.value - 32) * 5/9;
		celsius.textContent = Math.round(result);
	}

	document.getElementById("submit").addEventListener("click", function() {
		convertFtoC();
	});

	document.getElementById("reset").addEventListener("click", function() {
		document.getElementById("value").value = "";
		document.getElementById("result").textContent = "0";
	});

});