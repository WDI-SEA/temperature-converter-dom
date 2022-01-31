document.querySelector('#userTemp').addEventListener('click', function() {
const userInput = document.getElementById('#userTemp').valueAsNumber
const result = document.querySelector('#result')

result.innerText = (userInput - 32) * (5/9)
})