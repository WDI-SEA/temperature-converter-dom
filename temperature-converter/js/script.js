

function fToC()   {  
  var fTemp = document.getElementById('fahrenheit').value;  
  var fToCel = (fTemp - 32) * (5 / 9);  
  var alertToUser = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  document.getElementById("message").innerHTML = alertToUser;
}   

