let submitF = document.querySelector('#convertF')
let submitC = document.querySelector('#convertC')
let input = document.querySelector("#input")
let result = document.querySelector("#resultText")
let clear = document.querySelector("#clear")

function toCel(a){
    resultText.innerText = input.value
    return ((input.value - 32) * (5/9))
}

function toFar() {
    resultText.innerText = input.value
    return ((1.8 * input.value) + 32)
}

submitF.addEventListener("click", toFar)
submitC.addEventListener("click", toCel)
clear.addEventListener("click", function(e){
    result = result.style.visibility = "hidden"
})

