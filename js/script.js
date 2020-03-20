/*
    Functions for temperature conversion
*/

// Make the Temperature look sufficiently Hot
const makeHot = () => {
    document.getElementById('result').style.color='red';
    document.getElementById('result').style.fontWeight='900';
}
// Make the Temperature look sufficiently Cold
const makeCold = () => {
    document.getElementById('result').style.color='blue';
    document.getElementById('result').style.fontWeight='900';
}
// Otherwise, make it look normal
const makeNormal = () => {
    document.getElementById('result').style.color='black';
    document.getElementById('result').style.fontWeight='400';
}

// Celsius to Fahrenheit
// Divide by 5, multiply by 9, add 32
const celToFar = () => {
    let temp = document.getElementById('temperature').value;
    let resultTemp = temp / 5 * 9 - 32;
    document.getElementById('result').value = resultTemp;
    if(resultTemp>100) {
        makeHot();
    } else if (resultTemp<32) {
        makeCold();
    } else {
        makeNormal();
    }
}

// Fahrenheit to Celsius
// Subtract 32, divide by 9, multiply by 5
const farToCel = () => {
    let temp = document.getElementById('temperature').value;
    let resultTemp = (temp-32) / 9 * 5;
    document.getElementById('result').value = resultTemp;
    if(resultTemp>100) {
        makeHot();
    } else if (resultTemp<0) {
        makeCold();
    } else {
        makeNormal();
    }
}

// Choose which conversion
const chooseConv = () => {
    let radioButtons = document.getElementsByName('units');
    if(radioButtons[0].checked) {
        celToFar();
    } else if(radioButtons[1].checked) {
        farToCel();
    } else {
        alert('Please pick a conversion type');
    }
}

// In case the user hits "enter" instead of "submit"
let tempBox = document.getElementById('temperature')
tempBox.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        chooseConv();
    }
})