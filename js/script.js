// assigns output display to a variable
let display = document.querySelector('.output .display')

// on Submit click, takes input field variable, does F to C calculation and assigns C label
tempInp.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("Submit").click();
    }
})

Submit.addEventListener('click', function(e) {
    switch(forBegin.value) {
        case "Fahrenheit":
            // from F to C
            if(toEnd.value === "Celcius") {
                display.innerHTML = Math.round((tempInp.value - 32) * (5/9));
                display.innerHTML += " ℃";
            } 
            // from F to K
            else if (toEnd.value === "Kelvin") {
                display.innerHTML = Math.round((tempInp.value - 32) * (5/9) + 273.15);
                display.innerHTML += " K";
            } 
            // from F to F
            else if (toEnd.value === "Fahrenheit") {
                display.innerHTML = "Please select a valid conversion.";
            }
            else {
                display.innerHTML = "Please select an ending unit."
            }
            break;
        case "Celcius":
            // from C to F
            if(toEnd.value === "Fahrenheit") {
                display.innerHTML = Math.round((tempInp.value * (9/5)) + 32);
                display.innerHTML += " ℉";
            }
            // from C to K
            else if (toEnd.value === "Kelvin") {
                display.innerHTML = Math.round(tempInp.value + 273.15);
                display.innerHTML += " K";
            } 
            // from C to C
            else if (toEnd.value === "Celcius") {
                display.innerHTML = "Please select a valid conversion.";
            }
            else {
                display.innerHTML = "Please select an ending unit."
            }
            break;
        case "Kelvin":
            // from K to F
            if(toEnd.value === "Fahrenheit") {
                display.innerHTML = Math.round((tempInp.value - 273.15) * (9/5) + 32);
                display.innerHTML += " ℉";
            }
            // from K to C
            else if (toEnd.value === "Celcius") {
                display.innerHTML = Math.round(tempInp.value - 273.15);
                display.innerHTML += " ℃";
            }
            // from K to K
            else if (toEnd.value === "Kelvin") {
                display.innerHTML = "Please select a valid conversion."
            }
            else {
                display.innerHTML = "Please select an ending unit."
            }
            break;
        // Select to Select
        default:
            display.innerHTML = "Please select a valid input.";
            break;
    }
    if(tempInp.value === "") {
        display.innerHTML = "Please enter a value.";
    }
})

// on Clear click, clears input field and output display
Clear.addEventListener('click', function(e) {
    display.innerHTML = "";
    tempInp.value = "";
    forBegin.value = startB.value;
    toEnd.value = startE.value;
})



