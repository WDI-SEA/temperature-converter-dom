console.log('Hello, front end');


//need to grab the input value from the input box

//need to enable clear button to reset result


// FAHRENHEIT TO CELSIUS FUNCTION
function fahrToCel(fahrenheit){
    let fTemp = fahrenheit
    const fToC = (fTemp - 32) * 5 / 9;
    return fToC
}
console.log(fahrToCel(32))


// CELSIUS TO FAHRENHEIT FUNCTION
function celToFahr(celsius){
    let cTemp = celsius;
    const cToF = cTemp * 9 / 5 + 32;
    return cToF
}
console.log(celToFahr(32))


//CONSOLE LOGS THE VALUE OF THE INPUT (works if in html file add: value=20)
let inputValue = document.querySelector('input')

console.log(inputValue.value)

// let title = document.querySelector('h1')
// title.innerHTML = "Temp Conv"

// RESULT TEXT
let result = document.getElementsByClassName('result')

console.log(result.innerTEXT)