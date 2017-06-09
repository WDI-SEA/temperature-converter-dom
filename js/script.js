//submit button should calculate converted temperature
var submitButton = document.getElementById('submit');


// function to make red or blue background based on temp
 var convertBackground = function(){

  if (document.getElementById('result').value >= 0){
  		document.getElementById('result').style.backgroundColor = red;
  } else if (document.getElementById('result').value <= 30){
  		document.getElementById('result').style.backgroundColor = blue;
  } else {

  }
}

// function to calc new temperature
var convertTemp = function(){
  var temp = document.getElementById('temperature').value;
  var unit = document.getElementById('F').checked;

  if (temp === "") {
    document.getElementById('result').innerHTML = "Try Again";
  } else if(unit){
      document.getElementById('result').innerHTML = ((temp-32)/(9/5)).toFixed(1)+" &deg;C";
      convertBackground()

  } else {
      document.getElementById('result').innerHTML = ((temp)*(9/5)+32).toFixed(1)+" &deg;F";
      convertBackground()
    }
};

submitButton.addEventListener('click', convertTemp);


//clear button should reset values
var clearButton = document.getElementById('clear');

var clear = function(){
	window.location.reload();
};

clearButton.addEventListener('click', clear);



