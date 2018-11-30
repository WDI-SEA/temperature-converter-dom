document.addEventListener('DOMContentLoaded',function(){
	var temp = document.getElementById('temp');
	var temp2 = document.getElementById('temp2')


	temp.addEventListener('submit', function(event) {
		event.preventDefault();
		console.log('Submit');


var datainput;

function tempConverter() {
	var datainput = document.getElementById("data").value;
	if(document.getElementById("fah").checked) {
		var c = math.round((datainput-32)*5/9);
		c = math.round(c);
	} else 
	{
		var = 9*datainput/5+32;
		f = math.round (f);
		console.log("temperature is", f, "Fahrenheit");
		document.getElementById("result").innerHTML = "<p style=' color: red; font-size 8em'>"+"fah"+" &#176;F</p>";
 }
}

	document.getElementById("submit").addEventListener("click", function() {
		tempconverter();
	});

	document.getElementById("clear").addEventListener("click", function() {
		document.getElementById("data").value=""
	});

