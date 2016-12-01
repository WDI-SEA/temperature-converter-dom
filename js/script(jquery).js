var userText;
var userTemp;
var convertedTemp;
$(document).ready(function() {

    //Set inital unit type
    $('.unitID').html("&deg; Celsius");

    //Acquire and convert user input to integer
    $("#userInput").keyup(function() {
        userTemp = parseInt($(this).val());
    });

    //Modify unit type based on radio button status
    $('input[type=radio][name=radioButton]').change(function () {
        if (this.value == "fahrenheit") {
            $('.unitID').html("&deg; Celsius");
        }
        else {
            $('.unitID').html("&deg; Fahrenheit");
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

    //Clears user input and result
    $('.clear').click(function(){
        $(this).closest('form').find("input[type=text], textarea").val("");
        $('.result').html("");
    });
});
