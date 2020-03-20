
	let Output = document.getElementById('output');
	let input = document.getElementById('temp');
	let s = document.getElementById('submit');
	let c = document.getElementById('clear');



let record = (x) => {
	if (document.getElementById('C').checked == true) {
		x = (x - 32)/1.8
	}
	else {
		x = (x * 1.8) + 32;
	}

 Output.textContent = "x";

}
c.addEventListener('click', (event) => {
	output.textContent = ''
	input.value = ' ';
});

s.addEventListener('click', (event) => {
	record(input.value);
})
