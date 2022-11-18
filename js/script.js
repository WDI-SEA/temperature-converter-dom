
const convertTemp = function(e) {
    let num = document.getElementById('input_text').value;
    let tempTo = 0
    if (document.getElementById('convert_F').checked){
        tempTo = num * (9/5) + 32
    } else if (document.getElementById('convert_C').checked){
        tempTo = (num - 32) * (5/9) 
    } else tempTo = 'error'
 console.log(tempTo)
 return document.getElementById('results').innerHTML = tempTo
 
    }    


const clearForm = function(e){
    document.getElementById('input_text').value = '';
    document.getElementById('convert_F').checked = false;
    document.getElementById('convert_C').checked = false;
    document.getElementById('results').innerHTML = '';
}


const button_submit = document.querySelector('.button_submit');
button_submit.addEventListener('click', convertTemp);

const button_clear = document.querySelector('.button_clear');
button_clear.addEventListener('click', clearForm);

