document.addEventListener('DOMContentLoaded',function(){

let convertTemp = 0
let unit = fahrenheit

document.querySelector('#FtoC').addEventListener('click', function(){
  // adding click on submit btn
  console.log("submit click")
  const userInput = document.querySelector('#input')
  console.log(userInput.value)
})

document.querySelector('#clear').addEventListener('click',function(){
  // adding a click on clear
  console.log("clear result")

  // select the p tag and set text
  const result = document.querySelector('#answer')
  result.innerText = userInput.value

})

document.querySelector('#small-f'.addEventListener('click',function(){
console.log("click f")
}))
document.querySelector('#small-c'.addEventListener('click',function(){
console.log("click c")
}))

})


function farToCel() {
  const far = document.querySelector('far').value;
 far =parseFloat(far);
   
 const cel= (far - 32)*(5/9);
 
 document.querySelector('cel').value = cel; 
  return cel









