//Get temperature input value
//listen for a submit
//convert temperature value
//return new conversion value

const unit = document.getElementsByName('degree');
console.log(unit[1].value); //checking my notation here. This is unnecessary. 




const convert = () => {
	if (unit[0].checked) { //setting up an if statement for different selections in the radio inputs
		var temp = document.getElementById('temperature').value//getting the number from the input box
		var cels = (temp - 32) * (5 / 9) //temperature conversion
		if (cels >= 100) { //if statement to determine what color the result will be based on temperature values.
			document.getElementById('answer').style.color = 'red';
		}
		else if (cels <= 0) {
			document.getElementById('answer').style.color = 'blue';
		}
		else {
			document.getElementById('answer').style.color = 'black';
		};
		document.getElementById('answer').value = cels.toFixed(2) + "°C"; //entering the new value below, limiting to 2 floating decimals.

	}

	else if (unit[1].checked) {
		var temp = document.getElementById('temperature').value
		var fahr = (temp * 1.8) + 32
		if (fahr >= 212) {
			document.getElementById('answer').style.color = 'red';
		}
		else if (fahr <= 32) {
			document.getElementById('answer').style.color = 'blue';
		}
		else {
			document.getElementById('answer').style.color = 'black';
		};
		document.getElementById('answer').value = fahr.toFixed(2) + "°F";
	}

	else if (unit[2].checked) {
		var temp = document.getElementById('temperature').value
		var kelv = (+temp) + 273
		if (kelv >= 373) {
			document.getElementById('answer').style.color = 'red';
		}
		else if (kelv <= 273) {
			document.getElementById('answer').style.color = 'blue';
		}
		else {
			document.getElementById('answer').style.color = 'black';
		};
		document.getElementById('answer').value = kelv.toFixed(2) + "K";
	}

	else {
		alert("Select a Unit Conversion!");
	};


};




	

	



	