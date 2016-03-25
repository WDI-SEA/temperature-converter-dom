var input = document.getElementById('temperature-input');
var button = document.getElementById('convert-button');
var result = document.getElementById('result-output');

var whatevernumisininput = 75;
function conversionFtoC(n) {
    return (n - 32) / 1.8;
}

button.addEventListener('click', function(element) {
    result.innerText = conversionFtoC(input.value).toFixed(1) + " degrees in Celcisus";
})