//Variables example: submit button, clear.

let form = document.getElementsByClassName("form")
let submit = document.getElementById("submit")
let clear = document.getElementById("clear")
let tempInput = document.getElementById("temp")
let tempF = document.getElementById("tempF")
let tempC = document.getElementById("tempC")

submit.onclick = function convertTemp(valNum) {
    const temps = document.querySelectorAll('input[name="Temp"]');
    valNum = parseFloat(tempInput.value);
    

    
    for (const t of temps) {
        if (t.checked) {
            if(t.value == "Fahrenheit") {
                tempInput.value = (valNum - 32) * 5 / 9;
                tempF.checked = false;
                tempC.checked = true;
                console.log(tempInput.value)
                break;
            } else if(t.value == "Celcius"){
                tempInput.value =  valNum * 9 / 5 + 32;
                tempC.checked = false;
                tempF.checked = true;
                console.log(tempInput.value)
                break;
            } else {
                console.log("error")
            }
        } 
    }
}


