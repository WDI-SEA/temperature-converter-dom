
// Temp converter
function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  return fToCel;
}

// Listen for the clicked button
document.getElementById('convert').addEventListener('click',function() {
  console.log('clicked');
});

// Once the form is submitted, run the conversion with the input value,
//and then display it on the page
document.getElementById('form').addEventListener('submit',function(event) {
  event.preventDefault();
  var inputReceived = document.getElementById('input').value;
  var valConversion = fToC(inputReceived);
  document.getElementById('displayNewTemp').innerHTML=valConversion;

  if(inputReceived >= 85) {
    console.log("its hot out!");
  } else if (inputReceived <= 84 && inputReceived > 40) {
    console.log("its nice out");
  } else if (inputReceived <= 40) {
    console.log("its cold");
  } else {
    console.log("I hope this message never shows.");
  }
});

// When the clear button is pressed, clear out the input field
// and remove the temperature from the page
document.getElementById('clear').addEventListener('click',function() {
  event.preventDefault();
  document.getElementById('displayNewTemp').innerHTML="";
  document.getElementById('input').value ="";
});


