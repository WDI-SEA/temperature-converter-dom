console.log('Hello, front end');
var convertButton = document.getElementById("convert-button");
var mercury = document.getElementById("mercury");

function convertButtonClick() {
	var inputTemp = document.getElementById("input-temp");
	var result = document.getElementById("result");
	var choiceArray = document.getElementsByName("scale");
	var conversionChoice;

	// check which option was selected
	for (choice of choiceArray) {
		if (choice.checked == true) {
			conversionChoice = choice.id;
			break;
		}
	}

	var calcResult = 0;
	switch (conversionChoice) {
		case "c": // F to C
			calcResult = convertFtoC(inputTemp.value);
			result.innerText = `${inputTemp.value}°F is ${calcResult}°C`;
			setMercury(calcResult, "c");
			break;
		case "f": // C to F
			calcResult = convertCtoF(inputTemp.value);
			result.innerText = `${inputTemp.value}°C is ${calcResult}°F`;
			setMercury(calcResult, "f");
			break;
		case "k": // F to K
			calcResult = convertFtoK(inputTemp.value);
			result.innerText = `${inputTemp.value}°F is ${calcResult}°K`;
			setMercury(calcResult, "k");
			break;
	}
}	

convertButton.addEventListener("click", convertButtonClick);

function convertFtoC(f) {
	return Math.floor(((f - 32) * 5 / 9) * 100) / 100;
}

function convertCtoF(c) {
	return Math.floor((9 / 5 * c + 32) * 100) / 100;
}

function convertFtoK(f) {
	return Math.floor((((f - 32) * 5 / 9) + 273.15) * 100) / 100;
}

function setMercury(temperature, scale) {
	var minTemp, maxTemp;
	switch (scale) {
		case "f":
			minTemp = -20;
			maxTemp = 100;
			break;
		case "c":
			minTemp = -29;
			maxTemp = 38;
			break;
		case "k":
			minTemp = 244;
			maxTemp = 311;
			break;
	}
	var height = Math.max(10, Math.min((temperature - minTemp) * 400 / 67, 400));
	mercury.style.height = height.toString() + "px"; 
	if (height > 300) {
		mercury.style.backgroundColor = "red";
	} else if (height > 100) {
		mercury.style.backgroundColor = "yellow";
	} else {
		mercury.style.backgroundColor = "lightblue";
	}
}