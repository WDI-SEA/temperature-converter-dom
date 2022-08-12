let submitF = document.querySelector('#convertF')
let submitC = document.querySelector('#convertC')
let input = document.querySelector("#input")
let result = document.querySelector("#resultText")
let clear = document.querySelector("#clear")



//Event listeners
submitF.addEventListener("click", function(e){
    let preConversion = input.value
    let postConversion = (preConversion - 32) * (5/9)
    result.innerText = (postConversion + ' C')
})

submitC.addEventListener("click", function(e){
    let preConversion = input.value
    let postConversion = (preConversion * 1.8) + (32)
    result.innerText = (postConversion + ' F')
})

clear.addEventListener("click", function(e){
    result.innerText = ''
    input.value = ''
})

