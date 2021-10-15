const newTempC = document.getElementById('tempC')
const newTempF = document.getElementById('tempF')

function userTemp() {
  console.log('it works')

  const newInput = document.getElementById('temperature').value
  if (newTempC.checked) {
    let convertCtoF = Math.floor((newInput*1.8)+32)
    document.getElementById('tempFinal').value= convertCtoF + "°F"
  } else if(newTempF.checked ) {
  let convertFtoC = Math.floor(((newInput-32)*5)/9)
  document.getElementById('tempFinal').value= convertFtoC + "°C";
  } 
}


function clearTemp() {
  console.log('bye felica')
  document.getElementById('temperature').value = ''
  document.getElementById('tempFinal').value = ''
  document.getElementById('tempF').checked = false
 document.getElementById('tempC').checked = false
}
