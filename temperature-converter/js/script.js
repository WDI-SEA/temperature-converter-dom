

function fToC()   {  
  var fTemp = document.getElementById('fahrenheit').value;  
  var fToCel = (fTemp - 32) * (5 / 9);  
  var alertToUser = fToCel + '\xB0C.';
  document.getElementById("message").innerHTML = alertToUser;
}   


// var x = document.getElementById("audio");
//   x.autoplay = true;
//   x.load();
// More relic code from sarcastic national anthem