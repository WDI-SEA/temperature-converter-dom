const temperatureForm = document.getElementById('temperature-form');
temperatureForm.addEventListener('submit', function (e) {
e.preventDefault();
convertTemperature();
});

function convertTemperature() {
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const resultElement = document.querySelector('.result');
const temperature = parseFloat(temperatureInput.value);

if (!isNaN(temperature)) {
    const unit = unitSelect.value;
    let convertedTemperature, colorClass;

    if (unit === 'celsius') {
        convertedTemperature = (temperature - 32) * 5/9;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature * 9/5) + 32;
    } else {
        convertedTemperature = temperature - 273.15; // Convert to Celsius for Kelvin
    }

    resultElement.textContent = `Temperature in ${unit.charAt(0).toUpperCase() + unit.slice(1)}: ${convertedTemperature.toFixed(2)}`;
    
    if (convertedTemperature <= 0) {
        colorClass = 'freezing';
    } else if (convertedTemperature >= 100) {
        colorClass = 'scorching';
    } else {
        colorClass = '';
    }

    resultElement.className = `result ${colorClass}`;
} else {
    resultElement.textContent = 'Please enter a valid temperature.';
    resultElement.className = 'result';
}
}

function clearInput() {
const temperatureInput = document.getElementById('temperature');
const resultElement = document.querySelector('.result');
temperatureInput.value = '';
resultElement.textContent = '';
resultElement.className = 'result';
}

