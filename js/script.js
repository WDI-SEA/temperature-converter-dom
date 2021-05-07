window.addEventListener("DOMContentLoaded", () => {
    // setup buttons and tags we will affect
    let submitButton = document.getElementById("submit")
    let clearButton = document.getElementById("clear")
    let resultDiv = document.getElementById("resultBox")
    let resultPTag = document.getElementById("output")

    // if submit is clicked convert input to F or C
    submitButton.addEventListener("click", () => {
        // get value entered by user
        let numToConvert =  document.getElementById("userInput").value
        let convertedNum = 0

        // check which radio button is selected
        if (document.getElementById("fahrenheit").checked) {
            // convert number to fahrenheit
            convertedNum = convertToF(numToConvert)
            resultPTag.innerText = `${convertedNum}°F`
        } else {
            // convert number to celcius
            convertedNum = convertToC(numToConvert)
            resultPTag.innerText = `${convertedNum}°C`
        }
    })

    // if clear is clicked wipe input area
    clearButton.addEventListener("click", () => {
        let numToConvert =  document.getElementById("userInput")
        numToConvert.value = ""
    })

    // functions for converting
    function convertToF(num) {
        num = ((num * 1.8) + 32)
        hotOrCold(num, "f")
        return num
    }

    function convertToC(num) {
        num = ((num - 32) * (5 / 9))
        hotOrCold(num, "c")
        return num
    }

    // takes in converted temperature and unit of measure
    function hotOrCold(tempNum, tempUnit) {
        if ((tempUnit == "f" && tempNum <= 32) || (tempUnit == "c" && tempNum <= 0)) {
            // freezing
            resultDiv.className = "blue"
        } else if ((tempUnit == "f" && tempNum >= 212) || (tempUnit == "c" && tempNum >= 100)) {
            // scorching
            resultDiv.className = "red"
        } else {
            // reset class
            resultDiv.className = "gray"
        }
    }
})