//Variables list

let submit = document.getElementById("submit")
let tempInput = document.getElementById("temp")
let tempF = document.getElementById("tempF")
let tempC = document.getElementById("tempC")


//Input from user 
//Pick a radio selection
//Convert F to C OR C to F AFTER Submit has been clicked
//Clear input with clear button

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

//clear button solve
//document.querySelector('#clear').addEventListner("click", () => {
    //tempconvertInputValue.value =""
//})