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

    document.getElementById("clear").addEventListener("click", function(){
        var gauge = document.getElementById('gauge');
        var value = document.getElementById('value').value;

        gauge.innerHTML="Temperature &deg";
        document.getElementById('value').value= "";
        });

    document.getElementById("submit").addEventListener("click", function(){

    var value = document.getElementById('value').value;
    var radioButton = document.getElementById('Fahrenheit');
    // var clear = document.getElementById("clear");
    var gauge = document.getElementById('gauge');

    // clear.addEventListener('click', function(){
    //   console.log(new Date())
    // gauge.innerHTML="Temperature &deg";
    // document.getElementById('value').value= "";
    // });
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
