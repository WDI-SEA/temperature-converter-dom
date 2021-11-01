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
        if (convertedToCels <= 0){
            answerDiv.style.backgroundColor = "blue"
        }
        else if (convertedToCels >= 38){
            answerDiv.style.backgroundColor = "red"
        }
    }
    else if (celsius.checked){
        let convertedToFahr = tempInputNum * 1.8 + 32
        answerDiv.innerText = `${convertedToFahr} °F`
        if (convertedToFahr <= 32){
            answerDiv.style.backgroundColor = "blue"
        }
        else if (convertedToFahr >= 100){
            answerDiv.style.backgroundColor = "red"
        }
    }
})

let clearPage = () => {
    answerDiv.innerText = ''
    tempInput.value = ''
}

clearPageButton.addEventListener('click', clearPage)
})