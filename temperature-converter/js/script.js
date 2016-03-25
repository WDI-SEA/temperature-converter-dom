var input = document.getElementById('temperature-input');
var form = document.getElementById('converter');
var result = document.getElementById('result-output');

var whatevernumisininput = 75;
function conversionFtoC(n) {
    return (n - 32) / 1.8;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    result.innerText = conversionFtoC(input.value).toFixed(1) + " degrees in Celcisus";
})