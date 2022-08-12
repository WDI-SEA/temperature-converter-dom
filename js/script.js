console.log('Hello, front end');
const textSection  = document.getElementById('textSec')

const firstRadio = document.getElementById('radio1')
const secondRadio = document.getElementById('radio2')
const firstButton = document.getElementById('button1')
const secondButton = document.getElementById('button2')
let valueOfTemp
let h1Value=document.createElement("h1");

const div = document.getElementById("result")

firstButton.addEventListener("click",function(){
    appendValue(getTempInCelcius(textSection))
})
secondButton.addEventListener("click",function(){
    h1Value.innerHTML=""
    textSection.value=""
})


function getTempInCelcius(tempValue){
return ((tempValue.value - 32) * 5/9).toFixed(2)
 }
 
function appendValue(value){
h1Value.setAttribute('id',"result")
h1Value.innerHTML=`${value} ° celcius`
div.append(h1Value)
}


