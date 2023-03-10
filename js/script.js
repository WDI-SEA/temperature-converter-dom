// creates a variable for the user input for temperature
const tempInput = document.querySelector('#tempInput')
console.log(tempInput)

//create variable for clearing
const clear = document.querySelector("#clear")
console.log(clear)

// creates a variable for the convert button
const convert = document.querySelector('#convert')
console.log(convert)

// this is to change the conversion value
const changeMeasurement = document.querySelector('#changeMeasurement')
console.log(changeMeasurement)



// this is function that will taken tempInput and convert it and push it
convert.addEventListener('click', function(){
    if (changeMeasurement.value == 0) {
    const convertedTemp = Math.round((tempInput.value - 32) * 5/9);
    const para = document.querySelector('p').innerHTML = convertedTemp + '&#8451'
    console.log(para)
 }else if (changeMeasurement.value == 1) {
    const convertedTemp = Math.round((tempInput.value * 9/5) + 32);
    const para = document.querySelector('p').innerHTML = convertedTemp + '&#8457'
    console.log(para)
 }
})

// this is function that will taken tempInput and convert it and push it
clear.addEventListener('click', function(){
    const para = document.querySelector('p').innerHTML = ''
    console.log(para)
})