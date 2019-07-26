
var farhenheitIEl = document.getElementById("farhenheitI");
var celciusIEl = document.getElementById("celciusI");
var kelvinIEl = document.getElementById("kelvinI");
var farhenheitREl = document.getElementById("farhenheitR");
var celciusREl = document.getElementById("celciusR");
var kelvinREl = document.getElementById("kelvinR")
var newTemp;
console.log(farhenheitI);

  document.getElementById('temp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('result').removeChild(document.getElementById('result').lastChild);
    var output = document.createElement('p');
    var tempI = Number(document.getElementById('temp-before').value);
    console.log(tempI);
     if (farhenheitIEl.checked == true && celciusREl.checked == true) {
      newTemp = Math.floor((tempI - 32) * (5/9));
      console.log('sanity check')

      console.log(newTemp)
    }
    else if (farhenheitIEl.checked == true && kelvinREl.checked == true) {
      newTemp = Math.floor((tempI - 32) * (5/9) + 273);
    }
    else if (farhenheitIEl.checked == true && kelvinREl.checked == true) {
      newTemp = Math.floor((tempI - 32) * (5/9));
    }
    else if (celciusIEl.checked == true && farhenheitREl.checked == true) {
      newTemp = Math.floor((tempI)*(9/5) + 32);
    }
    else if (celciusIEl.checked == true && kelvinREl.checked == true) {
      newTemp = Math.floor(tempI + 273);
    }
    else if (kelvinIEl.checked == true && farhenheitREl.checked == true) {
      newTemp = Math.floor((tempI - 273)*(9/5) + 32);
    }
    else if (kelvinIEl.checked == true && celciusREl.checked == true) {
      newTemp = Math.floor(tempI - 273);
    }
    else {
      newTemp = 'Please input a number, or choose different units'
    };
    // newTemp = Math.floor((tempI - 32) * (5/9));
    console.log(newTemp)
    output.innerText = newTemp.toString();
    console.log(newTemp);
    console.log(output);
    console.log('sanity')

    document.getElementById('result').appendChild(output);
    console.log(output);
  });

//   if (farhenheitI == true && celciusR == true){ //for this part I want to make sure the drop down buttons are set
//     document.getElementById('temp-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var output = document.createElement("h2");
//       var tempI = parseInt(document.getElementById('temp-before').value, 10);
//       var newTemp = (tempI - 32) * (5/9);
//       output.innerText = newTemp;
//       document.getElementById('result').append(number(output));
// console.log(number(output));
//
//     });
//   }
//
//   else if (farhenheitI == true && kelvinR == true) {
//     document.getElementById('temp-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var output = document.createElement("h2");
//       var tempI = parseInt(document.getElementById('temp-before').value, 10);
//       var newTemp = (tempI - 32) * (5/9) + 273;
//
//       output.innerText = newTemp;
//       document.getElementById('result').append(output);
//
//
//
//   });
// }
//   else if (celciusI == true && farhenheitR == true) {
//     document.getElementById('temp-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var output = document.createElement("h2");
//       var tempI = document.getElementById('temp-before').value;
//       var newTemp = (tempI)*(9/5) +32;
//       output.innerText = newTemp;
//       document.getElementById('result').append(output);
//
//
//   });
// }
//   else if (celciusI == true && kelvinR == true) {
//     document.getElementById('temp-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var output = document.createElement("h2");
//       var tempI = document.getElementById('temp-before').value;
//       var newTemp = (tempI - 273);
//       output.innerText = newTemp;
//       document.getElementById('result').append(output);
//
//
//   });
// }
//   else if (kelvinI == true && farhenheitR == true) {
//     document.getElementById('temp-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var output = document.createElement("h2");
//       var tempI = document.getElementById('temp-before').value;
//       var newTemp = (tempI - 273)*(9/5) + 32;
//       output.innerText = newTemp;
//       document.getElementById('result').append(output);
//
//
//   });
// }
//   else if (kelvinI == true && celciusR == true) {
//     document.getElementById('temp-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       var output = document.createElement("h2");
//       var tempI = document.getElementById('temp-before').value;
//       var newTemp = (tempI + 273);
//       output.innerText = newTemp;
//       document.getElementById('result').append(output);
//
//
//   });
// }
//   else {
//     return "Please select desired units."
//
//   }
// }
// tempConverter();

// //temp calculation F -> kelvin
// (tempI - 32) * (5/9) + 273
// //temp calculation F -> celcius
// (tempI - 32) * (5/9)
// //temp calculation k -> f
// (tempI - 273)*(9/5) + 32
// //temp calculation c -> f
// (tempI)*(9/5) +32
// //temp calculation k -> c
// (tempI -273)
// //temp calculation c -> k
// tempI + 273
