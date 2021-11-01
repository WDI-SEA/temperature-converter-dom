window.addEventListener("DOMContentLoaded", () =>{ 
let tempInput = document.querySelector("input[type='text']")
let submitButton = document.querySelector('#submit')
let clearPageButton = document.querySelector('#clear')
let fahrenheit = document.querySelector('#fahr').checked
let celsius = document.querySelector('#cels').checked
let answerDiv = document.querySelector('#convertedAnswer')

submitButton.addEventListener('click', () => {
    let tempInputNum = tempInput.value
    if (fahrenheit){
        let convertedToCels = (tempInputNum-32) * (5/9)
        answerDiv.innerText = `${convertedToCels} °C`
    }
    else if (celsius){
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