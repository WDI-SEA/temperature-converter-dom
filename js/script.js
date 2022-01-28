// in this case, we don't need to use domContentLoaded here bc its already written at the bottom of our html

// assuming input is always fahrenheit

document.querySelector('#submit-button').addEventListener('click', function() {
    // console.log('convert the temperature')
    const tempInputValue = document.querySelector('#temp-input').valueAsNumber
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5/9)
})

// to convert the tempInput from a string to a value, we can do const tempInputValue = document.querySelector('#temp-input').valueAsNumber




// // when using forms
// // we're not listening for a click event, we're listening for a submit event
// document.querySelector('#temp-form').addEventListener('submit', function(event) {
//     // method (function) that stops the form from refreshing
//     event.preventDefault()
//     console.log('the form has been submitted')
//     // get the input value
//     const tempInputValue = document.querySelector('#tempInput').valueAsNumber
//     // get the result div element
//     const result = document.querySelector('#result')
//     // do some math and reset the result p
//     result.innerText = (tempInputValue - 32) * (5/9)
//     // crazy new thing-- this means we don't have to do document.querySelector. etcetc
//     tempInput.value = 72
//     console.log(tempInput)
//     // but not encouraged to use in the workplace, still need to know how to use document.querySelector!!!
// })