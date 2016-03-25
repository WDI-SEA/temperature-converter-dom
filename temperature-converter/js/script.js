var input = document.getElementById('temperature-input');
var form = document.getElementById('converter');
var result = document.getElementById('result-output');

function conversionFtoC(n) {
    return (n - 32) / 1.8;
}

function conversionCtoF(n) {
    return n * 1.8 + 32;
}

// returns an array of 2 items: the converted number and a string of the unit.
function interpretInput(s) {
    var inputNum;
    var conversions = {
        'f'         : [conversionFtoC, "Celcius"],
        'fahrenheit': [conversionFtoC, "Celcius"],
        'c'         : [conversionCtoF, "Fahrenheit"],
        'celcius'   : [conversionCtoF, "Fahrenheit"],
    }
    function isNum(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)    
    }

    var words = s.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].trim().toLowerCase() in conversions) {
            for (var j = i; j >= 0; j--) {
                if (isNum(words[j])) {
                    inputNum = words[j];
                }
            }
            return [conversions[words[i]][0](inputNum), conversions[words[i]][1]];
        } 
    }
    for (var i = 0; i < words.length; i++) {
        if (isNum(words[i])) {
            // Use F for default if no unit given
            return [conversions['f'][0](words[i]), conversions['f'][1]];            
        } else {
            return [0, "***** Okay there was a problem.\nFor some reason we couldn't find a number in your input.\nTry something like: '50 deg c in f'"];
        }
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    result.innerText = interpretInput(input.value)[0].toFixed(1) + " degrees " + interpretInput(input.value)[1] + '!';
})