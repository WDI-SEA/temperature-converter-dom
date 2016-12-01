var userText;
var userTemp;
var convertedTemp;
window.onload = function() {
$(document).ready(function() {

    //Acquire and convert user input to integer
    document.getElementById('userInput').addEventListener('keyup', function() {
        userTemp = parseInt(this.value);
    });

    //Modify unit type based on radio button status
    $('input[type=radio][name=radioButton]').change(function () {
        if (this.value == "fahrenheit") {
            document.querySelector(".unitId").innerHTML = "&deg; Celsius";
        }
        else {
            document.querySelector(".unitId").innerHTML = "&deg; Fahrenheit";
        }
    });

    //Convert user input to alternate unit type and return result
    $('.convert').click(function() {
        if ($('#radioF').is(':checked')) {
            convertedTemp = (Math.round(((userTemp * (9/5)) + 32)) + "&deg;F");
            console.log(convertedTemp);
            $('.result').html(userTemp + "&deg;C converts to " + convertedTemp);
         }
         else {
             convertedTemp = (Math.round(((userTemp - 32) * (5/9))) + "&deg;C");
             console.log(convertedTemp);
             $('.result').html(userTemp + "&deg;F converts to " + convertedTemp);
         }
    });

    $('.clear').click(function(){
        $(this).closest('form').find("input[type=text], textarea").val("");
        $('.result').html("");
    });
});
};
