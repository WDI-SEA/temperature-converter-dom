document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");


	var myBtn = document.querySelector('#converter');
	myBtn.addEventListener('submit',function(e){
		e.preventDefault();

	    var temp = document.getElementById('tempInput').value;
		var output = document.getElementById('output');

		if (document.getElementById('F').checked){
				output.textContent = (((temp - 32) * 5 /9) + " °C");

	    	} else {

	    		output.textContent = (((temp * 9) / 5 + 32) + " °F");

	    }
})
})