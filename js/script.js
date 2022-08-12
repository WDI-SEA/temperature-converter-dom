let myList = document.querySelector('#myList').value

let myList2 = document.querySelector('#myList2').value

let submit = document.querySelector('.submit')

let clear = document.getElementById('clear')

document.getElementById('input-bar').value = 0;

submit.addEventListener('click', function(){
    let input = document.getElementById('input-bar').value
    let myList = document.querySelector('#myList').value
    let myList2 = document.querySelector('#myList2').value
    let output = "Please input a temperature"
    
    if(myList === "Fahrenheit" && myList2 === "Celcius"){
        output = (input - 32) * .5567 
        document.getElementById('output').innerHTML = parseFloat(output).toFixed(2) + '°C'
    } else if(myList === "Celcius" && myList2 === "Fahrenheit"){
        output = (input * 1.8) + 32 
        document.getElementById('output').innerHTML = parseFloat(output).toFixed(2) + '°F'
    } else if(myList === "Fahrenheit" && myList2 === "Kelvin"){
        output = (input - 32) * .557 + 273.15
        document.getElementById('output').innerHTML = parseFloat(output).toFixed(2) + '°K'
    } else if(myList === "Celcius" && myList2 === "Kelvin"){
        output = (parseInt(input) + 273.15)
        document.getElementById('output').innerHTML = parseFloat(output).toFixed(2) + '°K'
    } else if(myList === "Kelvin" && myList2 === "Fahrenheit"){
        output = (input - 273.15) * 1.8 + 32
        document.getElementById('output').innerHTML = parseFloat(output).toFixed(2) + '°F'
    } else if(myList === "Kelvin" && myList2 === "Celcius"){
        output = (parseInt(input) - 273.15)
        document.getElementById('output').innerHTML = parseFloat(output).toFixed(2) + '°C'
    } 
});

clear.addEventListener('click', function(){
    document.getElementById('input-bar').value = 0
    document.getElementById('output').innerHTML = ""
});