// add an event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {

    // gets input field value
    let tempToConvertInputField = document.querySelector("input[type='text']")

    // add a click event listener to our submit button
    document.getElementById("submit").addEventListener("click", () => {
        // Get inputed temp from user
        let tempToConvert = tempToConvertInputField.value

        // check for radio button checks
        let farenButton = document.querySelector("#tempFaren").checked
        let celciusButton = document.querySelector("#tempCelcius").checked

        // capute ans div
        let ansDiv = document.querySelector("#ans")
        
        if (farenButton) {
            let convertedToCelcius = (tempToConvert - 32) * (5/9)
            ansDiv.innerText = convertedToCelcius
        } else if (celciusButton) { // else if that temp is C, convert to F
            let convertedToFaren = (tempToConvert * 1.8) + 32
            ansDiv.innerText = convertedToFaren
        } else {
            ansDiv.innerText = "Click a radio button to convert temp!"
        }

        // add a click event listener to our clear button
        document.querySelector("#clear").addEventListener("click", () => {
            tempToConvertInputField.value = ""
        })        
    })    
})

    
