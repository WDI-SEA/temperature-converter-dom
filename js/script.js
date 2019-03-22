console.log('Hello, front end');
//set input to the temp box
var input = document.getElementById("temp")

//set submit event click
document.getElementById("submitTemp").addEventListener("click", convertTemp);

//set submit event click on input box
input.addEventListener("click", convertTemp);



//check for keypress - not working
input.addEventListener("keyup", function(event) {
	//13 is the enter key
	consoleLog(event)
	if (event.keyCode === 13) {
		//don't submit the damn form
		event.preventDefault();
		document.getElementsById("clear").preventDefault();
		//trigger the button click instead
		document.getElementById("submitTemp").click();
	}
})

function tempJudge(temp,units){
	console.log("whats temp",temp)
	
	//if temp is over 90 and F OR over 32 and C
	if (temp >= 90 && units == "c" || temp >= 32 && units == "f"){
		document.getElementById("tempResult").setAttribute('style','background-color:#FAA')
	//if temp is under 32 and f or under 0 and c
	} else if (temp <= 32 && units == "c" || temp <= 0 && units == "f") {
		document.getElementById("tempResult").setAttribute('style','background-color:#AAF')
	//if it's between said values, make background white
	} else {document.getElementById("tempResult").setAttribute('style','background-color:#FFF')}

}


function convertTemp (){
	console.log("nice click")
	//checkRadial();
	switch(checkRadial()) {
		
		case "f":
			//convert to celcius
			console.log("f is checked")
			var x;
			x = Math.round((document.getElementById("temp").value -32) * 5 / 9);
			console.log(x)
			document.getElementById("tempH1").innerText = x + "\xB0C"
			//call color change function
			tempJudge(x,"f");
			break;
		case "c":
			//convert to fahrenheit
			console.log("c is checked")
			var x;
			x = Math.round(document.getElementById("temp").value * 9/5 + 32);
			console.log(x)
			document.getElementById("tempH1").innerText = x + "\xB0F"
			tempJudge(x,"c");
			break;
		default: 
			console.log("didn't work")
		}
	}
	function checkRadial (){

			//stores radial options in an array
	var elements = document.getElementsByName("units");

	//gets which radial is clicked
	for (var i=0; i < elements.length; i++)
	{
		if (elements[i].checked) {
			console.log(elements[i].value)
			return elements[i].value;
		}
	}
}


//if temp is F

//if temp is c


