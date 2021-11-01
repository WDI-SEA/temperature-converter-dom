window.addEventListener("DOMContentLoaded", () =>{ 
let tempInput = document.querySelector("input[type='text']")
let submitButton = document.querySelector('#submit')
let clearPageButton = document.querySelector('#clear')
let fahrenheit = document.querySelector('#fahr')
let celsius = document.querySelector('#cels')
let answerDiv = document.querySelector('#convertedAnswer')

console.log(fahrenheit, celsius)
submitButton.addEventListener('click', () => {
    let tempInputNum = tempInput.value
    if (fahrenheit.checked){
        let convertedToCels = (tempInputNum-32) * (5/9)
        answerDiv.innerText = `${convertedToCels} °C`
        console.log(answerDiv.innerText)
    }
    else if (celsius.checked){
        let convertedToFahr = tempInputNum * 1.8 + 32
        answerDiv.innerText = `${convertedToFahr} °F`
    }
})

let clearPage = () => {
    answerDiv.innerText = ''
    tempInput.value = ''
}

clearPageButton.addEventListener('click', clearPage)
})