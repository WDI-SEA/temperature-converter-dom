window.addEventListener("DOMContentLoaded", () => {

    //main math function
    function convertTemp(temp, currentUnit, targetUnit) {
        //return same units or convert to Celcius
        temp = parseFloat(temp)
        if(currentUnit === targetUnit){
            return temp
        } else if(currentUnit === "°F") {
            temp = (temp - 32) * 5/9
        } else if(currentUnit === "K") {
            temp = temp - 273.15
        }
        //change result div color
        if(temp <= 0) {
            resultContainer.style.backgroundColor = "blue"
            resultContainer.style.color = "white"
        } else if (temp >= 38) {
            resultContainer.style.backgroundColor = "red"
            resultContainer.style.color = "yellow"
            
        } else {
            resultContainer.style.backgroundColor = "lightgray"
            resultContainer.style.color = "black"

        }
        //return Celcius or convert to target
        if(targetUnit === "°C"){
            return temp
        } else if(targetUnit === "K"){
            temp = temp + 273.15
            return temp
        } else {
            temp = temp * 9/5 + 32
            return temp
        }
    }

    //Grab some stuff
    let resultContainer = document.querySelector("#result-container")
    let result = document.getElementById("result")
    let form = document.querySelector("form")
    
    //click the convert button
    document.getElementById("submit").addEventListener("click", () => {
        
        let inputTemp = document.getElementById("temp-input").value
        //check for valid input and then do everything
        if(inputTemp) {
            //get units from radio buttons
            let inputRadio = document.querySelectorAll(".input-unit")
            let outputRadio = document.querySelectorAll(".output-unit")
            let inputUnit = ""
            let outputUnit = ""
        
            for(let radio of inputRadio){
                if(radio.checked){
                    inputUnit = radio.value
                }
            }
    
            for(let radio of outputRadio){
                if(radio.checked){
                    outputUnit = radio.value    
                }
            }
            
            //get the converted temp, round to 2 decimals, and display the result
            let outputTemp = convertTemp(inputTemp, inputUnit, outputUnit)
            outputTemp = Math.round(outputTemp*100)/100
            result.innerText = outputTemp + outputUnit
            
        } else {
            alert("That's not a temperature.")
        }
    })


    //click the clear button
    document.getElementById("clear").addEventListener("click", () => {
        result.innerText = ""
        resultContainer.style.backgroundColor = "lightgray"
        resultContainer.style.color = "black"
    })

})


