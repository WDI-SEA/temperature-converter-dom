document.addEventListener('DOMContentLoaded', function() {
  var tempForm = document.getElementById('tempForm');
  var temperature = document.getElementById('temperature');
  var outputDiv = document.getElementById('outputDiv');

  tempForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var convertedTemp = (temperature.value - 32) * (5 / 9);
    outputDiv.innerHTML = convertedTemp + " Degrees Celcius";
  });
});
