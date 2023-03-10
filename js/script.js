
 let fToC = function(tempInF){
    const tempInC = (tempInF - 32) * 5/9
    return tempInC 
 }
//  fToC.addEventListener('click', fToC)
// let cToF = function(tempInC){
//     const tempInF = (tempInC * 9/5) + 32
//     return tempInF
// }
 //the math
//F->C (32°F − 32) × 5/9 = 0°C

//(32°C × 9/5) + 32 = 89.6°F

// let input = document.querySelector(".input")
// let input = document.querySelector(".cToF")
// let input = document.querySelector(".fToC")
// let input = document.querySelector(".submitButton")
// let input = document.querySelector(".clearButton")




// temp input
const input = document.querySelector("#Temperature")
console.log(input)

const result = document.querySelector("#result")
console.log(`The temp is ${result}`)

//action for submitting info
const submitButton = document.querySelector("#submitButton");
console.log(submitButton)
submitButton.addEventListener('click', function(){
    console.log(input.value)
    const temp = fToC(input.value)
    result.innerText = temp
})

// action to reset 
const clearButton = document.querySelector("#clearButton");
console.log(clearButton)
clearButton.addEventListener("click", function(){
    console.log("")
      result.innerText = ""
})

/*set to clear answer and not input value, oops. At least something gets cleared?*/


//let clearButton = function() {
   // input.innerText = "" 
//} in class 