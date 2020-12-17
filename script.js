document.addEventListener('DOMContentLoaded') , () =>{

const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

celciusInput.addEventListener('input', function() {
   const cTemp = celciusInput.value;
   const fTemp = (cTemp*(9/5))+32;
   console.log(fTemp);