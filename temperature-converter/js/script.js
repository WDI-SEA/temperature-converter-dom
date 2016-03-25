function convert() {
	var unit = document.getElementsByName("unit");
	for (var i = 0; i < unit.length; i++){
		if(unit[i].checked){
			unit = unit[i].value;
		}
	}

	if (unit == "f") {
		var f = document.getElementById("input").value;
		var c = (f - 32) * 5 / 9;
		c = Math.round(c);
	    document.getElementById("output").innerHTML = c;
	}
	else if (unit = "c"){
		var c = document.getElementById("input").value;
		var f = c * 9 / 5 + 32;
		f = Math.round(f);
		document.getElementById("output").innerHTML = f;
	}
	
    if (c <= 0) {
    	document.getElementById("output").style.backgroundColor = "blue";
    	document.getElementById("output").style.color = "white";
    }
    else if (c >= 100) {
    	document.getElementById("output").style.backgroundColor = "red";
    	document.getElementById("output").style.color = "white";
    }
    else {
    	document.getElementById("output").style.backgroundColor = "green";
    	document.getElementById("output").style.color = "white";
    }
}

function reset() {
	document.getElementById("input").value = " ";
	document.getElementById("output").innerHTML = " ";
}