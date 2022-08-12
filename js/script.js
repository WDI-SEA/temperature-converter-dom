//function conversions
function convertF2C (input) {
    return (input - 32) *5/9
}

function convertC2F (input) {
    return (input * 9/5 + 32)
}

function convertK2C (input) {
    return(input - 273.15)
}

function convertC2K (input) {
    return (input + 273.15)
}




let input = document.getElementById('input')
let clearButton = document.getElementById('clear').addEventListener("click", function(){
    clear(input)
})
let selection1 = document.getElementById('selection1')
let selection2 = document.getElementById('selection2')
let submitButton = document.getElementById('submit').addEventListener("click", function(){
    if (selection1.value === 'celcius' && selection2.value === 'fahrenheit') {
        answer = convertC2F(input);
        console.log(answer)
    }
})


function clear (input) {
    let value = input.value
    
}
