// let x = //userInput
// code that takes over input and submits
let input = document.getElementById("fname")
// console.log(input);
let submit = document.getElementById("Submit")
// console.log(submit);
let clear = document.getElementById("Clear")
// console.log(clear);
let F = document.getElementById("far")
 //console.log(far);
let C = document.getElementById("cel")
// console.log(cel);





submit.addEventListener('click', whichConversion(34) )
submit.addEventListener('click', submitinputtext)

function submitinputtext() {
  const inputnumber = input.value 
  console.log(inputnumber)
  function whichConversion(inputnumber)
}


//event listener for click
function whichConversion(temp){
let c_conversion = (temp - 32) * 5/9
let f_conversion = (temp * 9/5) + 32
    if (F.checked) 
    console.log (f_conversion)
    const celdiv = document.createElement('div')       
    celdiv.innerText = f_conversion        
    document.querySelector("#tempcontainer") .appendChild(celdiv) 

 } else if (C.checked) { 
     console.log (c_conversion)
 }
    else console.log('please select a temperature')
    // return 'please select a temperature'
    // console.log('please select a temperature')
