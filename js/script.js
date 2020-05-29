// Zach's code. I was on the right track, but damn he did this faster than I did
//
// var submitButton = document.querySelector(".submit")
// submitButton.addEventListener("click", function() {
//     var inputtedVal = document.querySelector(".tempInput").value;
//     let fahrenheit = document.getElementById("fahrenheit");
//     let celsius = document.getElementById("celsius");

//     if (fahrenheit.checked === true) {
//         inputtedVal = (inputtedVal -32) * 5/9
//         console.log(inputtedVal + " degrees fahrenheit")
//     } else if (celsius.checked === true) {
//         inputtedVal = (inputtedVal)
//     }
// })


// My code doesn't work at the time of submission.
// But screw it. I spent 4.5 hours on it last night, and 1.5 this morning
// After submission, and after class today (5/29), I'll try to complete it and resubmit

// Lines 25-28: Listening for a click on the submit button,
// and assigning a variable to user input in the text field,
// and assigning variables to the two radio button options
document.getElementByClassName("submitButton").addEventListener("click," function(e) {
    var userInput = document.getElementById("numberProvided").value;
    var fahrenheitAnswer = document.getElementById("fahrenheit");
    var celsiusAnswer = document.getElementById("celsius");

// Lines 34-44: Checking that what the user entered is a number
// Checking which measurement has been selected
// Temperature equations for both conversion-directions
// Creating an element and filling it with the result of the equation
    if (userInput === integer || float) {
        if (fahrenheitAnswer.checked === true) {
            userInput = (userInput - 32) * 5/9
            var  answerF = document.createElement("h1")
            var resultDisplayedF = document.createTextNode(userInput)
            answerF.appendChild(resultDisplayedF)
        } else if (celsiusAnswer.checked === true) {
            userInput = (userInput * (9/5) + 32)
            var answerC = document.createElement("h1")
            var resultDisplayedC = document.createTextNode(celsiusAnswer)
            answerC.appendChild(resultDisplayedC)
        }

// Lines 48-51: Error message if the user did not enter a number, but some kind of text
    } else {
        var answerError = document.createElement("h1")
        var resultDisplayedError = document.createTextNode("You did not enter a temperature value")
        answerError.appendChild(resultDisplayedError)
    }
    
})