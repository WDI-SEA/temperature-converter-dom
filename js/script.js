/* My Attempt
//Event lists
document.addEventListener('DOMContentLoaded', function(e) {
    
    //Function lists
    function convToFar(temp) {
        return temp * 9/5 + 32
    }
    function convToCel(temp) {
        return (temp - 32) * 5/9
    }
    const calcNewTemp = () => {
        let userTemp = document.getElementsByClassName('temp-input').value
        let newTemp = 100
        if(document.getElementById('farenheit').checked) {
            newTemp = convToFar(userTemp)
        }
        else if(document.getElementById('celcius').checked) {
            newTemp = convToCel(userTemp)
        }
        document.querySelector('#answer').innerText = newTemp 
        document.querySelector('.temp-input').value = userTemp             
    }

    //console tests
    console.log(document.getElementById('farenheit').checked)
    console.log(document.getElementById('celcius').checked)
    console.log(document.querySelector('.temp-input').value)
    console.log(document.querySelector('#answer').innerText)

    //event Submit
    document.querySelector('#submit').addEventListener('submit', calcNewTemp())
})*/



console.log(document.querySelector('.temp-input'))
let input = document.querySelector('.temp-input')

console.log(document.querySelector('#submit'))
let convert = document.querySelector('#submit')

console.log(document.querySelector('#clear'))
let clear = document.querySelector('#clear')

console.log(document.getElementById('farenheit'))
let convToFar = document.getElementById('farenheit')

console.log(document.getElementById('celcius'))
let convToCel = document.getElementById('celcius')

console.log(document.querySelector('#answer'))
let temp = document.querySelector('#answer')

function backgroundCheck(temperature) {
    if (temperature <= 0) {
        document.querySelector('.display').style.background = 'lightblue'
    }
    else if (temperature >= 30) {
        document.querySelector('.display').style.background = 'red'
    }
    else {
        document.querySelector('.display').style.background= '#888888'
    }
}

convert.addEventListener('click', function(e) {
    if(convToFar.checked) {
        let newTemp = input.value;
        backgroundCheck(newTemp)
        newTemp = (9/5)*newTemp + 32 
        temp.innerText = Math.round(newTemp) + 'ºF'
    }
    else if(convToCel.checked) {
        let newTemp = input.value;
        newTemp = (newTemp-32) * (5/9)
        backgroundCheck(newTemp)
        temp.innerText = Math.round(newTemp) + 'ºC'
    }
    
})
clear.addEventListener('click', function(e) {
    input.value = ''
    temp.innerText = 100
})