console.log('Hello, front end');
let input1 = document.getElementById('input-1')

console.log(input1)

let submitButton = document.getElementById('submit-button')

console.log(submitButton)

let clearButton = document.getElementById('clear-button')

console.log(clearButton)

let tempOutput = document.getElementById('converted-temp')

console.log(tempOutput)

submitButton.addEventListener("click", function(e) {
    let newTemp = (input1.value - 32) * (5/9) 
    tempOutput.innerText = newTemp
})

clearButton.addEventListener("click", function(e) {
    input1.value = ''
    tempOutput.innerText = ' '
    
})

