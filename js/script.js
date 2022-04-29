console.log('Hello, front end');

let temp = 0
let unit = "Farenheight" // setting to default , will overwrite 
//from google: (32°F − 32) × 5/9 = 0°C
//from google: (0°C × 9/5) + 32 = 32°F

const changeTempUnit = function(tempParam, unitParam) {
    if(unitParam === "Farenheight"){
        // if unit is f, change to c
        let conversion = (tempParam * 9/5) + 32
        return conversion 
    } else if(unitParam === "Celsius"){
        // if unit is c, change to f
        let conversion = (tempParam - 32) * 5/9
        return conversion
    }
}
console.log(changeTempUnit("32", "Celsius"), 'CHANGE TEMP <<<')

document.addEventListener("DOMContentLoaded", function(){
    // BABY STEPS: log interaction happened
    // select the submit btn && add event listener
    document.querySelector("#btn-submit").addEventListener("click", function(){
        console.log("submit click")
        // save the user input to variable
        const userInput = document.querySelector("#input")
        // console.log(userInput.value, '<<<')

        // set globabl temp to value of userInput
        temp = userInput.value

        let answer = changeTempUnit(temp, unit)
        
        //select the result p tag and set text to be global temp 
        const resultEl = document.querySelector("#result")
        resultEl.innerText = answer
    })
    // select the clear && console log click
    document.querySelector("#btn-clear").addEventListener("click", function(){
        console.log("clear click")
        // select radio buttons
        // radioBtn.checked = false
    })
    // select radio & add click
    document.querySelector("#degrees-f").addEventListener("click", function(event){
        // console.log("click on f", event.target.value)
        // set the global unit variable to the event target value
        unit = event.target.value
        console.log(unit, "unit value")
    })
    // select celsius radio
    document.querySelector("#degrees-c").addEventListener("click", function(event){
        // console.log("click on c", event.target.value)
        unit = event.target.value
        console.log(unit, "unit value")
    })
    
})