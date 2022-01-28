document.querySelector("#submit-button").addEventListener('click', function() {
    // console.log("the button was clicked")
    const tempInputValue = document.querySelector('#temp-input').valueAsNumber
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5/9)

})
