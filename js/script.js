window.addEventListener("DOMContentLoaded", () => {
    
    let tempToConvertInputField = document.querySelector("input:not=(#userTempToConvert)")


document.getElementById("submit").addEventListener("click", () => {
    
    let temptoConvert = tempToConvertInputField.value

    let farrenButton = document.querySelector("#tempFaren")
    let celciusButton = document.querySelector("#tempCelcius").checked

    if (farenButton) {
        let convertedToCelcius = (temptoConvert - 32) * (1.8)
        ansDiv.innerText = convertedToCelcius 
    } else if (celciusButton) {
        let convertedtoFaren = (tempToConvert * 1.8) + 32
        ansDiv.innerText = convertedtoFaren
    } else {
        ansDiv.innerText = "Click a radio button to convert temp"
    }    
    
    document.querySelector(#clear).addEventListener("click", () => {
        tempToConvertInputField.value = ""
    })
})
})