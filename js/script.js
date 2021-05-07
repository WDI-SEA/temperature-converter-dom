window.addEventListener("DOMContentLoaded", () => {


let inputVal = document.querySelector("#field") 


document.querySelector("#submit").addEventListener("click", () => {
let tempToConvert = inputVal.value
let farenButton = document.querySelector("#fahrenheit").checked
let celsiusButton = document.querySelector("#celsius").checked
let resultsDiv = document.querySelector("#results") 

if (farenButton) {
    let fToCelsius = ((tempToConvert - 32) * 5556e-4)
    resultsDiv.innerText = fToCelsius
} else if (celsiusButton) {
    let cToFahren = ((tempToConvert * 18e-1)+ 32)
    resultsDiv.innerText = cToFahren
} else {
    resultsDiv.innerText = " "
}
})
resultsDiv.appendChild(tempToConvert.innerText)

document.querySelector("#clear").addEventListener('click', () => {
        inputVal.value = " "
})


})

