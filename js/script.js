let titleText = document.getElementById('title')
let input = document.getElementById('input')
let btnContainer = document.getElementById('btn-container')
let ftoc = document.getElementById('ftoc')
let ctof = document.getElementById('ctof')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')
let tempArea = document.getElementById('temp-area')
let tempText = document.getElementById('temp-text')

// F to C conversion

let ftocConversion = function() {
    let preConValue = input.value
    let postConValue = (preConValue - 32) * (5/9)
    tempText.innerText = postConValue

    if (postConValue <= 0) {
        tempText.style.backgroundColor = "cornflowerblue"
    }

    if (postConValue >= 36) {
        tempText.style.backgroundColor = "crimson"
    }
}

ftoc.addEventListener("click", ftocConversion)

// C to F Conversion

let ctofConversion = function() {
    let preConValue = input.value
    let postConValue = (preConValue * 9/5) + 32
    tempText.innerText = postConValue


    if (postConValue <= 32) {
        tempText.style.backgroundColor = "cornflowerblue"
    }

    if (postConValue >= 100) {
        tempText.style.backgroundColor = "crimson"
    }

}

ctof.addEventListener("click", ctofConversion)

// clear button

clear.addEventListener("click", function(e) {
    input.value = ''
    tempText.innerText = 'Temp goes here'
})