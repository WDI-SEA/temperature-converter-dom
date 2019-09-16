var inputBox = document.getElementById("box1")
var enter = document.getElementById("enter").addEventListener('click', enter);
var clear = document.getElementById("clear").addEventListener('click', clear);
var Farren = document.getElementById("Farren");
var Celcius = document.getElementById("Celcius");
//getElementById
	var answer = document.getElementById('answers');
function enter(){
	if(Farren.checked){
		var total = inputBox.value + " % Farrenheit to Celcius is " + (inputBox.value -32) * 5/9 ;
		answer.innerHTML = total;
	}
	else if(Celcius.checked){
		var total = inputBox.value + " % Celcius to Farrenheit is " + (inputBox.value * 9/5 + 32) ;
		answer.innerHTML = total;
	}
	var fTotal = (inputBox.value -32) * 5/9;
	var cTotal = (inputBox.value * 9/5 + 32);
	if(fTotal > 35 || cTotal > 85){
		document.getElementById("answers").style.color = '#d00';
	}
	else if(fTotal < 20 || cTotal < 32){
		document.getElementById("answers").style.color = 'blue';
	}
	
	
}

function clear(){
answer.innerHTML= "";
inputBox.value =0;
}

function getColor(){


	

}