const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num)  {
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.nodeValue);
    const fTemp = (cTemp*(9/5))+32; 
    const kTemp = cTemp + 273.15; 
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
 }
function fahrenheitToCelciusAndKelvin() {
    const Ftemp = parseFloat(fahrenheitInput.nodeValue);
    const cTemp = (fTemp - 32) * 5/9;
    const KTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}
function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat (kelvinInput.nodeValue);
    const cTemp = kTemp - 273.15;
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}
celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);