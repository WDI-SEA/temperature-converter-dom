// DOM Selectors

const inputF = document.querySelector('#Fahrenheit')
    console.log(inputF)
const inputC = document.querySelector('#Celsius')
    // console.log(inputC)
const inputK = document.querySelector("#Kelvin")
    // console.log(inputK)
const submit = document.querySelector('.submit')
    // console.log(submit)
const clear = document.querySelector('.clear')
    // console.log(clear)


//Event Listeners

submit.addEventListener('click',runTempFunction) 

clear.addEventListener('click',clearFields)

// //Functions

// // runtemp runs does the math conversions

// function fToC(fahrenheit){
//     return(fahrenheit - 32) * 5/9
// }
const fToC = fahrenheit => (fahrenheit - 32) * 5/9

const fToK = fahrenheit => ((fahrenheit - 32) * 5/9) + 273.15

const cToF = celsius => (celsius * 9/5) + 32

const cToK = celsius => (celsius + 273.15)

const kToF = kelvin => ((kelvin - 273.15) * 9/5) + 32

const kToC = kelvin => (kelvin - 273.15)


// funtemp

function runTempFunction(event){
 
    if (inputF.value !== ""){
        const tempInC = fToC(inputF.value)
        const tempInK = fToK(inputF.value)
        inputC.value= tempInC
        inputK.value= tempInK
    }else if (inputC.value !== ""){
        const tempInF = cToF(inputC.value)
        const tempInK = cToK(inputC.value)
        inputF.value= tempInF
        inputK.value= tempInK
    }else if(inputK.value !== ""){
        const tempInC = fToC(inputK.value)
        const tempInF = kToF(inputK.value)
        inputC.value= tempInC
        inputF.value= tempInF
    }
        
}

// // cleartemp clears the boxes     
function clearFields(event){
    location.reload()
}



    
