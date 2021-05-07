window.addEventListener("DOMContentLoaded", () =>{

const form = document.querySelector('form')
const tempInput = form.querySelector('input[name="temperature"]')
// const tempF = form.querySelector('input[value="fahrenheit"]')
const tempC = form.querySelector('input[value="celsius"]')
const submitButton = form.querySelector('input[type="submit"]')
const resetButton = form.querySelector('input[type="reset"]')

const results = document.querySelector('.results')


const formData = {temp: '', isC: false}




function fToC(tempInput) {
    return (tempInput-32) * 5 / 9
}
function cToF(tempInput) {
    return (tempInput * 9 / 5) + 32
    
}


function convertTemp(formData) {
    let resultString = ''
    if (formData.isC) {
        resultString = `${cToF(formData.temp)}° Fahrenheit`
    } else {
        resultString = `${fToC(formData.temp)}° Celsius`
    }
    
    results.textContent = resultString    
}

submitButton.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    formData.temp = tempInput.value
    formData.isC = tempC.checked
  
    convertTemp(formData)
  })
resetButton.addEventListener('click', (e) => {  
    results.textContent=''

  
})
})
