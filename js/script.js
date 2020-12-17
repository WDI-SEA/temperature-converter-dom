document.addEventListener('DOMContentLoaded') , () =>{

const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

celciusInput.addEventListener('input', function() {
    console.log(celciusInput.value);