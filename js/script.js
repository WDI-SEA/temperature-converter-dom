
document.getElementById('temperature-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // todo: handle no value.
    const startTemp = document.getElementById('starting-temp');
    let startScale = (document.getElementById('starting-scale-f').checked) ? 'F' : 'C';
    let targetScale = (document.getElementById('target-scale-f').checked) ? 'F' : 'C';
    
    if (startScale == 'F') {
      if (targetScale == 'F') {
        setSame(startTemp, targetScale);
      } 
      else {
        fToC(startTemp, targetScale);
      } 
    } 
    else {
      if (targetScale == 'C') {
        setSame(startTemp, targetScale);
      } 
      else {
        cToF(startTemp, startScale);
      } 
    } 
});

document.getElementById('clear-button').addEventListener('click', function(event) {
  document.getElementById('starting-temp').value = '';
});

let setSame = function(t, s) {
  let resultValue = document.createElement('p');
  resultValue.id = `result-value`;
  resultValue.innerText = `${t.value} ${s}`;
  document.getElementById('result').replaceChild(resultValue, result.childNodes[0]);
};

let fToC = function (t, s) {
  let resultValue = document.createElement('p');
  resultValue.id = `result-value`;
  resultValue.innerText = `${Math.round((t.value - 32) * 5/9)} ${s}` ;
  document.getElementById('result').replaceChild(resultValue, result.childNodes[0]);
};

let cToF = function (t, s) {
  let resultValue = document.createElement('p');
  resultValue.id = `result-value`;
  resultValue.innerText =  `${Math.round((t.value * 9/5) + 32)} ${s}`;
  document.getElementById('result').replaceChild(resultValue, result.childNodes[0]);
};