/* PSEUDO CODE */



/* ELEMENT SELECTION */
const btnSubmit = document.getElementById("submit-input")
console.log(btnSubmit)
const userInput = document.getElementById("input-field")
console.log(userInput)
const clearButton = document.getElementById("clear")
console.log(clearButton)
const radioButtons = document.querySelectorAll('input[type="radio"]')
console.log(radioButtons)
const tempDisplay = document.getElementById('temperature')
const tempDisplayColor = document.getElementById('temperature-display')

/* EVENT LISTENERS */

btnSubmit.addEventListener('click', submitInput) // for submission
clearButton.addEventListener('click', clearInputField) // clearing text field


/* MAIN FUNCTION */

function submitInput(e) {
    /* store value of input */
    e.preventDefault()
    console.log('click')

    /* catching incorrect input */
    if (typeof userInput.value !== "Number") {
        tempDisplay.innerText = `What you entered was not a Number!`
    }

    const tempValue = userInput.value;
    console.log(tempValue)
    
    checkRadioValue(tempValue)
}



function checkRadioValue(tempValue) {
    /* check if C or K is selected */
    for (i = 0; i < radioButtons.length; i++) {
        console.log(radioButtons[i].checked)
        // set radio button logic prior to form submission:
        if (radioButtons[i].checked == true) {
             const userChoice = radioButtons[i].value
            console.log(userChoice)
            determineConversion(userChoice, tempValue)
        } 
    }
}
    // Apply Formula and Display with radio button Value
    // DISPLAY THE VALUE IN THE H2 CONTAINER
function determineConversion (userChoice, tempValue) {
    let displayText = "";
    switch(userChoice) {
    
        case "C":
        displayText = ftoC(tempValue) 
        console.log(displayText)
        tempDisplay.innerText = `${displayText} Celcius`
        break;

        case "F":
        displayText = ctoF(tempValue)
        console.log(displayText)
        tempDisplay.innerText = `${displayText} Farenheit`
        break;
    
        default:
            console.log("C or F were not selected.")
            break;
    }
} 

function clearInputField(e) {
    userInput.value = ""
}


function ftoC (tempValue) {
    celciusTemp = (tempValue - 32) * (5/9)
    if (celciusTemp <= 0) {
        tempDisplayColor.style.backgroundColor = "#9EE4D9"
    }
    if (celciusTemp > 32) {
        tempDisplayColor.style.backgroundColor = "red" }
    return celciusTemp
}

function ctoF (celcius) {
    fahrenTemp = (celcius * 9/5) + 32
    if (fahrenTemp <= 32) {
        tempDisplayColor.style.backgroundColor = "#9EE4D9"
    }
    if (fahrenTemp > 89.6) {
        tempDisplayColor.style.backgroundColor = "red" }
    return fahrenTemp
}
