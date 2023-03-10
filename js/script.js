console.log('Hello, front end');

const tempInput = document.querySelector("#tempInput")
const conversionResult = document.querySelector("#conversionResult")
const radioFahrenheit = document.querySelector("#fahrenheit")
const radioCelsius = document.querySelector("#celsius")
const fire1 = document.querySelector("#fire1")
const fire2 = document.querySelector("#fire2")
const resultsdiv = document.querySelector("#resultsdiv")
const snow1 = document.querySelector("#snow1")
const snow2 = document.querySelector("#snow2")

let conversionFToC = function (temperature) {
    return (temperature - 32) * (5/9)
}

let conversionCToF = function (temperature) {
    return (temperature * (9/5)) +32
}

const submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", function(){
    fire1.style.display = "none"
    fire2.style.display = "none"
    snow1.style.display = "none"
    snow2.style.display = "none"
    if (tempInput.value === "") {
        conversionResult.textContent = "Please enter a value"
    } else { 
        if (radioFahrenheit.checked) {
            conversionResult.textContent = `${conversionFToC(tempInput.valueAsNumber).toFixed(2)} °C`
            if (conversionFToC(tempInput.valueAsNumber) > 29){
                fire1.style.display = "block"
                fire2.style.display = "block"
                resultsdiv.style.background = "red"
            } else if (conversionFToC(tempInput.valueAsNumber) < 18){
                resultsdiv.style.background = "blue"
                snow1.style.display = "block"
                snow2.style.display = "block"
            } else (
                resultsdiv.style.background = ""
            )
        } else {
            conversionResult.textContent = `${conversionCToF(tempInput.valueAsNumber).toFixed(2)} °F`
            if (conversionCToF(tempInput.valueAsNumber) > 85){
                fire1.style.display = "block"
                fire2.style.display = "block"
                resultsdiv.style.background = "red"
            } else if (conversionCToF(tempInput.valueAsNumber) < 65){
                resultsdiv.style.background = "blue"
                snow1.style.display = "block"
                snow2.style.display = "block"
            } else (
                resultsdiv.style.background = ""
            )
        }
    }
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", function(){
    tempInput.value = ""
    conversionResult.textContent = ""
})



console.dir(resultsdiv)
console.dir(conversionResult)

