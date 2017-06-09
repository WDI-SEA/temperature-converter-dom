//submit button should calculate converted temperature
var submitButton = document.getElementById('submit');

//created global variable so all functions had access
var newTemp = -1;


// function to make red or blue background based on temp
 var convertBackground = function(){

  if (newTemp <= 0){
  		document.getElementById('result').style.backgroundColor = 'steelblue';
  } else if (newTemp >= 30){
  		document.getElementById('result').style.backgroundColor = 'brown';
  } else {

  }
}

// function to calculate new temperature
var convertTemp = function(){
  var temp = document.getElementById('temperature').value;
  var celsius = ((temp-32)/(9/5)).toFixed(0);
  var fahrenheit = ((temp)*(9/5)+32).toFixed(0);

  if (temp === "") {
    document.getElementById('result').innerHTML = "Try Again";
  } else if(document.getElementById('F').checked){
      document.getElementById('result').innerHTML = celsius +" &deg;C";
      newTemp = celsius
      convertBackground()

  } else {
      document.getElementById('result').innerHTML = fahrenheit +" &deg;F";
      newTemp = fahrenheit
      convertBackground()
    }
};

submitButton.addEventListener('click', convertTemp);


//clear button should reset page
var clearButton = document.getElementById('clear');

var clear = function(){
	window.location.reload();
};

clearButton.addEventListener('click', clear);



