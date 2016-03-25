document.getElementById('button1').addEventListener('click', function() {
    function convertToC() {
        var fTempVal = (document.getElementById('value').value);
        console.log(fTempVal);

        var cTempVal = (fTempVal - 32) * (5 / 9);
        console.log(cTempVal);
        document.getElementById('output').textContent = Math.round(cTempVal);
    }


    convertToC();

    //Attempt to have the div turn blue for freezing temperatures, red for scorching temperatures.
    if (document.getElementById('output').innerHTML < 0) {
        document.getElementById('output').style.backgroundColor ="blue";
        } else {
        document.getElementById('output').style.backgroundColor ="red";

   }


});

document.getElementById('button2').addEventListener("click", function() {
    document.getElementById('value').value = "";
    document.getElementById('output').textContent = "";

})