console.log('test');
document.addEventListener('DOMContentLoaded', function(){
	console.log('nice');
});

function degreee(){
	var type;
	var resultDegree;
	var deg = document.getElementById('degree1').value;

	var typeFah = document.getElementById('Fah');
	var typeCel = document.getElementById('Cel');

	if (typeFah.checked){
		
		resultDegree = Math.floor((deg - 32)*5/9);
		type = '°C';

	}else{
		resultDegree = Math.floor(deg*9/5 + 32);
		type = '°F';
	}

	document.getElementById('result').textContent = resultDegree + " " + type;
	console.log(resultDegree + " " + type);
	}
