console.log('Hello, front end');

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  var getValue = function() {
    var value = document.getElementById("input").value;
  }

  var printResult = document.getElementById("result");

  var clearResult = function () {
    printResult.innerHTML = " ";
  }

  document.getElementById("cel").addEventListener("change", function() {
    clearResult();
  })

  document.getElementById("fah").addEventListener("change", function() {
    clearResult();
  })

  document.getElementById("clearAll").addEventListener("click", function() {
    clearResult();
    document.getElementById("input").value = "";
  })

  document.getElementById("convert").addEventListener("click", function() {
    // getValue();
    var makeFah = function(x) {
      printResult.innerHTML = (Math.round(x*9/5+32)) + "&deg Fahrenheit";
    }

    var makeCel = function(x) {
      printResult.innerHTML = Math.round((x-32)*5/9) + "&deg Celcius";
    }

    var converted;

    if (document.getElementById("fah").checked) {
      value = document.getElementById("input").value;
      console.log(value);
      converted = makeFah(value);
    } else {
      value = document.getElementById("input").value;
      console.log(value);
      converted = makeCel(value);
    }
  });
});
