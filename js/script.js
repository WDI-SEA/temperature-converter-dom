let titleText = document.getElementById('title')
let input = document.getElementById('input')
let btnContainer = document.getElementById('btn-container')
let ftoc = document.getElementById('ftoc')
let ctof = document.getElementById('ctof')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')
let tempArea = document.getElementById('temp-text')

// F to C conversion
let ftocConversion = function() {
    let preConValue = input.value
    let postConValue = (preConValue - 32) * (5/9)
    tempText.innerText = postConValue
}

ftoc.addEventListener('click', ftocConversion)


// C to F conversion
let ctofConversion = function() {
    let preConValue = input.value
    let postConValue = (preConValue * 9 / 5) + 32
    tempText
    .innerText = postConValue
}

ctof.addEventListener("click",ctofConversion)

//clear button
clear.addEventListener('click', function(e){
    input.value = ''
    tempText.innerText = "Temp goes here"
})




/* my attempt
let theUserInput = document.getElementById('temp')

console.log(theUserInput)
if document.getElementById('Farenheit') {
    let result = (theUserInput − 32) × 5/9
    return result
} else if (document.getElementById('Celcius')) {
    let result = (theUserInput × 9/5) + 32
    return result
}
let convertedTemp = document.getElementById(result)
console.log(result)
*/