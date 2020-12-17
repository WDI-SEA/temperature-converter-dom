document.addEventListener('DOMContentLoaded') , () =>{}

const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
function celciusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.nodeValue);
    const fTemp = (cTemp*(9/5))+32; 
    const kTemp = cTemp + 273.15; Math.ceil(kTemp);
    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
 }
function fahrenheitToCelciusAndKelvin() {
    const Ftemp = parseFloat(fahrenheitInput.nodeValue);
    const cTemp = (fTemp - 32) * (5/9);
    const KTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = cTemp;
    kelvinInput.value = kTemp;
}
celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);