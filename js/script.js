var convertTemp = document.querySelector(".submit");
convertTemp.addEventListener("click", function(e) {
    e.preventDefault();
    function temperature(value) {
        return ((value - 32) *5) /9;
    }
    result = temperature(document.querySelector(".input").value);
    //so i wanted t use convertedTemp but that was already used and i guess you can use it here again either :(
    var resultTemp = document.createElement("h2");
    resultTemp.className = "Converter_Temp" 
    resultTemp.innerText = result;
    document.body.appendChild(resultTemp);
})