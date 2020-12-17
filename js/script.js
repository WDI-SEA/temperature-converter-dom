console.log('this is a test!');
function restart(event){
  location.reload();
}
function convertTemp(event){
  event.preventDefault();
  let userInput = document.getElementById('userTemp');
  userInput = userInput.value;
  let temp = 0
  if (document.getElementById('cel').checked) {
    temp = ((userInput * 9/5) + 32);
    convertedTemp.innerHTML = temp;
    console.log(temp);
  } else if (document.getElementById('far').checked) {
    temp = (userInput * (5/9) -32);
    convertedTemp.innerHTML = temp;
    console.log(temp);
  } else {
    alert('Select Fahrenheit or Celcius!')
  }
}
let convertedTemp = document.getElementById('results');
document.getElementById('converter').addEventListener('submit', convertTemp);
document.getElementById('reset').addEventListener('reset', restart);