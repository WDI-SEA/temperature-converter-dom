//create variables (submit button, clear, input text)
//click events (submit [e.preventDefault]), console log
//conversions within click event
//console log
//manipulation to display on page
//click event for clear

// let iT = "temperature"
// let b1 = "Submit"
// let b2 = "Clear"
let iT = temperature
let b1 = document.getElementById("Submit");
let b2 = document.getElementById("Clear");

function convertTemperature(iT) {
    output  = (iT - 32 / 1.8)
    console.log(output)
    return(output)
}

// Click Event for Submit
b1.addEventListener("click", () => {
    let iT = document.getElementById("Temp").value;
    let result = convertTemperature(iT);
    // iT = document.getElementById("").innerText=result
})    
b2.addEventListener("click", () => {
    console.log("click")

})   

// convertTemperature()

// document.getElementById("Submit").innerText=`The temperature is ${output}` degrees Celsius!`

