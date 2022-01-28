document.querySelector('#submit-button').addEventListener('click', function() {
    const tempInputValue = document.querySelector('#temp-input').valueAsNumber
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5/9) 

})