console.log('hello DOM!!🔪')

// event listeners are selecting them with id
const usersInput = document.getElementById('users-input').value
console.log(usersInput)

const submitButton = document.querySelector('.submit-button')
console.log(submitButton)
//listens for submit button click
//grabs number from usersInput
//grabs tempselection
//if f then function faren(usersInput)

//else if c then function cels()
//else function kel()
// const submitButton = document.querySelector('.submit-button')

//event listener on wireframe orange takes in f or c


const cToF = (num) => {
    c2F = (num * 9/5) + 32
    console.log('${c2F} in fahrenheit')
}
const cToK = (num) => {
    c2K = num + 273.15
    console.log(`${c2K} in fahrenheit`)
}
const fToC = (num) => {
    f2C = ((num - 32) * (5.9));
    console.log(`${f2C} in fahrenheit`)
}
const fToK = (num) => {
    f2K = ((num - 32) * (5/9) + 273.15);
    console.log(`${f2K} in fahrenheit`)
}
const kToF = (num) => {
    k2F = ((num - 273.15) * (9/5) + 32)
    console.log(`${k2F} in fahrenheit`)
}
const kToC = (num) => {
    k2C = num - 273.15
    console.log(`${k2C} in fahrenheit`)
}
const tempImg = document.querySelector('#temp-img')
const tempResults= document.querySelector('#temp-results')


let possibleTempRadio = Array.from(document.querySelectorAll('.possible-temps'))
console.log(possibleTempRadio)



document.querySelector('.submit-button').addEventListener('click', function(){
    console.log('jelo')
    if (possibleTempRadio[0].checked == true) {
        console.log(usersInput)
    }
})

// function buttonClick(event){
//     if (possibleTempRadio[0].checked == true){
//         console.log('work motherfucker')
//     }else{
//         console.log('wtf')
//     }
//     console.log(event)
// }


//onclick function takes in the inputs
//output

// console.log(convertedNumber, usersInput, possibleTemperatures)