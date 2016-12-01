
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

    var form = document.getElementById('conversionForm');
    var input = document.getElementById('quantity');
    var convertButton  = document.getElementById('convertButton');
    var resetButton = document.getElementById('resetButton');
    var fButton = document.getElementById('fButton');
    var cButton = document.getElementById('cButton');
    var tempDisplay = document.getElementById('tempDisplay');

    resetButton.addEventListener('click', function(){
      tempDisplay.innerHTML=" ";
    })

    resetButton.addEventListener('click', function(){
      quantity.value=" ";
    })





    form.addEventListener('submit', function(x){
      x.preventDefault();

      // console.log(input.value);
    tempDisplay.innerHTML = c(input.value);
    });

});

function c(f) {
  var c = (f - 32) * 5/9; {
  return(parseFloat(c).toFixed(2));
  }
}
