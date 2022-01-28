console.log('Hello, front end');
const body = document.querySelector('body')
console.log(body)

let submitButton = document.querySelector("#btnSubmit").addEventListener("click", buttonClick)
let clearButton = document.querySelector("#btnClear").addEventListener("click", btnClear)
const container = document.querySelector('#mainContainer')

function btnClear (){
  container.classList.remove('containerHot','containerCold')
  document.getElementById("tempInput").value = "0"
  document.querySelector(".resultText").textContent = "&nbsp;"
  container.classList.add('container')  
}

function buttonClick () {
  container.classList.remove('containerHot','containerCold')
  let tempValue = parseInt(document.getElementById("tempInput").value);
  let varC = 0
  let varF = 0
    if(document.getElementById("inputF").checked){
          varC = (tempValue -32) * 5/9;
          document.querySelector(".resultText").textContent = Math.floor(varC) + "°C"
          if (varC > 24) {
            container.classList.add('containerHot')
          } else {
            container.classList.add('containerCold')
          }
    } else {
          varF = (tempValue * 9/5) +32;
          document.querySelector(".resultText").textContent = Math.floor(varF) + "°F"
          if (varF > 75) {
            container.classList.add('containerHot')
          } else {
            container.classList.add('containerCold')
          }
    }    
}
