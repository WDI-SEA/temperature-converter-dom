
function tempConversion(temp, outputType) {
    let finalTemp = 0
    let cTemp = 0
    let kTemp = 0
    cTemp = (temp - 32)*5/9
    kTemp = cTemp + 273.14
    if (outputType === "c") {
        return cTemp
    } else {
        return kTemp
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    // declare variables and connections
    const cCheck = document.querySelector('#c-checkbox')
    const kCheck = document.querySelector('#k-checkbox')
    const buttonSubmit = document.querySelector("#submit-button")
    const buttonClear = document.querySelector("#clear-button")
    const userInput = document.querySelector("#user-input")
    const finalTemp = document.querySelector("#finalTemp")
    const tempDiv = document.querySelector(".temp-div")
    let tempType = "c"
 
    
    // default settings
    cCheck.defaultChecked = true
    tempDiv.style.backgroundColor = "white"

    
    //functions to toggle/unclick other checkbox
    cCheck.addEventListener("click", function(){
        kCheck.checked = false
        tempType = cCheck.value
    })
    kCheck.addEventListener("click", function(){
        cCheck.checked = false
        tempType = kCheck.value
    })
    
    //button to clear
    buttonClear.addEventListener('click', function(){
        userInput.value = 32
        finalTemp.innerHTML = tempConversion(userInput.value,tempType) + " °" + tempType.toUpperCase()
        tempDiv.style.backgroundColor = "white"
    })

    //submit button
    buttonSubmit.addEventListener('click', function(){
        finalTemp.innerHTML = tempConversion(userInput.value,tempType) + " °" + tempType.toUpperCase()
        
        //sets results box to color based on water freezing/boiling temps
        if (userInput.value < 0) {
            tempDiv.style.backgroundColor = "blue"
        } else if (userInput.value > 212) {
            tempDiv.style.backgroundColor = "red"
        } else {
            tempDiv.style.backgroundColor = "white"
        }
    })
}) // DOM