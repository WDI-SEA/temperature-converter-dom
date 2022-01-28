document.querySelector('#submit-button').addEventListener('click', function() {
    const tempInputValue = document.querySelector('#temp-input').valueAsNumber
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5/9) 

})

// document.querySelector('#temp-form').addEventListener('submit', function(event) {
//     event.preventDefault()
//     console.log('the form has been submitted')
//     const tempInputValue = document.querySelector('#tempInput').valueAsNumber
//     const result = document.querySelector('#result')
//     result.innerText = (tempInputValue - 32) *(5/9)

//     tempInputValue.value = 72
//     console.log(tempInput)
// })