var userText;
var userTemp;
var convertedTemp;
$(document).ready(function(){

    $("#userInput").keyup(function(){
        userTemp = parseInt($(this).val());
    });

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
