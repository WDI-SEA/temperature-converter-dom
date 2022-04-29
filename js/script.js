
function tempConversion(temp, outputType) {
    let finalTemp = 0
    let cTemp = 0
    let kTemp = 0
    cTemp = (temp - 32)*5/9
    kTemp = cTemp + 273.14
    if (outputType === "c") {
        return cTemp
    } else {
        return kTemp
    } 
}

document.addEventListener('DOMContentLoaded', function() {

const cCheck = document.querySelector('#c-checkbox')
const kCheck = document.querySelector('#k-checkbox')
const buttonSubmit = document.querySelector("#submit-button")
const buttonClear = document.querySelector("#clear-button")
const userInput = document.querySelector("#user-input")
const finalTemp = document.querySelector("#finalTemp")

cCheck.defaultChecked = true

let tempType = "c"

cCheck.addEventListener("click", function(){
    kCheck.checked = false
    tempType = cCheck.value
})

kCheck.addEventListener("click", function(){
    cCheck.checked = false
    tempType = kCheck.value
})

buttonClear.addEventListener('click', function(){
    userInput.value = 32
    finalTemp.innerHTML = tempConversion(userInput.value,tempType) + " °" + tempType.toUpperCase()
})

buttonSubmit.addEventListener('click', function(){
    finalTemp.innerHTML = tempConversion(userInput.value,tempType) + " °" + tempType.toUpperCase()
})

console.dir(cCheck)
console.log(cCheck.checked)
}) // DOM