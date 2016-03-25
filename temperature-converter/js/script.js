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
//var cColors = {'0':'freezing', '10':'cold', '16':'cool', '27':'warm', '32':'hot', '38':'scorching'};
//var fColors = {'32':'freezing', '50':'cold', '60':'cool', '80': 'warm', '90':'hot', '100':'scorching'};
var cColors = {'freezing':0, 'cold':10, 'cool':16, 'warm':27, 'hot':32, 'scorching':38};
var fColors = {'freezing':32, 'cold':50, 'cool':60, 'warm':80, 'hot':90, 'scorching':100};

var setResults = function(temperature, colorArray) {
	if (newTemp >= colorArray['scorching']) {
		result.classList.add('scorching');
	} else if (newTemp >= colorArray['hot']) {
		result.classList.add('hot');
	} else if (newTemp >= colorArray['warm']) {
		result.classList.add('warm');
	} else if (newTemp <= colorArray['freezing']) {
		result.classList.add('freezing');
		} else if (newTemp <= colorArray['cold']) {
		result.classList.add('cold');
	} else if (newTemp <= colorArray['cool']) {
		result.classList.add('cool');
	} else {result.classList.add('gray');};
}

document.querySelector('#submit').addEventListener('click', function() {

if ((typeof(parseInt(document.getElementById('field').value) * 1)) === 'number') { //field !== undefined && 
	fieldValue = parseInt(document.getElementById('field').value);
	// if (typeof parseInt(document.getElementById('field').value)) === "number") { //field !== undefined && 
		if (document.querySelector('#toC').classList.contains("active")) {
			newTemp = Math.round((fieldValue - 32) * (5 / 9));
			temp.innerHTML = newTemp + "&#176;C"
			result.className = "";
			setResults(newTemp,cColors);
		} else {
			newTemp = Math.round(fieldValue * (9/5) + 32);
			temp.innerHTML = newTemp + "&#176;F"
			result.className = "";
			setResults(newTemp, fColors);
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

