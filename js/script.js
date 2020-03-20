let temp = document.getElementById('tempInput');
// let indicator = document.querySelector('input[name="tempType"]:checked');
let submitBtn = document.getElementById('submit');
let clearBtn = document.getElementById('clear');
let display = document.getElementById('display');
let radioBtns = document.getElementsByClassName('tempType');

// // const convert = () => {
// //     if (indicator.value === 'F') {
// //         console.log (temp.value - 32) * (5/9);
// //     } else if (indicator.value === 'C') {
// //         console.log (temp.value * 9/5) + 32;
// // }    

//Which coversion based on radio button
let convert = (temp) => {
    //convert sFtoC
    if(radioBtns[0].checked === true) { 
        var newTemp = Math.round((temp - 32) * (5/9));
        display.textContent = newTemp + "\xB0C";
    } else {
        var newTemp = Math.round((temp * 9/5) + 32);
        display.textContent = newTemp + "\xB0F";
    }
}

submitBtn.addEventListener("click", (e) => {
    convert(temp.value);
});

clearBtn.addEventListener("click", (e) => {
    temp.value = '';
    display.textContent = '';
})