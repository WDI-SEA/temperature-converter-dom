
let titleText = document.getElementById('title')
let input = document.getElementById('input')   
let ftoc = document.getElementById('ftoc')   
let ctoc = document.getElementById('ctoc')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')
let tempArea = document.getElementById('temp-area')   
let tempText = document.getElementById('temp-text')   
let btnContainer = document.getElementById('btn-container')


// f to c conversion

console.log(ftoc)
let ftocConversion = function(){
    let preConValue = input.value
    let postConValue = (preConValue - 32) * (5/9)
    tempText.innerText = postConValue

    if(postConValue <= 0){
        tempArea.style.background = blue
    }
}
ftoc.addEventListener('click', function(){
    let preConValue = input.value
    let postConValue = (preConValue - 32) * (5/9)
    tempText.innerText = postConValue

    if(postConValue <= 0){
        tempArea.style.background = blue}
    })



// c to f conversion s


let ctofConversion = function(){
    let preConValue = input.value
    let postConValue = (preConValue * 9/5) + 32
    tempText.innerText = postConValue
}
ctof.addEventListener('click', ctofConversion)


// clear button

clear.addEventListener('click', fucntion(e)); {
    input.value = ''
    tempText.innerText = ' Temp goes here'
}













