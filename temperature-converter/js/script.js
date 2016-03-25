var container = document.getElementById('container');
var optionsList = document.getElementById('options-list');
var field = document.getElementById('field');
var newTemp;
var result = document.querySelector('#result');
var temp = document.querySelector('#temp');
var toC = document.querySelector('#toC');
var toF = document.querySelector('#toF');

document.querySelector('#submit').addEventListener('click', function() {

if ((typeof(parseInt(document.getElementById('field').value) * 1)) === 'number') { //field !== undefined && 
	fieldValue = parseInt(document.getElementById('field').value);
	// if (typeof parseInt(document.getElementById('field').value)) === "number") { //field !== undefined && 
		if (document.querySelector('#toC').classList.contains("active")) {
			newTemp = Math.round((fieldValue - 32) * (5 / 9));
			temp.innerHTML = newTemp + "&#176;C"
			result.classList.remove('hidden');
			console.log(newTemp + "&#176;C");
		} else {
			newTemp = Math.round(fieldValue * (9/5) + 32);
			temp.innerHTML = newTemp + "&#176;F"
			result.classList.remove('hidden');
			console.log(newTemp + "&#176;F");
		};
	} else {alert("Please enter a valid temperature value.");};
});

document.querySelector('#toF').addEventListener('click', function() {
	toC.classList.remove('active');
	toF.classList.add('active')
	temp.innerHTML = ""
});

document.querySelector('#toC').addEventListener('click', function() {
	toF.classList.remove('active');
	toC.classList.add('active')
	temp.innerHTML = ""
});

