document.getElementById('temperature').addEventListener("submit", function(event){
	event.preventDefault();
	console.log("Am I understood?");
	var temp = document.getElementById("box").value;
	console.log(temp);
	var newTemp;
	
	if (document.getElementById("radio1").checked){
		newTemp = (temp - 32)*(5/9);
		
		// console.log("god it works")
	} else {
		newTemp = (temp * 9/5) + 32;
		// console.log("Bwah")
	};
	// var x = document.getElementsByTag("p");

	// x.remove(x);

	// var p = document.createElement("p");
	// p.innerText = newTemp.toFixed(2);

	x = document.getElementById("new");
	x.innerText = newTemp.toFixed(2);
	

	document.getElementsByTag("p").append(x.innerText);

})

document.getElementById("clear").addEventListener("click", function(event){
	location.reload();
});


//console.log(fromTempDegEl.children[fromTempDegEl.selectedIndex])
//i can create a div that has children and get selected index
//by referencing the selected index (or checked if using radio buttons)