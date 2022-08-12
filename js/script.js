let title = document.querySelector("h1")
let input = document.getElementById("input")
let btnSubmit = document.getElementById("submit")
let btnClear = document.getElementById("clear")
let output = document.querySelector("p")
let radioBtnC = document.querySelector('input[id="cel"]')
let radioBtnF = document.querySelector('input[id="far"]')

btnSubmit.addEventListener("click", function (e) {
    if(radioBtnF.checked === true ) {
    let convertedToC = Math.round((input.value - 32) * 0.5556)
     if(convertedToC > 38) {
        output.style.backgroundColor = "red"
        output.style.color = "white"
        output.innerText = `${convertedToC} \u00B0C`
    } else if (convertedToC < 16) {
        output.style.backgroundColor = "blue"
        output.style.color = "white"
        output.innerText = `${convertedToC} \u00B0C`
    } else {
        output.style.backgroundColor = "lightgray"
        output.style.color = "black"
        output.innerText = `${convertedToC} \u00B0C`
    }}else if(radioBtnC.checked === true) {
        let convertedToF = Math.round((input.value * 1.8 + 32))
        if(convertedToF > 100) {
        output.style.backgroundColor = "red"
        output.style.color = "white"
        output.innerText = `${convertedToF} \u00B0C`
    } else if (convertedToF < 60) {
        output.style.backgroundColor = "blue"
        output.style.color = "white"
        output.innerText = `${convertedToF} \u00B0C`
    } else {
        output.style.backgroundColor = "lightgray"
        output.style.color = "black"
        output.innerText = `${convertedToF} \u00B0C`
    }
    } else {
        output.style.backgroundColor = "lightgray"
        output.style.color = "black"
        output.innerText = "Please select \u00B0F or \u00B0C for your input"
    }}
    )

btnClear.addEventListener("click", function(e) {
    input.value = "";
    output.innerText = "";
    output.style.backgroundColor = "lightgray"
})



