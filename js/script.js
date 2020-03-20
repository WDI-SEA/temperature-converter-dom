
	let displayBox = document.getElementById('display');
	let tempInput = document.getElementById('tempIn');
	let submit = document.getElementById('submitButton');
	let clear = document.getElementById('clearButton');



let doWork = (temp) => {
	

	if (document.getElementById('celcius').checked == true) {
		temp = (temp - 32)/1.8
	}
	else {
		temp = (temp * 1.8) + 32;
	}
    displayBox.textContent = temp;

}
clear.addEventListener('click', (e) => {
	displayBox.textContent = ''
	tempInput.value = ' ';
})

submit.addEventListener('click', (e) => {
	doWork(tempInput.value);
})

