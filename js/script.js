var degreesTo;

document.addEventListener("DOMContentLoaded", function() {
    document.forms['tempform'].addEventListener("submit", function(e) {
        document.getElementById("convert").addEventListener("click", function() {
        console.log("Pressed")
        e.preventDefault();
        var input = document.forms['tempform'].value;
        var degreesFrom = parseInt(input);
        var degreesTo = 0;
        var units = document.forms['tempform'].units.value;
            if ( units === 'F') {
        // convert from F to C
        degreesTo = (degreesFrom - 32) / 1.8;
        } else {
        // convert from C to F
        degreesTo =degreesFrom * 1.8 + 32;
        }
        document.getElementById("output").textContent = degreesTo;
    });
})
})
