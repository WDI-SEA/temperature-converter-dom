let temp = 0
let unit = 'Farenheit' //setting to defaul, will overwrite

const changeTempUnit = function(tempParam, unitParam) {
    if (unitParam === 'Farenheit') {
        //if unit is f, change to c
        let conversion =(tempParam * 9/5) + 32
        return conversion
    } else if (unitParam === 'Celsius') {
        //if unit is c, change to f
        let conversion = (tempParam - 32) * 5/9
        return conversion
    }
}
console.log(changeTempUnit('32','Celsius'), 'CHANGE TEMP')

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit-button').addEventListener('click', function() {
        console.log('submit button clicked')
        const userInput = document.querySelector('#user-input')
        //console.log('user typed in: ' + userInput.value)

        //set global temp to value of userInput
        temp = userInput.value

        let answer = changeTempUnit(temp, unit)

        //select the result p tag and set text
        const resultTemp = document.querySelector('#result')
        resultTemp.innerText = answer
    })//event listener
    //select the clear && console log click
    document.querySelector('#clear-button').addEventListener('click', function(){
        console.log('clear button clicked')
        //select radio buttons
        //radio.checke
    })
    //select farenheit radio &add click
    document.querySelector('#degrees-f').addEventListener('click', function(event){
        //console.log('click on f', event.target.value)
        //set the global unit variable to the event target
        unit = event.target.value
        console.log(unit, 'unit value')
    })
    //select celsius radio &add click
    document.querySelector('#degrees-c').addEventListener('click', function(event){
        //console.log('click on c', event.target.value)
        unit = event.target.value
        console.log(unit, 'unit value')

    })
})//DOM
