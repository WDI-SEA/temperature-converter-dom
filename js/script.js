let titleText = document.getElementById('title')
let input = document.getElementById('input')
let ftoc = document.getElementById('ftoc')
let ctof = document.getElementById('ctof')
let clear = document.getElementById('clear')
let tempArea = document.getElementById('temp-area')
let tempText = document.getElementById('temp-text')

//F to C conversion

let ftocConversion = function() {
    let preConValue = input.value
    let postConValue = (preConValue -32) * (5/9)
    tempText.innerText = postConValue
}

ftoc.addEventListener("click", ftocConversion)

let ctofConversion = function() {
    let preConValue = input.value
    let postConValue = (preConValue * 9/5) +32
    tempText.innerText = postConValue
}

ctof.addEventListener("click", ctofConversion)

clear.addEventListener("click", function(e) {
    input.value = " "
    tempText.innerText = "temp goes here"
})




















