// document.querySelector('#submit-button').addEventListener('click', function()) {
//     console.log('calculate the temp')
//     const tempInput = document.querySelector('#temp-input').valueAsNumber
//     console.dir(tempInput) // to check the different elements and the values
//     const result = document.querySelector('#result')

//     result.innerText = (tempInputValue - 32) * (5/9)
// }

document.querySelector('#temp-form').addEventListener('submit', function(event) {
    // method (function) that stops form from refreshing
    event.preventDefault()
    console.log('the form has been submitted')
    // get the input value
    const tempInputValue = document.querySelector('#tempInput').valueAsNumber
    // get the result div el
    const result = document.querySelector('#result')
    // do some math and st the result p
    result.innerText = (tempInputValue - 32) * (5/9)

    // with Ids, don't need to put document.querySelector('#tempInput#)
    tempInput.value = 72
    console.log(tempInput)
})