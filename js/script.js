console.log('Hello, front end');
let temp = 0
let unit = "Farenheight" // setting to defaul, will overwrite

//  8
//from google: (32°F − 32) × 5/9 = 0°C
//from google: (0°C × 9/5) + 32 = 32°F
const changeTempUnit = function(temParam, unitParam) {
    if(unit === "Farenheight"){
        // 9. if unit is f, change to c
        let conversion = (temParam * 9/5) +32
        return conversion
    } else if (unit === "Celsius") {
        // 10. if unit is c, change to f
        let conversion = (temParam -32) * 5/9
        return conversion
    }
}
console.log (changeTempUnit ("32", "Celsius"), 'CHANGE TEMP <<<')


document.addEventListener("DOMContentLoaded", function(){
    // 1.select the submit btn
    document.querySelector("#btn-submit").addEventListener("click", function(){
        console.log("submit click")
        // 4. save the user input to variable 
        const userInput = document.querySelector("#input") 
        // console.log(userInput.value, '<<<' )

        // 7. set gloval temp to value of user Input
        temp = userInput.value

        //  11. change temp unit
        let answer = changeTempUnit(temp, unit)

        // 5. select the result p tag and set text
        const resultEl = document.querySelector("#result")
        resultEl.innerText = answer //userInput.value)

    })
    //  2. select the clear && console log click
    document.querySelector("#btn-clear").addEventListener("click", function(){
        console.log('clear click')
    })
    // 3. select radio && add click
    document.querySelector("#degrees-f").addEventListener("click", function(event){
        // console.log("click on f", event.target.value)
        // 6. set the global unit variable(set value first in html!) to the event targe value
        unit = event.target.value
        console.log(unit, "unit value")
        // 
    })
    document.querySelector("#degrees-c").addEventListener("click", function(event){
        // console.log("click on c", event.target.value)

        unit = event.target.value
        console.log(unit, "unit value")
    })
    
})
