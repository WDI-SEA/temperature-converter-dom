

document.getElementById('submit').addEventListener('click', function(event){
  console.log(event);
  var f = document.getElementById('userinput').value;

  var tempOutput = function(f) { 
    return (5/9) * (f-32);
    
}
  document.getElementById('conversion').textContent = (tempOutput(f)).toFixed(1) + " Degrees";
});

document.getElementById('clear').addEventListener('click', function(event){
  document.getElementById('userinput').value = '';
  document.getElementById('conversion').textContent = '';
});


