document.querySelector('#submit-button').addEventListener('click', function () {
    const tempInputValue = document.querySelector('#fahrenheit-input').valueAsNumber
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5 / 9)
})
// let fahrenheitInput = document.getElementById('fahrenheit-input').valueAsNUmber
// const result = document.querySelector('#results')
// const submitButton = document.querySelector('#submit-button')
// const clearButton = document.querySelector('#clear-button')



// const convert = () => {
//     let fahrenheitInput = document.getElementById('fahrenheit-input').valueAsNUmber
//     let conversion = Math.round(((fahrenheitInput - 32) * 5) / 9);
//     console.log(conversion)
// }

// const clear = () => {
//     console.log("i've been here for hours")
// }

// submitButton.addEventListener('click', convert)
// clearButton.addEventListener('click', clear)









// button.addEventListener('click', function () {
//     console.log("I'm terrible at this.")
// })

// resetButton.addEventListener('click', function () {
//     console.log("I hope you're not looking at this.")
// })







