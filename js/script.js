
document.addEventListener('DOMContentLoaded', function() {
  var tempForm = document.getElementById('tempForm');
  var temperature = document.getElementById('temperature');
  var outputDiv = document.getElementById('outputDiv');
  var reset = document.getElementById('reset');

  tempForm.addEventListener('submit', function(ev) {
    event.preventDefault();
    // console.log(temperature.value);
    var convertedTemp = (temperature.value - 32) * (5 / 9);
    // console.log(convertedTemp);
    outputDiv.innerHTML = convertedTemp.toFixed(2);
  });
});

 

//Create a single page using HTML/CSS that contains an input field and a submit button, all within a form element.
//Additionally, add a clear button
//When the submit button is pressed, convert the inputted temperature from F to C using the appropriate conversion formula (may need to Google it)


//User puts in a value into the text field
//User clicks on button
//The page gets updated with the converted temperature value.
//Clicking a "Clear" button resets the text field