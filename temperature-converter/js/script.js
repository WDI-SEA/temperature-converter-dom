
function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  return fToCel;
}

document.getElementById('convert').addEventListener('click',function() {
  console.log('clicked');
});


document.getElementById('form').addEventListener('submit',function(event) {
  event.preventDefault();
  var inputReceived = document.getElementById('input').value;
  var valConversion = fToC(inputReceived);
  //console.log('input received= '+ inputReceived);
  //console.log('val conversion received= '+ valConversion);
  document.getElementById('displayNewTemp').innerHTML=valConversion;
});

document.getElementById('clear').addEventListener('click',function() {
  event.preventDefault();
  document.getElementById('displayNewTemp').innerHTML="";
  document.getElementById('input').value ="";

});


