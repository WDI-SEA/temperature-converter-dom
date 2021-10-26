const tempInput = document.querySelector('#temp').value
const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')
const fahrenheit = document.querySelector('#fahr')
const celsius = document.querySelector('#cels')
const answerDiv = document.querySelector('#answer')

const celsToFahr = (temp) => {
    (temp-32)/1.8
}
const fahrToCels = (temp) => {
    (temp*2)+30
}

const convertTemp = (e) => {
    e.preventDefault()
    if (fahrenheit.checked === true){
        fahrToCels(tempInput)
        console.log('this is the output:\n', convertTemp())
    }
    else if (celsius.checked === true){
        celsToFahr(tempInput)
    }
}
console.log(tempInput.value)
submit.addEventListener('submit', convertTemp)
