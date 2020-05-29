// temperature conversion submit
var convertTemp = document.querySelector(".submitButton");
convertTemp.addEventListener("click", function(e) {
    function temperature(value) {
        return (((value - 32) * 5) /9).toFixed(0) + "°C";
    }
    var result = temperature(document.querySelector(".tempInput").value);
    var resultText = document.querySelector(".resultHeader");
    resultText.innerText = result;
    var resultColor = document.querySelector(".bigContainer");
    if (document.querySelector(".tempInput").value >= 80) {
        resultColor.style.backgroundColor = "#b23a48";
    } else if (document.querySelector(".tempInput").value <= 32) {
        resultColor.style.backgroundColor = "#008dd5"
    } else {
        resultColor.style.backgroundColor = "#ffecd1"
    }
})

//clear button sweet action
var clearTemp = document.querySelector(".clearButton");
clearTemp.addEventListener("click", function(e) {
    document.querySelector(".resultHeader").innerText = null;
    document.querySelector(".tempInput").value = null;
})