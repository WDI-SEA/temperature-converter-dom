console.log('Hello, front end');

const inputField = document.querySelector("#tempInput")
const clearButton = document.querySelector("#clear-button")
const submitButton = document.querySelector("#submit-button")
const answerSpan = document.querySelector("#answer")
console.dir(answerSpan)

submitButton.addEventListener("click", function() {
    const userInput = inputField.value;
    // console.dir(tempInput)
    const tempC = (Math.floor((userInput - 32) * 5 / 9))
        console.log(`${userInput} degrees Fahrenheit is ${tempC} degrees in Celsius`)
        answerSpan.innerHTML = tempC + " degrees Celsius"
    }
)

clearButton.addEventListener("click", function() {
    inputField.value = ""
    answerSpan.innerHTML = ""
})