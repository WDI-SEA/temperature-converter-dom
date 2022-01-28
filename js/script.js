const conversionTextBox = document.getElementById('conversion-text-box')
let fahrenheitButton = document.getElementById('fahrenheit').addEventListener('click', function(){
    fahrenheitButton = true
    celciusButton = false
})
let celciusButton = document.getElementById('celcius').addEventListener('click', function(){
    fahrenheitButton = false
    celciusButton = true
})
const submitButton = document.getElementById('submit-button').addEventListener('click', submitConversion)
const clearButton = document.getElementById('clear-button').addEventListener('click', clearAll)
const conversionDisplay = document.getElementsByClassName('conversion-display-text')


function submitConversion () {  
    
    if (fahrenheitButton == true){
        conversionDisplay.innerText = userInput,'°F'
        console.log(conversionDisplay.innerText)
    } else {
        conversionDisplay.innerText = Math.floor((5/9) * (userInput - 32)),'°C'
        console.log('c')
        
    }
   
}

function clearAll (){
    conversionDisplay.innerText = ''
    userInput = ''
    // fahrenheitButton = null
    // celciusButton = null

    console.log('clear')
}


CODE BELOW THIS LINE DONE IN CLASS



// document.querySelector('#submit-button').addEventListener('click', function(){
//     const tempInputValue = document.querySelector('#temp-input').valueAsNumber // .valueAsNumber found in the google console console.log(dir)
//     const result = document.querySelector('#result')

//     result.innerText = (tempInputValue - 32) * (5/9)

//     tempInput.value = 72
// })
