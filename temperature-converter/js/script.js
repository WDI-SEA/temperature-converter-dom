
function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}

document.getElementById('convert').addEventListener('click',function() {
  console.log('clicked');
});

document.getElementById('form').addEventListener('submit',function(event) {
  event.preventDefault();
  var inputReceived = document.getElementById('input').value;
  var valConversion = fToC(inputReceived);
  console.log('inputReceived = '+ valConversion);
});


