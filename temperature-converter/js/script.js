

// function fToC()   {  
//   var fTemp = document.getElementById('fahrenheit').value;  
//   var fToCel = Math.floor((fTemp - 32) * (5 / 9));  
//   var alertToUser = fToCel + '\xB0C.';
//   document.getElementById("message").innerHTML = alertToUser;
// }   

var element = document.getElementById("clickEvent");

element.addEventListener('click', function() { 
    var fTemp = document.getElementById('fahrenheit').value;  
    var fToCel = Math.floor((fTemp - 32) * (5 / 9));  
    var alertToUser = fToCel + '\xB0C.';
    document.getElementById("message").innerHTML = alertToUser;
  }, false);


var x = document.getElementsByClass("playAudio");

x.addEventListener('click', function() { 
  x.play();
});


// More relic code from sarcastic national anthem