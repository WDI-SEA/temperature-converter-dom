// variable declarations to grab everything

let input = document.querySelector('#input')
let fToC = document.querySelector('#fToC')
let cToF = document.querySelector('#cToF')
let clear = document.querySelector('#clear')
let result = document.querySelector('#result')

// adding event listeners

fToC.addEventListener("click", function(e) {
    let preConversion = input.value
    let postConversion = (preConversion - 32) * (5/9)
    result.innerText = postConversion

    if (postConversion <= 0) {
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/xTeV7qibUsOYA3mmYw/giphy.gif')";
    } else if (postConversion > 38) {
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/P7JmDW7IkB7TW/giphy.gif')";
    }
})

cToF.addEventListener("click", function(e) {
    let preConversion = input.value
    let postConversion = (preConversion * 1.8) + 32
    result.innerText = postConversion

    if (postConversion <= 32) {
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/xTeV7qibUsOYA3mmYw/giphy.gif')";
    } else if (postConversion > 100) {
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/P7JmDW7IkB7TW/giphy.gif')";
    }
})

clear.addEventListener("click", function(e) {
    result.innerText = ''
    input.value = ''
    document.body.style.backgroundImage = ''
})

