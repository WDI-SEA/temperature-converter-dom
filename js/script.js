// FAHRENHEIT TO CELSIUS FUNCTION
function fahrToCel(fahrenheit){
    let fTemp = fahrenheit
    const fToC = (fTemp - 32) * 5 / 9;
    return fToC
}

// CELSIUS TO FAHRENHEIT FUNCTION
function celToFahr(celsius){
    let cTemp = celsius;
    const cToF = cTemp * 9 / 5 + 32;
    return cToF
}

// SUBMIT BUTTON VARIABLE
let submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', submitValue);

function submitValue(){
    let select = document.getElementById('changeTo')
    let value = select.options[select.selectedIndex].value;
    let inputValue = document.querySelector('input')
    let endResult = document.getElementById('result')
    console.log(value)
    if(value === "C"){
     const result = fahrToCel(inputValue.value)
        console.log(result)
        endResult.innerText = `${result}° C`
    } else {
     const result = celToFahr(inputValue.value)
        console.log(result)
        endResult.innerText = `${result}° F`
    }  
}

let endResult = document.getElementById('result')
let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clearResult);

function clearResult(){
    endResult.innerText = ""
    
}

// let clearInput = document.querySelector('#tempImput')
// clearInput.addEventListener('click', clearTempInput)

// function clearTempInput(){
//     clearTempInput.innerText = ""
// }

