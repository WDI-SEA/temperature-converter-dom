console.log('Hello, front end');

//function to convert to fahrenheit from celsius
function toFahrenheit(inputTemp) {
    return Math.round(inputTemp*1.8+32)
}

//function to convert to celsius from fahrenheit
function toCelsius(inputTemp) {
    return Math.round((inputTemp-32)/1.8)
}
//on submit, change the given number from fahrenheit to celsius or vice versa based on the chosen input temperature unit
document.querySelector('#submit-button').addEventListener('click', function() {
    //make sure input exists. Assign it to variable "myValue"
    let output=""
    if (document.querySelector('#input-temp').value) {
        //grab input value "myValue"
        let myValue = document.querySelector('#input-temp').value
        console.log(myValue)

        //check if the given temp is f or c 
        if (document.querySelector('#degF').checked) {
            console.log("Input temperature is Fahrenheit")
            //convert temperature to celsius
            let convertedTemp= toCelsius(myValue)
            output = `${myValue}°F equals ${convertedTemp}°C`
        } else if (document.querySelector('#degC').checked) {
            console.log("Input temperature is Celsius")
            //convert temperature to fahrenheit
            let convertedTemp= toFahrenheit(myValue)
            output = `${myValue}°C equals ${convertedTemp}°F`
        } else {
            alert("You must choose Fahrenheit or Celsius")
        }
        //if weather is cold (<10 deg C or 50 deg F), add freezing class to output. Otherwise, add scorching
        if ((myValue<10 && document.querySelector('#degC').checked) || (myValue<50 && document.querySelector('#degF').checked)) {
            document.querySelector('#conversion-output').classList.add('freezing')
        } 
        else {
            document.querySelector('#conversion-output').classList.add('scorching')
        }
        document.querySelector('#final-temp').innerHTML = output
    } else {
         alert("You must input a valid number")
    }

   
console.log(output)
})

//clear button needs to reset all values
document.querySelector('#clear-button').addEventListener("click", function() {
    //grab an element 
    
    //for the input and output sections, set value and html to empty string
    document.querySelector('#input-temp').value = ""
    document.querySelector('#final-temp').innerHTML = ""
    //for the radio buttons, if it is checked, uncheck it.
    if (document.querySelector('#degF').checked= true) {
        document.querySelector('#degF').checked= false 
    } else if (document.querySelector('#degC').checked= true) {
        document.querySelector('#degC').checked= false
    } 
    document.querySelector('#conversion-output').classList.remove("freezing")
    document.querySelector('#conversion-output').classList.remove("scorching")
    //and reset it 
    //do for input temp, radio buttons, and final temp
})
