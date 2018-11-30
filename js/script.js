const cToF = function(c) {
    return Math.round((c*1.8)+32);
};
const fToC = function (f) {
    return Math.round((f-32)/1.8);
};
var resultText = document.querySelector("#resultText");

document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");
    var submitBtn = document.querySelector("#tempNum");
    submitBtn.addEventListener("submit", function(e) {
      e.preventDefault();
      var temp = document.getElementById("tempInputNum").value;
      if (isNaN(temp)) {
        resultText.innerHTML = "Invalid input";
      } else if (document.querySelector("#f").checked) {
          var result = fToC(temp);
          resultText.innerHTML = `${temp}&deg; Fahrenheit is ${result} &deg; Celsius`;
      } else if (document.querySelector("#c").checked) {
          var result = cToF(temp);
          resultText.innerHTML = `${temp}&deg; Celsius is ${result}&deg; Fahrenheit`;
      } else {
          resultText.innerHTML = "Please choose starting temperature type";
      };
    });
    
    var clearBtn = document.querySelector("#clearBtn");
    clearBtn.addEventListener("click", function() {
        document.querySelector("#tempInputNum").value = null;
        resultText.innerHTML = null;
        ["f", "c"].forEach(function(id) {
            document.getElementById(id).checked = false;
          });
          return false;  
    });
});