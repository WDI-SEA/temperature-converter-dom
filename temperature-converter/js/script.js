var container = document.getElementById('container');
var optionsList = document.getElementById('options-list');
var field = document.getElementById('field');
var newTemp;
var tempIndex;
var result = document.querySelector('#result');
var temp = document.querySelector('#temp');
var toC = document.querySelector('#toC');
var toF = document.querySelector('#toF');
var clear = document.querySelector('#clear');
var cColors = {'0':'freezing', '10':'cold', '16':'cool', '27':'warm', '32':'hot', '38':'scorching'};
var fColors = {'32':'freezing', '50':'cold', '60':'cool', '80': 'warm', '90':'hot', '100':'scorching'};

document.querySelector('#submit').addEventListener('click', function() {

if ((typeof(parseInt(document.getElementById('field').value) * 1)) === 'number') { //field !== undefined && 
	fieldValue = parseInt(document.getElementById('field').value);
	// if (typeof parseInt(document.getElementById('field').value)) === "number") { //field !== undefined && 
		if (document.querySelector('#toC').classList.contains("active")) {
			newTemp = Math.round((fieldValue - 32) * (5 / 9));
			temp.innerHTML = newTemp + "&#176;C"
			result.className = "";
			console.log(result.classList);
				if (newTemp >= 38) {
					result.classList.add(cColors['38']);
				} else if (newTemp >= 32) {
					result.classList.add(cColors['32']);
				} else if (newTemp >= 27) {
					result.classList.add(cColors['27']);
				} else if (newTemp <= 0) {
					result.classList.add(cColors['0']);
					} else if (newTemp <= 10) {
					result.classList.add(cColors['10']);
				} else if (newTemp <= 16) {
					result.classList.add(cColors['16']);
				} else {result.classList.add('gray');};
			console.log(newTemp + "&#176;C");
		} else {
			newTemp = Math.round(fieldValue * (9/5) + 32);
			temp.innerHTML = newTemp + "&#176;F"
			result.classList.remove('hidden');
			result.className = "";
			console.log(result.classList + " " + newTemp);
			if (newTemp >= 100) {
					result.classList.add(fColors['100']);
				} else if (newTemp >= 90) {
					result.classList.add(fColors['90']);
				} else if (newTemp >= 80) {
					result.classList.add(fColors['80']);
				} else if (newTemp <= 32) {
					result.classList.add(fColors['32']);
				} else if (newTemp <= 50) {
					result.classList.add(fColors['50']);
				} else if (newTemp <= 60) {
					result.classList.add(fColors['60']);
				} else {result.classList.add('gray');};
			console.log(newTemp + "&#176;F");
		};
	} else {alert("Please enter a valid temperature value.");};
});

toF.addEventListener('click', function() {
	toC.classList.remove('active');
	toF.classList.add('active');
	temp.innerHTML = "";
});

toC.addEventListener('click', function() {
	toF.classList.remove('active');
	toC.classList.add('active');
	temp.innerHTML = ""
});

clear.addEventListener('click', function() {
	toF.classList.remove('active');
	toC.classList.add('active');
	temp.innerHTML = "";
	result.classList.add('hidden');
	field.value = "";
});

