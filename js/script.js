
//this was anna tryig to debug my git error
console.log("hi")
window.addEventListener("DOMContentLoaded", () => {

    let tempToConvertInputField = document.querySelector("#TemperatureConverter")
   
   
    document.getElementById("submit").addEventListener("click", () => {
       
        let tempToConvert = tempToConvertInputField.value
        let farenheitButton = document.querySelector("#tempFarenheit").checked
        let celciusButton = document.querySelector("#tempCelcius").checked
        
    let ansDiv = document.querySelector("#ans")

        if (farenheitButton) {
            let convertedToCelcius =(tempToConvert - 32) * (5/9)
             ansDiv.innerText = convertedToCelcius
         } else if (celciusButton) {
            let convertedToFarenheit = (tempToConvert * 1.8) + 32
             ansDiv.innerText = convertedToFarenheit
         } else {
             ansDiv.innerText = "Convert Temp!"
        }
        document.getElementById("#clear").addEventListener("click", () => {
            tempToConvertInputtField.value = ""
        })

    })
    
})      
