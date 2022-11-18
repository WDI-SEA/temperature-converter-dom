
let degree = null;
let convert = document.getElementById('result');

function convertDegree() {
    degree = Number(document.getElementById('degrees').value);

    

    let inputType = document.getElementById("temperatures");
    let farenHeit = document.getElementById("Farenheit");
    let celsiUs = document.getElementById("Celsius");
    let kelVin = document.getElementById("Kelvin");

    let celsiusResult = (degree - 32) * 0.5556;
    let farenResult = (degree * 9/5) + 32;
    let kelvinResult = (degree - 273.15) * 9/5 + 32;
    const number = degree + 273.15;
    
    if(farenHeit.checked && inputType.value === "Farenheit" || celsiUs.checked && inputType.value === "Celsius" || kelVin.checked && inputType.value === "Kelvin") {
        convert.innerText = "whoops you need to select a different temperature type"
        } else if(inputType.value === "Farenheit" && celsiUs.checked) {
        convert.innerText = `${celsiusResult}°C`
        } else if(inputType.value === "Farenheit" && kelVin.checked) {
            convert.innerText = `${celsiusResult + 273.15}K`
        }  else if(inputType.value === "Celsius" && farenHeit.checked) {
            convert.innerText = `${farenResult}°F`
        } else if(inputType.value === "Celsius" && kelVin.checked) {
            convert.innerText = `${number}K`
        } else if(inputType.value === "Kelvin" && farenHeit.checked) {
            convert.innerText = `${kelvinResult}°F`
        } else {
            convert.innerText = `${degree - 273.15}°C`
        }  
        
        if(celsiusResult <=9) {
        convert.style.background = "blue"
        } else if(celsiusResult >= 30) {
        convert.style.background = "red"
        } else if(celsiusResult > 9) {
        convert.style.background = "grey"
            //this kind of doesnt work llol
            //43 celsius 
}
}



// let button = document.getElementById('button');

// button.addEventListener("click", function(e) {
// //     if(convert.innerText) < 15) {
//         document.body.style.backgroundColor = "blue"
//     } else {
//         console.log('hwao')
//     }
// 
