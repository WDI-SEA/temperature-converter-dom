// const form = document.querySelector('#form');
// const input = document.querySelector('#temperature')
// const display = document.querySelector('.display');
// const clear = document.querySelector('#clear')
// const valueOfInput = document.querySelector('input[name="genderS"]:checked').


// temperature.addEventListener('submit',function(e){
//     console.log('form submitted')
//     console.log(input.value)
//     input.value

//    farenheitToCelcius(input.value);

//    const result = docuement.createElement('p')
//    result.textContent = farenheightToCelcius(input.value);
//    display.appendChild(result);
//     e.preventDefault();
// });

// clear.addEventListener('click', function(e){
//     location.reload();
// }

// function farenheitToCelcius(userinput){
//     return(`${userinput} degrees F = ${(userinput - 32)*(5/9)C';
// }

// function farenheitToKelvin(userinput){
//     return(userinput - 32)*(5/9) + 273.15
// }
// location.reload()

let titleText = document.getElementById('title')
let input = document.getElementById('input')
let ftoc = document.getElementById('ftoc')
let ctof = document.getElementById('ctof')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')
let tempArea =document.getElementById('tempArea')
let tempText = document.getElementById('tempText')
let buttonContainer = document.getElementById('buttonContainer')

let ftocConversion = funtion() {
    let preConValue = input.value;
    let postConValue = (preConValue -32) * (5/9);
    tempText.innerText = postConValue
}

let ctofConversion = funtion() {
    let preConValue = input.value;
    let postConValue = (preConValue * (9/5)) + 32;
    tempText.innerText = postConValue
}

ftoc.addEventListener('click')

clear.addEventListener('click', fuction(e) {
    input.value = ''
    tempText.innerText = ''

})