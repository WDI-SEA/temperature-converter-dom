var submitButton = document.getElementById('submit');
var clearButton = document.getElementById('clear');


var calcTemp = function(){
  var num = document.getElementById('degrees-number').value;
  var unit = document.getElementById('F').checked;

  if(num===""){
    document.getElementById('result').innerHTML = "Invalid Input";
  } else{
    if(unit){
      document.getElementById('result').innerHTML = ((num-32)/(9/5)).toFixed(1)+" &deg;C";
    } else{
      document.getElementById('result').innerHTML = ((num)*(9/5)+32).toFixed(1)+" &deg;F";
    }
  }
};

var clear = function(){
  document.getElementById('result').innerHTML = "Output";
  document.getElementById('degrees-number').value="";
};

submitButton.addEventListener('click',calcTemp);
clearButton.addEventListener('click',clear);
