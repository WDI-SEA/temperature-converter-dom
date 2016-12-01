console.log('Hello, front end');

function setOutput() {
  var output = document.getElementById("output");
  var input = document.getElementById("input");

  var value = input.value;
  var result;
  var oF=document.getElementById("F").checked;
  var oC=document.getElementById("C").checked;
  var degreeC;
  if (oF) {
     result = (value-32)*5/9;
     output.innerHTML = Math.round(result)+ '&#8451';
     degreeC=result;

  } else if (oC) {
  	 result = value * 1.8 +32;
  	 output.innerHTML = Math.round(result)+ '&#8457';
  	 degreeC= value;
  }else{
  	 output.innerHTML = "Temperature";
  	 return ;
  }
  if (degreeC< 0) {
  	output.className="cold";
  }else if (degreeC>30) {
	output.className="hot";
  }else{
  	output.className='';
  }

}

document.getElementById("form").addEventListener("submit", function(evt) {
	evt.preventDefault();
    console.log("set submit button clicked");
    setOutput();
  });

document.getElementById("clear").addEventListener("click", function() {
    console.log("set clear button clicked");
    document.getElementById("output").innerHTML='Temperature';
  });