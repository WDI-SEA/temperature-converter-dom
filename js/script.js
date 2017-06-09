//steps
//grab temperature value that's typed into the input
//select which radio button you want F or C


//grab the red result box
var result = document.getElementById("resultredbox")
//create a new div
var resultDiv = document.createElement('div');
//grab submit button
var btn = document.getElementById("button1")
//grab the input tag in order to show the value that's put in the input box
var input = document.getElementById("input")
//grab the radio1 button
var radio1 = document.getElementById("radio1")
//grab the radio2 button
var radio2 = document.getElementById("radio2")
//grab the clear button for the game reset
var clear = document.getElementById("button2")
//grab the span to reset the text
var span = document.getElementsByTagName('span')
//grab the body
var body = document.querySelector('body'); 



//create function for submit button click
btn.addEventListener('click', function() {
		//set radio1 value to "F" in html
	if(radio1.value === "F" && radio1.checked) {
	var formulaf = input.value - 32 * .55
	var newresult = document.createElement('span');
	newresult.innerText = formulaf	
	result.appendChild(newresult)
	//style the text newresult
	newresult.style.color = 'white'
	newresult.style.fontSize = '20px'
	newresult.style.display = 'block'
	newresult.style.textAlign = 'center'
	
}	else if(radio2.value === "C" && radio2.checked) {
	var formulac = input.value * 2  - 4 + 32
	var newresults = document.createElement('span');
	newresults.innerText = formulac	
	result.appendChild(newresults)
	//style the text newresult
	newresults.style.color = 'white'
	newresults.style.fontSize = '20px'
	newresults.style.display = 'block'
	newresults.style.textAlign = 'center'
}

});

//reset the game
	clear.addEventListener('click', function(){
		//reset temperature

		result.innerText = " "
		

		

	});
