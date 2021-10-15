console.log('Hello, front end');

// Input field
const tempField = document.getElementById('tempField')
// Click clear to clear input field
// Don't have to do anything for this because button type='reset'

// Convert value when they hit submit
const subBtn = document.getElementById('submit-btn')
subBtn.addEventListener('click', () => {
  // get radios
  const rdF = document.getElementById('radioF')
  const rdC = document.getElementById('radioC')
  const answer = document.getElementById('answer-field')

  if(rdF.checked){
    const answerNum = Math.round((tempField.value-32)*5/9*10)/10
    answer.textContent = `${answerNum} &degC`
  }
  else if(rdC.checked){
    const answerNum = Math.round((tempField.value*9/5+32)*10)/10
    answer.textContent = `${answerNum} &degF`
  }
  
})