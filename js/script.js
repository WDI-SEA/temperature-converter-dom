
let input = document.getElementById("temperatureInput");

function determineTemperature() {
    
    output = document.getElementById("outputBox")

    let x = input.value;

    if (x !== "") {
        let valueFahrenheit = parseFloat(x); //make a num from string
        if (!isNaN(valueFahrenheit)) {
            let valueCelcius = (valueFahrenheit - 32) * (5 / 9);
            let valueKelvin = valueCelcius + 273.15;

            let isCelcius = document.getElementById("radioCelcius").checked;
            
            let unit, outputValue;

            if(isCelcius) {
                unit = "C";
                outputValue = valueCelcius;
            }
            else {
                unit = "K";
                outputValue = valueKelvin;
            }

            output.innerHTML = outputValue.toFixed(2) + "° " + unit;
            return;
        }
    }
    output.innerHTML = "";
}

function clearTemperature() {
    input.value = "";
}






//  



