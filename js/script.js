var degInput = document.getElementById("input");

document.addEventListener("DOMContentLoaded", function() {

	document.getElementById("convert").addEventListener("click", function(){
		var conversion = Math.floor(((degInput.value - 32) * (5/9)));
		document.getElementById("degreeResult").innerHTML = conversion + " &deg C";
		document.getElementById("degreeResult").classList.add("display");
	});

	document.getElementById("reset").addEventListener("click", function(){
		document.getElementById("degreeResult").innerHTML = "";
		document.getElementById("degreeResult").classList.remove("display");
		degInput.value = "";
	})

});
