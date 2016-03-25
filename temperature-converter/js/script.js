var container = document.getElementById('container');

document.getElementById('convert').addEventListener('click', function(event) {
  var temp = parseInt(document.getElementById('c-input').value) || ('f-input').value;
  var newTemp = convertTemp(temp);
  document.getElementById('temp-result').innerHTML = newTemp;
});

function convertTemp(temp) {
  console.log("line 10 convert")
  if (temp == document.getElementById("c-input").value) {
   newTemp = document.getElementById("c-input").value * 9 / 5 + 32;
   document.getElementById("temp-result").value = Math.round('temp-result');
  return newTemp;  
} else if (temp == document.getElementById("f-input").value) {

    newTemp = (document.getElementById("f-input").value -32 * 5 / 9);
    document.getElementById("temp-result").value = Math.round('temp-result');
    return newTemp;
  }

}
convertTemp();

// document.getElementById('convert').addEventListener('click', function(event) {
//   var temp = parseInt(document.getElementById('f-input').value);
//   var newCTemp = convertFTemp(temp);
//   document.getElementById('temp-result').innerHTML = newCTemp;
// });

// var convertFTemp = function(temp) {
//   newCTemp = (document.getElementById("f-input").value -32) * 5 / 9;

//   return newCTemp;
// }