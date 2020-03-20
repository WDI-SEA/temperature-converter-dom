//variables for output and all inputs
	let Output = document.getElementById('output');
	let input = document.getElementById('temp');
	let s = document.getElementById('submit');
	let c = document.getElementById('clear');

 console.log(Output)
console.log(input)
// console.log('s')
// console.log('c')

//function record if variable c is checked let temp equal temp-32/1.8 otherwise reverse
let record = (x) => {
	if (document.getElementById('C').checked == true) {
		x = (x - 32)/1.8
    document.getElementById('output').textContent = x
	}
	else {
		x = (x * 1.8) + 32;
    document.getElementById('output').textContent = x
	}
//text for output = temp
 //return Output.textContent = x;
 //Output.innerHtml = record
 console.log(record)

}
//clear inputs and output
c.addEventListener('click', (e) => {
	Output.textContent = ""
	input.textContent = "";
});

// give celcius click event that takes input calls record and gives to output
s.addEventListener('click', (e) => {
  e.preventDefault()
	record(input.value);
})
