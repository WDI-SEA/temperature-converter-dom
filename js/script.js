let input = document.querySelector('#input')
let fToC = document.querySelector('#fToC')
let cToF = document.querySelector('#cToF')
let clear = document.querySelector('#clear')
let result = document.querySelector('#result')

fToC.addEventListener("click", function(e) {
  let preConversion = input.value
  let postConversion = (preConversion - 32) * (5/9)
  result.innerText = postConversion
})

cToF.addEventListener("click", function(e) {
  let preConversion = input.value
  let postConversion = (preConversion * 1.8) + 32
  result.innerText = postConversion
})

clear.addEventListener("click", function(e) {
  result.innerText = ''
  input.value = ''
}) 