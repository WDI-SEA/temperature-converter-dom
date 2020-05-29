var temperatureInput = document.getElementById('user-input');
var fradio = document.getElementById('f-button');
var cradio = document.getElementById('c-button');
var result = document.getElementById('display-result');
var form = document.getElementById('converter');

/*************************
 * Fahrenheit to Celcius *
 ************************/
function ftc(num) {
    var celcius = ((num - 32) * (5 / 9));
    return celcius.toFixed(1);
}

/*************************
 * Celcius to Fahrenheit *
**************************/
function ctf(num) {
    var fahrenheit = ((num * 9 / 5) + 32);
    return fahrenheit.toFixed(1);
}

/*******************************************
 * by default, 'submit' refreshes the page *
********************************************/
document.getElementById('converter').addEventListener( 'submit', function(e) {
    e.preventDefault();
    if (fradio.checked) {
        var conversion = ftc(temperatureInput.value);
        console.log(conversion);
        result.innerText = conversion;
    } else {
        var conversion = ctf(temperatureInput.value);
        console.log(conversion);
        result.innerText = conversion;
    }
})

document.getElementById('clear-button').addEventListener( 'click', function(e) {
    result.innerText = "";
    form.reset();
})