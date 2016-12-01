// console.log('Hello, front end');


var toCelsius = function (value) {
  var Celsius =  Math.round((value - 32) * 5/9);
  // console.log(Celsius);
  return Celsius;
};

var toFahrenheit = function (value) {
  var Fahrenheit =  Math.round((value * 9/5) + 32);
  // console.log(Fahrenheit);
  return Fahrenheit;
};

document.addEventListener('DOMContentLoaded', function() {
  // console.log("DOM loaded"));

    document.getElementById("submit").addEventListener("click", function(){

    var value = document.getElementById('value').value;
    var radioButton = document.getElementById('Fahrenheit');
    var clear = document.getElementById("clear");

    clear.addEventListener('click', function(){
      gauge.innerHTML="Temperature &deg";
      document.getElementById('value').value= "";
    });



    //     console.log(value);
      if (radioButton.checked) {
        document.getElementById("gauge").innerHTML = toFahrenheit(value) + "&deg Fahrenheit";
        // console.log("Inside if");
      } else {
        document.getElementById("gauge").innerHTML = toCelsius(value) + "&deg Celsius";
        // console.log("In else");
      }
    });
  });
//       document.getElementById("clear").addEventListener("click", function(){
//           document.getElementById("clear").innerHTML = "";
//
//
// resetButton.addEventListener('click', function(x){
//   x.preventDefault();
//   tempDisplay.innerHTML=" ";
//    })
