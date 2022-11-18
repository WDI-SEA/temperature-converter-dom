
let textBox = null
let tempConversion = null

//the text box 
const myInput = document.querySelector('#textBox')
const mySubmitButton = document.querySelector('#submit')
console.log(mySubmitButton)

// fetching the html page tag/id/class
let temp = document.getElementById('temp')
let farBtn= document.querySelector('#farenheit')
let celBtn= document.querySelector('#celsius')
let farBtn2= document.querySelector('#farenheitTwo')
let celBtn2= document.querySelector('#celsiusTwo')

//SHOULD HAVE MADE FUNCTIONS
/*
const farTemp = (textBox - 32) * 5/9
const celTemp = tempConversion = (textBox * 9/5) + 32
*/


//After submit is clicked
mySubmitButton.addEventListener('click', function(e) {
    textBox = myInput.value

    //if farenheit is selected
    if (farBtn.checked === true && celBtn2.checked ===true ){
        //convert to celsius
        tempConversion = (textBox - 32) * 5/9
        //output to the "temp" id 
        temp.innerText = tempConversion + 'C'
    } else if (celBtn.checked === true && farBtn2.checked === true) {
        //convert to farenheit
        tempConversion = (textBox * 9/5) + 32
        //output to 'temp' id
        temp.innerText = tempConversion + 'F'
    } else {
        temp.innerText = tempConversion
    }
    
})

//Clear Button
document.getElementById('clearBtn').addEventListener('click', function(e) {
    myInput.value = ""
    temp.innerText= ""
    farBtn.checked = false
})
