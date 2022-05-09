console.log();
let temp = 0;
let unit = "Fahrenheit";

const changeTempUnit = function(tempParam, unitParam){
  if(unitParam === "Fahrenheit"){
     let conversion = (tempParam * 9/5) +32
     return conversion
  } else if(unitParam === "Celsius") {
     let conversion = (tempParam - 32) * 5/9

  }
}

document.addEventListener('DOMContentLoaded', function(){
    // change result background color 
    const p = document.querySelector('p')
    p.style.backgroundColor = "red"
    p.style.fontSize = "75px"
    // console.log(p)
     //First STEP: user interaction happened


    // select the button and add a click event listener
    document.querySelector('#button-submit').addEventListener('click', function(){
    console.log("clicked!")

    //save the user input to the variable
    const userInput =document.querySelector('#user-input')
    // console.log(userInput.value, "<<<")

    // set global temp to value of userInput 
    temp = userInput.value

    let answer = changeTempUnit(temp, unit)

 
   //select the result p tag and set text
    const resultEl = document.querySelector('#result')
    resultEl.innerText = answer

  })

  // select the clear and console.log click
  document.querySelector('#button-clear').addEventListener('click', function(){
   console.log("clear-btn-clicked!")

  })

  //select Fahrenheit radio and add click 
  document.querySelector('#deg-far').addEventListener('click', function(event){
    // console.log("f-clicked!", event.target.value)
    unit = event.target.value
    console.log(unit, 'unit value')
    
  })
  //set the global unit variable unit to the event target value
  
  //select the Celsius radio
  document.querySelector('#deg-cel').addEventListener('click', function(event){
    // console.log("c-clicked!", event.target.value)
    unit = event.target.value
    console.log(unit, 'unit value')
  })


}) //dommmmmm

   









 






  

  