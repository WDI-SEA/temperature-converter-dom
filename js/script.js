const btn = document.querySelectorAll('.btn');
const output = document.querySelector('#output');
const tempInput = document.querySelector('#inputTemp');
const radioButtons = document.querySelectorAll('input[name="btn"]');

// btn.addEventListener('click', (event) => {
//     console.log()
//    const checkedBtn = document.querySelector('input[name="btn"]:checked').value;
//    console.log(checkedBtn);
// });
btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log()
       const checkedBtn = document.querySelector('input[name="btn"]:checked').value;
       console.log(checkedBtn);
    });
})
console.log(btn)

function clearInput() {
    tempInput.value = null
    document.querySelector('.fahrenheit').innerText = null
    document.querySelector('.celcius').innerText = null
    document.querySelector('.kelvin').innerText = null

}

tempInput.addEventListener("input", function(e) { 
    console.log(typeof tempInput.value)
if (document.querySelector('input[name="btn"]:checked')){
    switch(document.querySelector('input[name="btn"]:checked').value) {
        case "C":
            document.querySelector('.celcius').innerText = tempInput.value + " °C";
            document.querySelector('.fahrenheit').innerText = (tempInput.value  * 1.8) + 32 + " °F";
            document.querySelector('.kelvin').innerText = tempInput.value + 273.15 + " °K";
            break;
        case "F":
            document.querySelector('.fahrenheit').innerText = tempInput.value + " °F";
            document.querySelector('.celcius').innerText = (tempInput.value  - 32) / 1.8 + " °C";
            document.querySelector('.kelvin').innerText = ((tempInput.value  - 32) / 1.8) + 273.15 + " °K";
            console.log(typeof tempInput.value)
            break;
        case "K":
            document.querySelector('.kelvin').innerText = tempInput.value + " °K";
            document.querySelector('.celcius').innerText = tempInput.value - 273.15 + " °C";
            document.querySelector('.fahrenheit').innerText = ((tempInput.value  - 273.15) * 1.8) + 32 + " °F";
            console.log(tempInput.value)
            break;
    }
}

});
