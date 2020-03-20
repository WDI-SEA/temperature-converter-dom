// console.log(document.getElementById('tempInput').value);
// document.getElementById('tempInput') 

let tempInput = document.getElementById('tempInput')
var submit = document.getElementById('submit')
var clear = document.getElementById('clear')
var res = document.getElementById('result')
var cel = document.getElementsByClassName('btn')
    
function converter(temp) {
    if (cel[1].checked == true) {
        var result = (temp - 32) * 5/9
        res.textContent = result
    }
    else {
        var result = (temp *= 9/5) + 32
        res.textContent = result
    }
}
submit.addEventListener('click', (e) => {                                
    converter(tempInput.value)

})
clear.addEventListener('click', (e) => {
    console.log('fff')
    tempInput.value = ''
    res.textContent = '';
});