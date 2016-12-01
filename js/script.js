document.addEventListener('DOMContentLoaded', function() {
 console.log("DOM loaded");

   var form = document.getElementById('container');
   var input = document.getElementById('input');
   var convertButton  = document.getElementById('convertButton');
   var resetButton = document.getElementById('resetButton');
   var fButton = document.getElementById('fButton');
   var cButton = document.getElementById('cButton');
   var tempDisplay = document.getElementById('tempDisplay');

   resetButton.addEventListener('click', function(){
     tempDisplay.innerHTML="Displays the conversion";
     input.value=" ";
   })

   form.addEventListener('submit', function(x){
     x.preventDefault();

     // console.log(input.value);
     if (cButton.checked) {
       tempDisplay.innerHTML = c(input.value) + " " + "Celsius";
       //outputs the value in Fahrenheit
     } else {
       tempDisplay.innerHTML = f(input.value) + " " + "Fahrenheit";
       //outputs the value in Celsius
     }
   });

});

function c(f) {
 var c = (f - 32) * 5/9; {
 return(parseFloat(c).toFixed(2));
 }
}

function f(c) {
  var f = (c*9/5) + 32;{
    return(parseFloat(f).toFixed(2));
  }
}
