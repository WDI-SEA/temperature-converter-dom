
var convertFToC = function(degrees_f){
		return (degrees_f)*.5556 - 32;
	}

var generateCel = function (){
	// if(document.querySelector('Degree-form') >0){
	// 	return; 
	// }
		var Degree=document.getElementById("temp_converter").value;
	Degree= convertFToC(Degree);
	alert(Degree);
}


