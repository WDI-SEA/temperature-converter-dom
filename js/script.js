let temp = document.getElementById('tempInput');
let submitBtn = document.getElementById('submit');
let clearBtn = document.getElementById('clear');
let display = document.getElementById('display');
// let radioBtns = document.getElementsByClassName('tempType');

const convert = (temp) => {
    let indicator = document.querySelector('input[name="tempType"]:checked')
    if (indicator.value === 'F') {
        var newTemp = Math.round((temp - 32) * (5 / 9));
        display.textContent = newTemp + "\xB0C";
    } else if (indicator.value === 'C') {
        var newTemp = Math.round((temp * 9 / 5) + 32);
        display.textContent = newTemp + "\xB0F";
    }
}
//Which coversion based on radio button
// let convert = (temp) => {
//     //convert sFtoC
//     if(radioBtns[0].checked === true) { 
//         var newTemp = Math.round((temp - 32) * (5/9));
//         display.textContent = newTemp + "\xB0C";
//     } else {
//         var newTemp = Math.round((temp * 9/5) + 32);
//         display.textContent = newTemp + "\xB0F";
//     }
// }

//Using radiobtn for submit
// submitBtn.addEventListener("click", (e) => {
//     convert(temp.value);
// });

submitBtn.addEventListener("click", (e) => {
    convert(temp.value);
});

clearBtn.addEventListener("click", (e) => {
    temp.value = '';
    display.textContent = '';
})