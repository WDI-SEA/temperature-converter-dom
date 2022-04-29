console.log('Hi Grace!!<3');


let temp = 0
let unit = "Fahrenheit"

const changeTempUnit = function(tempParam, unitParam) {
    if(unitParam === "Fahrenheit") {
        let conversion = (tempParam * 9/5) + 32
        return conversion
    } else if(unitParam === "Celcius") {
        let conversion = (tempParam - 32) * 5/9
        return conversion
    }
}
console.log(changeTempUnit("32", "Celcius"), 'CHANGE TEMP')

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').addEventListener('click', function(){
        console.log('submit click')
        const userInput = document.querySelector('#user-input')
        // console.log(userInput.value)
        temp = userInput.value
        let answer = changeTempUnit(temp, unit)
        const resultEl = document.querySelector('#input')
        resultEl.innerText = answer
    })
    document.querySelector('#clear').addEventListener('click', function(){
        console.log('clear click')
    })
    document.querySelector('#fahrenheitBtn').addEventListener('click', function(event){
        // console.log('fahrenheit', event.target.value)
        unit = event.target.value
        console.log(unit, "unit value")
    })
    document.querySelector('#celciusBtn').addEventListener('click', function(event){
        // console.log('celcius', event.target.value)
        unit = event.target.value
        console.log(unit, "unit value")
    })
})

//ABOVE WAS FROM THE REVIEWs
// THIS WAS MY ATTTEMPT!!!!!!!
// let celcius = 'user-input'
// let fahrenheit = 'user-input'
// const userInput = document.querySelector('#user-input')
// submit.addEventListener('click', function() {
//     if (celciusBtn.checked === true) {
//         let celciusSum = (fahrenheit -32)/1.8 
//         let roundedCelcius = Math.round(celciusSum)
//         console.log(roundedCelcius)
//     } else if (fahrenheitBtn.checked === true) {
//         let fahrenheitSum = (celcius * 2)+30
//         let roundedFahrenheit = Math.round(fahrenheitSum)
//         console.log(roundedFahrenheit)
//     }
// })

// const redColorChange = () => {
//     p.classList.add('hot-color')
// }
// fahrenheitBtn.addEventListener('click', function() {
//     redColorChange();
// })
// const blueColorChange = () => {
//     p.classList.add('cool-color')
// }
// celciusBtn.addEventListener('click', function() {
//     blueColorChange();
// })
// clear.addEventListener('click', function(){
//     return('');
// })