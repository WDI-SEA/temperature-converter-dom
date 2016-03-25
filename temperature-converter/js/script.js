
var convertFToC = function(degrees_f){
		return (degrees_f)*.5556 - 32;
	}

var generateCel = function (){
	var Degree=document.getElementById("temp_converter").value;
	if(Degree ==null ){
		return; 
	}
	document.getElementById("temp_converter").value= convertFToC(Degree);
}

var clear_degrees =function () {
	document.getElementById("temp_converter").value='';
}
