const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')
const tempInput = document.querySelector('#tempInput')
const result = document.querySelector('#result')
const fahrenheit = document.querySelector('#F')
const celsius = document.querySelector('#C')

clear.addEventListener('click', function() {
    tempInput.value = null;
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
})

submit.addEventListener('click', function() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    if (tempInput.value.length == 0) {
        const textNode = document.createTextNode('Please enter a value');
        result.appendChild(textNode);
    } else if (fahrenheit.checked) {
        const celsius = (tempInput.value - 32) * 5/9
        const textNode = document.createTextNode(tempInput.value + ' ºF is equal to ' + celsius + ' ºC');
        result.appendChild(textNode);
    } else if (celsius.checked) {
        const fahrenheit = (tempInput.value * 9/5)+ 32
        const textNode = document.createTextNode(tempInput.value + ' ºC is equal to ' + fahrenheit + ' ºF');
        result.appendChild(textNode);
    } else {
        const textNode = document.createTextNode('Please choose a temperature scale')
        result.appendChild(textNode);
    }
})
