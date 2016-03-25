var container = document.getElementById('container');
var optionsList = document.getElementById('options-list');
var field = document.getElementById('field');
var newTemp;

document.querySelector('#submit').addEventListener('click', function() {
	if (field.value) {
		if (document.querySelector('#toF').classList.contains("active")) {
			newTemp = field.value;
			console.log(newTemp);
		}
	};
});
