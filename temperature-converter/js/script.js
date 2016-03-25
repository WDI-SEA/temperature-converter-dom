
var convertFToC = function(degrees_f){
		return (degrees_f)*.5556 - 32;
	}

var generateCel = function (){
	var Degree=document.getElementById("temp_converter").value;
	if(Degree ==null ){
		return; 
	}
	document.getElementById("temp_converter").value= convertFToC(Degree);
	// if (convertFToC(degree)<=0){
	// 	document.getElementById('background-color')[grey]=blue;
	// } else if (convertFToC(degree)>100){
	// 	document.getElementById('background-color')[grey]=red;
	// } else {
	// 	return;
	// }
document.getElementById("temp_converter").addEventListener("click", function() {
 // trying to debug clickEvent
 //   	if (convertFToC(degree)<=0){
	// 	document.getElementById('background-color')[grey]=blue;
	// } else if (convertFToC(degree)>100){
	// 	document.getElementById('background-color')[grey]=red;
	// } else {
	// 	return;
}

var clear_degrees =function () {
	document.getElementById("temp_converter").value='';
}

var temp_cel =convertFToC(Degree)
var colorChange = function() {
	if (temp_cel<0) {
		
	}
}
