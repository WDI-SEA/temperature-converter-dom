var input = document.getElementById('temperature-input');
var form = document.getElementById('converter');
var result = document.getElementById('result-output');

function conversionFtoC(n) {
    return (n - 32) / 1.8;
}

function conversionCtoF(n) {
    return n * 1.8 + 32;
}

function interpretInput(s) {
    var inputNum;
    var conversions = {
        'f'         : [conversionFtoC, "Celcius"],
        'fahrenheit': [conversionFtoC, "Celcius"],
        'c'         : [conversionCtoF, "Fahrenheit"],
        'celcius'   : [conversionCtoF, "Fahrenheit"],
    }

    var words = s.split(" ");
    for (var i = 0; i < words.length; i++)
         if (words[i].trim().toLowerCase() in conversions) {
            for (var j = i; j >= 0; j--) {
                if (!isNaN(parseFloat(words[j])) && isFinite(words[j])) {
                    inputNum = words[j];
                }
            }
            return [conversions[words[i]][0](inputNum), conversions[words[i]][1]]
         }

}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    result.innerText = interpretInput(input.value)[0].toFixed(1) + " degrees " + interpretInput(input.value)[1] + '!';
})