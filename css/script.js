let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
};

// CLEAR Button

/*let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click, () => {
    inputs.forEach(input => input.value = '');
});
*/