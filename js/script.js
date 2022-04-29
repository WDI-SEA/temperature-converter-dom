console.log('Hello, front end');

function convertFtoC(Farenheit) {
    return (Farenheit - 32) * .5556
}


document.querySelector("#input-button").addEventListener("click", function(){
    const userInput = document.querySelector("#user-input")
 const result = convertFtoC(userInput.value)
    const resultLabel = document.querySelector("#result")
    resultLabel.innerHTML = "The temperature is " + result + " degrees!"
})
