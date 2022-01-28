/* APP STATE */
// vars
// dom elements

// logic


// document.querySelector('#submit-button').addEventListener('click', function() {
//   // console.log('calculate the temp')
//   const tempInputValue = document.querySelector('#temp-input').valueAsNumber
//   const result = document.querySelector('#result')

//   result.innerText = (tempInputValue - 32) * (5/9)
// })

document.querySelector('#temp-form').addEventListener('submit', function(event) {
  // method (function) that stops form from refreshing
  event.preventDefault()
  console.log('the form has been submitted')
  // get the input value
  // const tempInputValue = document.querySelector('#tempInput').valueAsNumber
  // const tempInputValue = tempInput.valueAsNumber
  // get the reslut div el
  // const result = document.querySelector('#result')
  // do some math and st the result p
  result.innerText = (tempInput.valueAsNumber - 32) * (5/9)
  // crazy
  tempInput.value = 72
  console.log(tempInput)
})