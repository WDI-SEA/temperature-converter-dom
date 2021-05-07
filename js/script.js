
// Create Variables(submit, clear, input text)
//click event(submit)
//conversions within click event
//display on page(DOM Manipulation)
//add click event for clear button


// VARIABLES

let b1= document.getElementById("Submit");
let b2=document.getElementById('Clear');
function convertTemperature(iT) {
    output= (iT - 32 / 1.8)
    
    return(output)
}

//Click Event for Submit
b1.addEventListener('click', () => {
    let iT=document.getElementById('Temp').value;
    let result = convertTemperature (iT);
    //document.getElementById("").innerText=result
})
b2.addEventListener('click', () => {
    console.log('click')
})
    
// let celisus= farenheit - 32 % 1.8



// document.getElementById("Submit").innerText=`The temperature is ${celsius}` degrees Celsius!`