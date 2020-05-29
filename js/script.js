var form = document.querySelector("form");
var div = document.querySelector("#tempResult");

form.addEventListener("submit", function(e) {
    // prevent form from automatic refresh on submit
    e.preventDefault();

    // get user submitted value
    var tempToConvert = form.elements["input"].value;

    // check for celcius or faren 
    if (form.elements["faren"].checked === true) {
        var convertedTemp = (tempToConvert - 32) * (5/9);
        div.innerText = convertedTemp;
        if (convertedTemp < 33) {
            div.style.backgroundColor = "blue";
        } else {
            div.style.backgroundColor = "red";
        }
    } else  {
        var convertedTempCel = (tempToConvert * 1.8) + 32;
        div.innerText = convertedTempCel;
    }
    
})
  
form.elements["clear"].addEventListener("click", function(e) {
    form.elements["input"].value = "";
    div.innerText = "";
})