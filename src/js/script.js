document.addEventListener('DOMContentLoaded', function() {
  var tempForm = document.getElementById('tempForm');
  var temperature = document.getElementById('temperature');
  var outputDiv = document.getElementById('outputDiv');

  tempForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(temperature.value);
    var convertedTemp = (temperature.value - 32) * (5 / 9);
    // console.log(convertedTemp);
    outputDiv.innerHTML = convertedTemp;
  });
});

