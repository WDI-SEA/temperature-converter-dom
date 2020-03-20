console.log('Hello, front end');
var form = document.querySelector("form");
var div = document.getElementById("tempResult")
var far = document.getElementById("far")



form.addEventListener('submit', function (e){

    e.preventDefault();

    var tempToConvert = form.elements["input"].value;

    if (far.checked == true) {
        var convertedTemp = (tempToConvert - 32) * (5/9);
        div.textContent = convertedTemp.toFixed(1) + "°C";
        if(convertedTemp <= 0){
            document.getElementById("tempResult").style.backgroundColor = "blue";
        } else {
            document.getElementById("tempResult").style.backgroundColor = "red";

        }
    }
        else {
            var convertedTemp = (tempToConvert * 1.8) + 32;
            div.textContent = convertedTemp.toFixed(1) + "°F";
        
         if(convertedTemp <= 32){
             document.getElementById("tempResult").style.backgroundColor = "blue";
         } else {
             document.getElementById("tempResult").style.backgroundColor = "red";

         }
    }    
    
    
});