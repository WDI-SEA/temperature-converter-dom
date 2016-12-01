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
            document.querySelector('.unitId').innerHTML = "&deg; Celsius";
        }
        else {
            document.querySelector('.unitId').innerHTML = "&deg; Fahrenheit";
        }
    });

    //Convert user input to alternate unit type and return result
    document.querySelector('.convert').addEventListener('click', function() {
            if ($('#radioF').is(':checked')) {
                convertedTemp = (Math.round(((userTemp * (9/5)) + 32)) + "&deg;F");
                console.log(convertedTemp);
                document.querySelector('.result').innerHTML = (userTemp + "&deg;C converts to " + convertedTemp);
            }
            else {
                convertedTemp = (Math.round(((userTemp - 32) * (5/9))) + "&deg;C");
                console.log(convertedTemp);
                document.querySelector('.result').innerHTML =(userTemp + "&deg;F converts to " + convertedTemp);
            }
        });

    //Clears user input and result
    $('.clear').click(function(){
        $(this).closest('form').find("input[type=text], textarea").val("");
        $('.result').html("");
        userTemp = NaN;
    });
});
};
