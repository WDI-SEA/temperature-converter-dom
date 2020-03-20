document.addEventListener('DOMContentLoaded', function() {
  let tempertureForm = document.getElementById('temperatureForm');
  let temperature = document.getElementById('temperature');
  let tempDiv = document.getElementById('tempDiv');
  let reset = document.getElementById('reset');

  temperatureForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let convertedTemp = (temperature.value - 32) * (5 / 9);
    tempDiv.innerHTML = convertedTemp.toFixed(2);
  });
});