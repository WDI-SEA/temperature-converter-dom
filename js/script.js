console.log('Hello, front end');

let temp = 0
let unit = "Fahrenheit"

// (32F - 32) * 5/9 = 0C
// (0C 8 9/5) + 32 = 32F

const changeTempUnit = function(tempParam, unitParam) {
    if (unitParam === "Fahrenheit"){
        let conversion = (tempParam * 9/5) + 32
        return conversion
    } else if (unitParam === "Celsius"){
        let conversion = (tempParam - 32) * 5/9
        return conversion
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btn-submit").addEventListener("click", function(){
        console.log("submit click")

            const userInput = document.querySelector("#input")
            // console.log(userInput.value, '<<<')

            temp = userInput.value

            let answer = changeTempUnit(temp,unit)

            const resultEl = document.querySelector("result")
            resultEl.innerText = answer
    })
    document.querySelector("btn-clear").addEventListener("click", function(){
        console.log("clear click")
    })
    document.querySelector("degrees-f").addEventListener("click", function(){
        // console.log("click on f", event.target.value)
        unit = event.target.value
        console.log(unit, "unit value")
    })
    document.querySelector("degrees-c").addEventListener("click", function(){
        // console.log("click on c", event.target.value)
        unit = event.target.value
        console.log(unit, "unit value")
    })

})