const input = document.querySelector(".input")
const fToCel = document.querySelector("#cel")
const cToFafs = document.querySelector("#fafs")
const result = document.querySelector("#result")
const resetButton = document.querySelector(".resetbuttonn")

fToCel.addEventListener("click", function(e) {
    
    let preConversion = input.value
    let postConversion = (preConversion - 32) * (5/9)
    result.innerHTML = postConversion
    
});

cToFafs.addEventListener("click", function(e) {
    let preConversion = input.value
    let postConversion = (preConversion * 1.8) + 32
    result.innerHTML = postConversion
});

resetButton.addEventListener("click", function(e) {
    result.innerHTML = ''
    input.value = ''
});