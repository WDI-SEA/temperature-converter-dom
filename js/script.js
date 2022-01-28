// conversion code and color change

let convert = () => {
    let n1 = document.querySelector('.input').value;
    let radioF = document.querySelector('#f-radio').checked;
    let radioC = document.querySelector('#c-radio').checked;
    if (radioF) {
        let output = Math.trunc(parseInt(n1 - 32)*(0.55));
        document.querySelector('.answer').innerText = output + '°C';
        if (output <= 0 ) {
            document.querySelector('.answer').style.backgroundColor = "lightblue";
          } else if (output > 0 && output < 30){
            document.querySelector('.answer').style.backgroundColor = "rgb(143, 206, 139)";
          } else if (output >= 30) {
            document.querySelector('.answer').style.backgroundColor = "rgb(255, 0, 0)";
          }
    } else if (radioC) {
        let output = Math.trunc(parseInt(n1*1.8)+32);
        document.querySelector('.answer').innerText = output + '°F';
        if (output <= 32 ) {
            document.querySelector('.answer').style.backgroundColor = "lightblue";
          } else if (output > 0 && output < 85){
            document.querySelector('.answer').style.backgroundColor = "rgb(143, 206, 139)";
          } else if (output >= 85) {
            document.querySelector('.answer').style.backgroundColor = "rgb(255, 0, 0)";
          }
    }
}

//button selector and calling for convert function

const btn = document.querySelector('.submit-button');
btn.addEventListener('click', convert)

//clear button code
let clear = () => {
    document.querySelector('.answer').innerText = " "
}

const clearVal = document.querySelector('.clear-button');
clearVal.addEventListener('click', clear)
