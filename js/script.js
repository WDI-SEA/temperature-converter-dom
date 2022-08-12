//Variable declarations
let input = document.querySelector('#input')
let fToC = document.querySelector('#fToC')
let cToF = document.querySelector('#cToF')
let clear = document.querySelector('#clear')
let result = document.querySelector('#result')

//add event listeners

fToC.addEventListener("click", function(e){
    let preconversion = input.value;
    let postconversion = (preconversion - 32) * (5/9);
    result.innertext = postconversion
    console.log(result.innertext)
})

cToF.addEventListener("click", function(e){
    let preconversion = input.value;
    let postconversion = ((preconversion * 5/9) + 32);
    result.innertext = postconversion
})

clear.addEventListener("click", function(e){
    result.innertext = ''
    input.value = ''
})


























// //function conversions
// function convertF2C(initialTemp) {
//     return (initialTemp - 32) *5/9
// }

// function convertC2F(initialTemp) {
//     return (initialTemp * 9/5 + 32)
// }

// function convertK2C(input) {
//     return (input - 273.15)
// }

// function convertC2K(input) {
//     return (input + 273.15)
// }






//my work
// let input = document.getElementById('input')
// let clearButton = document.getElementById('clear').addEventListener("click", function(){
//     clear(input)
// })
// let selection1 = document.getElementById('selection1')
// let selection2 = document.getElementById('selection2')
// let submitButton = document.getElementById('submit').addEventListener("click", function(){
//     getInputValue();
//     if (selection1.value === 'celcius' && selection2.value === 'fahrenheit') {
//         answer = convertC2F();
//         console.log(answer)
//     }
// })



// function clear (input) {
//     let value = input.value
//     console.log(value) 
// }
// function getInputValue(input){
//     let initalTemp = input.value
//     console.log(initalTemp)
// }