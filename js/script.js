
// let tempToConvertInput = document.getElementById('tempToConvert').value;

// document.getElementById('convertTemp').addEventListener('click', () => {
//     let tempToConvert = tempToConvertInput.value

//     let farenheitButton1 = document.getElementById('tempInFarenheit')
//     let celsiusButton1 = document.getElementById('tempInCelsius')

//     let convertedTemp = document.getElementById('convertedTemp')

//     if (farenheitButton1.checked && celsiusButton2.checked) {
//         let convertedToCelsius = (tempToConvertInput - 32) * (5/9)
//         convertedTemp.innerText = convertedToCelsius
//     } else if (celsiusButton1.checked && farenheitButton2.checked) {
//         let convertedToFarenheit = (tempToConvertInput * 1.8) + 32
//         convertedTemp.innerText = convertedToFarenheit
//     } else {
//         convertedTemp.innerText = "Click to convert"
//     } 

//     document.getElementById('convertTemp').addEventListener('click', () => {
//         tempToConvertInput.innerText = ""
//         })
//     })
// ^ my attempt, did not work quite right

let temp = 0
let unit = "Farenheit"

const convertTempUnit = function(tempParameter, unitParameter){
    if(unit === "Farenheit"){
        let conversion = (tempParameter * 9/5) + 32
        return conversion
    } else if(unit === "Celsius"){
        let conversion =(tempParameter -32) * 5/9
        return conversion
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('convertTemp').addEventListener('click', function(){
        
        const userInput = document.getElementById('tempToConvert')

        temp = userInput.value

        let answer = convertTempUnit(temp, unit)

        const convertedTemp1 = document.getElementById('convertedTemp')

        convertedTemp1.innerText = answer

    })
    document.getElementById('clearInput').addEventListener('click', function(){
        console.log('clear')
    })
    document.getElementById('tempInFarenheit').addEventListener('click', function(event){
       
        unit = event.target.value
        console.log(unit, "unit value")
    })
    document.getElementById('tempInCelsius').addEventListener('click', function(){
        console.log('click on C')
    })
})