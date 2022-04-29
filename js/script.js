console.log('hello')

window.addEventListener('DOMContentLoaded', () => {

    const userInput = document.querySelector('#input')

    let temp = 0
    let unit = 'farenheit' //wil overwrite
    
    //conversions
    // f to c = (x - 32) * (5/9)
    // c to f = (x * 9/5) + 32
    // f to k = c + 273.15
    const changeTempUnit = function(tempParam, unitParam){
        if(unitParam === 'farenheit'){
            //if faren change to celsius
            let conversion = (tempParam * 9/5) + 32
            return conversion
        } else if (unitParam === 'celsius') {
            // cel to faren
            let conversion = (tempParam - 32) * 5/9
            return conversion
        } else if (unitParam === 'kelvin') {
            let conversion = (tempParam - 32) * 5/9 + 273.15
            return conversion
        }
    }
    console.log(changeTempUnit('32', 'celsius', 'CHNG <<<<<'))

    document.querySelector('#submit-btn').addEventListener('click', function(){
        // event for submit button
        console.log("subclicked") //check
    
        // get user input
        
        console.log(userInput.value,'<<<<') //check
        
        //set global temp to value of userInput
        temp = userInput.value

        let answer = changeTempUnit(temp, unit)

        // select result p tag set to be global temp
        const resultTxt = document.querySelector('#result')
        resultTxt.innerText = answer // innerText is a property

        // selecting the radio button and value
        document.querySelector('#farenheit').addEventListener('click', function(event){
            console.log(unit, 'unit value')
            unit = event.target.value
        })
        document.querySelector('#celsius').addEventListener('click', function(event){
            console.log(unit, 'unit value')
            unit = event.target.value
        })
        document.querySelector('#kelvin').addEventListener('click', function(event){
            console.log(unit, 'unit value')
            unit = event.target.value
        })


    })
    
    document.querySelector('#clear-btn').addEventListener('click', function(){
        console.log("clearclicked") //check
        userInput.value = ''
    }) // event for clear button

}) // end