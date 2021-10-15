

const submitButton = document.getElementById('sub_button')
const resetButton = document.getElementById('re_button')
const celsiusButton = document.getElementById('TempC')
const kelvinsButton = document.getElementById('TempK')
const theAnswer = document.createElement('div')
const newTemp = document.createElement('p')

const changeTemp = 'blank'

submitButton.addEventListener('click', () => {

  if(true == document.getElementById('TempC').checked){

    const x = document.getElementById('TempF').value
    const y = Math.round((x-32) * (5/9))

	newTemp.id = 'newTemp'
    theAnswer.id = 'answer'
    newTemp.textContent = y + ' C°'

    theAnswer.appendChild(newTemp)

    document.body.appendChild(theAnswer)
  }
  else if (true == document.getElementById('TempK').checked){
    const x = document.getElementById('TempF').value
    const y = Math.round((x-32) * (5/9) + 273.15)

	newTemp.id = 'newTemp'
    theAnswer.id = 'answer'
    newTemp.textContent = y + ' K°'

    theAnswer.appendChild(newTemp)

    document.body.appendChild(theAnswer)
  }
  else {

	newTemp.id = 'newTemp'
    theAnswer.id = 'answer'
    newTemp.textContent = 'Oops, please select a Temperature to change too!'

    theAnswer.appendChild(newTemp)

    document.body.appendChild(theAnswer)
  }

//   if(32 > document.getElementById('TempF').value) {
//     document.getElementById('answer').style.backgroundImage = url('css/NiceDay.jpg')
//   }

})

resetButton.addEventListener('click', () => {
  document.body.removeChild(theAnswer) 
  document.getElementById('TempC').checked = false
  document.getElementById('TempK').checked = false
  document.getElementById('TempF').value = ''
})
