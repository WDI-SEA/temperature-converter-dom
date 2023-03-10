console.log('Hello, front end');


const returnButton = document.querySelector("#returnTemp")
const clearButton = document.querySelector("#getClear")
const userInput = document.querySelector("#userInput")
const answer = document.querySelector("#answer")


returnButton.addEventListener("click", function() {
    const inputValue = userInput.value;
    const tempAnswer = (Math.floor((inputValue - 32)* 5/9))
    console.log(inputValue)
    answer.innerHTML = "Celcius is " + tempAnswer
})

clearButton.addEventListener("click", function() {
    userInput.value = ""
    answer.innerHTML = "Celsius is "
})