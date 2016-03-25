
var convertFToC = function(degrees_f){
		return (degrees_f)*.5556 - 32;
	}

var generateCel = function (){
	if(document.querySelector('Degree-form').length !==0){
		return; 
	}

document.getElementById('Degree-form').onsubmit = convertFToC() {myFunction()};


}


