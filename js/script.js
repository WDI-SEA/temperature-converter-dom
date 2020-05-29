
// calculate fahrentheit to celsius
var fToC = function (x){
  return (x - 32) * 5/9;
}
// calculate celsius to fahrenheit
var cToF = function (x) {
  return (x * 9/5) + 32;
}
// calculate celsius to kelvin
var cToK = function(x){
  return x + 273.15;
}
// calculate fahrenheit to kelvin
var fToK = function(x){
  return cToK(fToC(x));
}
// calculate kelvin to Cel
var kToC = function(x){
  return x - 273.15;
}
// calculate kelvin tp F
var kToF = function(x){
  return kToC(cToF(x));
}

var y = cToK(0);

console.log(typeof y);

function updateTemp(){
  let inputTemp = document.getElementById('userInput').value;
  let temp1 = null;
  let temp2 = null;
  switch(true){
      case document.getElementById("far").checked:
        temp1 = fToC(inputTemp);
        temp2 = fToK(inputTemp);
        document.getElementById("temp1").innerHTML = temp1.toFixed(2) + ' °C';
        document.getElementById("temp2").innerHTML = temp2.toFixed(2) + ' °K';
        break;
      case document.getElementById("cel").checked:
        temp1 = cToF(inputTemp);
        temp2 = cToK(inputTemp);
        //i shouldn't have to parse temp2 to int, but for some reason a string is being
        //returned here and I'm not sure why sp using parseInt() is a cheap fix 
        temp2 = parseFloat(temp2);
        document.getElementById("temp1").innerHTML = temp1.toFixed(2) + ' °F';
        document.getElementById("temp2").innerHTML = temp2.toFixed(2) + ' °K';
        break;
      case document.getElementById("kel").checked:
        temp1 = kToC(inputTemp);
        temp2 = kToF(inputTemp);
        document.getElementById("temp1").innerHTML = temp1.toFixed(2) + ' °C';
        document.getElementById("temp2").innerHTML = temp1.toFixed(2) + ' °F';
        break;

  }

}

var clear = function(){
  document.getElementById("userInput").value = 0;
  document.getElementById("temp1").innerHTML = '-';
  document.getElementById("temp2").innerHTML = '-';
}

const convertButton = document.querySelector('#conv').addEventListener('click', function() { updateTemp(); });
const clearButton = document.querySelector('#clr').addEventListener('click', function() { clear(); });
const convertForm = document.querySelector('#form').addEventListener('submit', function() { updateTemp(); });

