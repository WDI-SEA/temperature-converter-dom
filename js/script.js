document.addEventListener('DOMContentLoaded', function() {
		
	var insertedNumber = document.getElementById('insertNumber');

	var submit = document.getElementById('submitted');

	var finalTemp = document.getElementById('finalTemp');

	var deleted = document.getElementById('deleted');

	deleted.addEventListener('click', function() {
		finalTemp.style.backgroundColor = "";
		finalTemp.textContent = "";
		insertedNumber.value = "";
				
	});

	submit.addEventListener('click', function() {
		var result = 0;

	if (isNaN(insertedNumber.value)) {
		alert("This is not a number!");
	}

		else if (document.getElementById('celTofah').checked) {
			result = (insertedNumber.value - 32) * (5/9);
			finalTemp.textContent = result.toFixed(2) + " Celsius.";
				if (result > 70) {
					finalTemp.style.backgroundColor = "red";
				} else if (result < 21) {
					finalTemp.style.backgroundColor = "blue";
				} else {
					finalTemp.style.backgroundColor = "";
				}
		} else if (document.getElementById('fahTocel').checked) {
			result = (insertedNumber.value) * (9/5) + 32;
			finalTemp.textContent = result.toFixed(2) + " Fahrenheit.";
				if (result > 70) {
					finalTemp.style.backgroundColor = "red";
				} else if (result < 32) {
					finalTemp.style.backgroundColor = "blue";
				} else {
					finalTemp.style.backgroundColor = "";
				}
		} else {
			alert("Select a converter.");
		}

	});

});