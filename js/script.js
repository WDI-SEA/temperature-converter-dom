
let resultValue = document.getElementById('resultH2')
let inputField = document.getElementById('fTemp')
let submitButton = document.getElementById('submit-button')
let clearButton = document.getElementById('clear-button')
let resultBox = document.getElementById('result-box')


submitButton.addEventListener('click', function enter () {
    // console.log('submit button pressed')
    let fChecked = document.getElementById('f-radio').checked
    let cChecked = document.getElementById('c-radio').checked
    if(fChecked) {
        resultValue.innerText = (Number(inputField.value)-32)*5/9 +" ° C";

        if(Number(inputField.value) <= 32) {
            resultBox.style.backgroundColor = 'blue'
        } else if (Number(inputField.value) >= 90) {
            resultBox.style.backgroundColor = 'red'
        } else {
            resultBox.style.backgroundColor = 'gray'
        }

    } else if(cChecked) {
        resultValue.innerText = Number(inputField.value)*9/5+32 +" ° F";

        if(Number(inputField.value) <= 0) {
            resultBox.style.backgroundColor = 'blue'
        } else if (Number(inputField.value) >= 32) {
            resultBox.style.backgroundColor = 'red'
        } else {
            resultBox.style.backgroundColor = 'gray'
        }
    }
})

inputField.addEventListener("keyup", function(event) {
    if(event.code === "KeyQ") { // used q to test b/c enter was working automatically in chrome
        event.preventDefault()
        submitButton.click()
    }
})

clearButton.addEventListener('click', function () {
    // console.log('clear button pressed')
    inputField.value = ""
    resultValue.innerText = ""
})

