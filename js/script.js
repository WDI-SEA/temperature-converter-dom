// variable declarations to grab everything

let input = document.querySelector('#input')
let fToK = document.querySelector('#fToK')
let kToF = document.querySelector('#kToF')
let clear = document.querySelector('#clear')
let result = document.querySelector('#result')

fToK.addEventListener("click", function(e) {
    let preConversion = input.value
    let postConversion = (preConversion - 32) * (5/9)
    result.innerText = postConversion
})

kToF.addEventListener("click", function(e) {
    let preConversion = input.value
    let postConversion = (preConversion * 1.8) + 32
    result.innerText = postConversion
})

clear.addEventListener("click", function(e) {
    result.innerText = ''
    input.value = ''
})