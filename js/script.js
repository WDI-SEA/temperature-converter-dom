console.log('Hello, front end');

let convertNumber = document.querySelector("#number-to-convert")
let submitButton = document.querySelector("#submit-button")
let clearButton = document.querySelector("#clear-button")
let fRadio = document.querySelector("#fahrenheit-input")
let cRadio = document.querySelector("#celsius-input")
let resultText = document.querySelector("#result")
let mainForm = document.querySelector("#form")
let resultDiv = document.querySelector("#result-div")
//resultDiv = document.getElementById('result-div')
let inputType = document.getElementById("input-type")
let celsiusRadio = document.querySelector("#celsius-input")
let fahrenheitRadio = document.querySelector("#fahrenheit-input")

submitButton.addEventListener("click",function(){
    //console.log(convertNumber.value)
    let inputNum = parseInt(convertNumber.value)
    console.log(inputNum)
    if(cRadio.checked){
        //math to convert from c to f
        resultText.textContent = ((inputNum-32) * 5/9) + "°F"
    }else if(fRadio.checked){
        resultText.textContent = ((inputNum * 9/5) + 32) + "°C"
    }
})

let setDivText = (text) => {
    resultText.textContent = text
}

//changes background to freezing colors
let freezingDisplay = () => {
    resultDiv.style.backgroundColor = "blue"
    resultText.style.color = "lightblue"
}

//changes background to normal colors
let defaultDisplay = () => {
    resultDiv.style.backgroundColor = "gray"
    resultText.style.color = "black"
}

mainForm.addEventListener('submit', function(){
    let inputNum = parseInt(convertNumber.value)
    let freezingC = 0
    let freezingF = 32
    if(cRadio.checked){
        //check if freezing
        if(inputNum <= freezingF){
            freezingDisplay()
        }else{
            defaultDisplay()
        }
        //converting users input to celsius
        inputNum = Math.round(((inputNum-32) * 5/9) * 100) / 100
        setDivText(inputNum + "°C")
    }else if(fRadio.checked){
        //check if freezing
        if(inputNum <= freezingC){
            freezingDisplay()
        }else{
            defaultDisplay()
        }
        //converting users input to fahrenheit
        inputNum = Math.round(((inputNum * 9/5) + 32) * 100) / 100
        setDivText(inputNum  + "°F")
    }
    //stops page from refreshing after submitting
    event.preventDefault()
})

clearButton.addEventListener('click', function(){
    convertNumber.value = ""
    defaultDisplay()
})

celsiusRadio.addEventListener('click', function() {
    inputType.textContent = "in fahrenheit"
})

fahrenheitRadio.addEventListener('click', function() {
    inputType.textContent = "in celsius"
})