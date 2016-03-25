document.getElementById('button1').addEventListener('click', function() {
    function convertToC() {
        var fTempVal = (document.getElementById('value').value);
        console.log(fTempVal);

        var cTempVal = (fTempVal - 32) * (5 / 9);
        console.log(cTempVal);
        document.getElementById('output').textContent = cTempVal;

    }

    convertToC();

    //Attempt to have the div turn blue for freezing temperatures, red for scorching temperatures.

//     if (convertToC > 38) {
//         document.getElementById('').style.backgroundColor = "red";{
//             else if ( convertToC < 40){
//                 document.getElementById("result").style.backgroundColor = "blue";;
//             }
//         }
//     }

});

document.getElementById('button2').addEventListener("click", function() {
    document.getElementById('value').value = "";
    document.getElementById('output').textContent = "";

})