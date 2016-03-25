

document.getElementById('submit').addEventListener('click', function(event){
  console.log(event);
  var f = document.getElementById('userinput').value;

  var toCelsius = (5/9) * (f-32);

  document.getElementById('conversion').textContent = toCelsius;
});

document.getElementById('clear').addEventListener('click', function(event){
  document.getElementById('userinput').value = '';
  document.getElementById('conversion').textContent = '';
});


var tempOutput = function(toCelsius) {
  
}