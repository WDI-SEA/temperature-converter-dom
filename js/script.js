console.log('hello DOM!!🔪')

// event listeners are selecting them with id
const usersInput = document.getElementById('users-input')
console.log(usersInput.value)

const submitButton = document.querySelector('#submit-button')
console.log(submitButton)
//listens for submit button click
//grabs number from usersInput
//grabs tempselection
//if f then function faren(usersInput)

//else if c then function cels()
//else function kel()
// const submitButton = document.querySelector('.submit-button')

//event listener on wireframe orange takes in f or c


function cToF(num) {
    c2F = (num * 9/5) + 32
    
}
function cToK(num) {
    c2K = num + 273.15
    
}
function fToC (num) {
    f2C = ((num - 32) * (5.9));
    
}
function fToK(num) {
    f2K = ((num - 32) * (5/9) + 273.15);
    
}
function kToF(num) {
    k2F = ((num - 273.15) * (9/5) + 32)
    
}
function kToC(num) {
    k2C = num - 273.15
    
}
const tempImg = document.querySelector('#temp-img')
const tempResults= document.querySelector('#temp-results')


let possibleTempRadio = Array.from(document.querySelectorAll('.possible-temps'))
console.log(possibleTempRadio)



document.querySelector('.submit-button').addEventListener('click', function(){
    const usersInputValue = usersInput.valueAsNumber
    console.log('jelo')
    const tempResults = document.querySelector('#temp-results')
    if (possibleTempRadio[0].checked == true) {
        console.log(usersInputValue)
        tempResults.innerText = fToC(usersInputValue)
        console.log(`${f2K} in fahrenheit`)
    }
    else if (possibleTempRadio[0].checked == true) {
        console.log(usersInputValue)
        console.log('${c2F} in fahrenheit')
        console.log(`${c2K} in fahrenheit`)
        tempResults.innerText = fToC(usersInputValue)
    }
    else (possibleTempRadio[0].checked == true) {
        console.log(usersInputValue)
        console.log(`${k2F} in fahrenheit`)
        console.log(`${k2C} in fahrenheit`)
        tempResults.innerText = fToC(usersInputValue)
        
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

// console.log(convertedNumber, usersInput, possibleTemperatures)*