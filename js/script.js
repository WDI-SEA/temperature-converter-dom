//FARENHEIT TO CELCIUS CONVERSION
function farenConversion(F){
        return (F -32) * 5/9;
}
//ATTACH BUTTON WITH DIV

let mainDiv = document.getElementById('myDiv');
let fButton = document.getElementById('radio-button-F');
let cButton = document.getElementById('radio-button-C');
let clearButton = document.getElementById('clear-button');

fButton.addEventListener('click', () => {
        fButton.checked = true;
        console.log(fButton.checked);
});
//Defining INPUT
let input = document.getElementById('temp-input');
let result = document.getElementById('result');

//CLICKING SUBMIT BUTTON
//add event listener to the submit button
//assign name to the input value
//return the rounded number with trim (so you don't have extra spaces) 
//push the result to the result div

let ready = document.querySelector('.submit-button');

        ready.addEventListener('click', e => {
        e.preventDefault();
        if (fButton.checked === true){
                let number = input.value;
                // console.log((number.trim() -32) * 5/9);
                let calculated = (((number.trim() -32) * 5/9));
                result.textContent = calculated += " C";
        }else {
                let number = input.value;
                // console.log((number.trim() * 9/5) + 32);
                let calculated = (((number.trim() * 9/5) + 32));
                result.textContent = calculated += " F";
        }
});

clearButton.addEventListener('click', e => {
        e.preventDefault();
       delete result.textContent;
});

