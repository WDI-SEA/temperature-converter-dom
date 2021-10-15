

const submitButton = document.getElementById('sub_button')
const resetButton = document.getElementById('re_button')
const celsiusButton = document.getElementById('TempC')
const kelvinsButton = document.getElementById('TempK')
const container = document.createElement('div')
const theAnswer = document.createElement('div')
const newTemp = document.createElement('p')
newTemp.id = 'newTemp'
theAnswer.id = 'answer'
container.className = 'container'

const changeTemp = 'blank'

submitButton.addEventListener('click', () => {

  if(true == document.getElementById('TempC').checked){

    const x = document.getElementById('TempF').value
    const y = Math.round((x-32) * (5/9))

	  // newTemp.id = 'newTemp'
    // theAnswer.id = 'answer'
    newTemp.textContent = y + ' C°'

    theAnswer.appendChild(newTemp)
    container.appendChild(theAnswer)

    document.body.appendChild(container)
  }
  else if (true == document.getElementById('TempK').checked){
    const x = document.getElementById('TempF').value
    const y = Math.round((x-32) * (5/9) + 273.15)

	  // newTemp.id = 'newTemp'
    // theAnswer.id = 'answer'
    newTemp.textContent = y + ' K°'

    theAnswer.appendChild(newTemp)

    container.appendChild(theAnswer)

    document.body.appendChild(container)
  }
  else {

	  // newTemp.id = 'newTemp'
    // theAnswer.id = 'answer'
    newTemp.textContent = 'Oops, please select a Temperature to change too!'

    theAnswer.appendChild(newTemp)

    container.appendChild(theAnswer)

    document.body.appendChild(container)
  }
    const x = document.getElementById('TempF').value
    
   if(32 > x) {
    document.getElementById('answer').style.backgroundImage = "url('js/ColdDay.jpg')"
    console.log(x)
   }
   else if (80 < x) {
    document.getElementById('answer').style.backgroundImage = "url('js/HotDay.jpg')"
   }
   else {
    document.getElementById('answer').style.backgroundImage = "url('js/NiceDay.jpg')" 
   }

})

resetButton.addEventListener('click', () => {
  document.body.removeChild(container) 
  document.getElementById('TempC').checked = false
  document.getElementById('TempK').checked = false
  document.getElementById('TempF').value = ''
})
