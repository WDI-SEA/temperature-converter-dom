console.log('Hello, front end');

let degree = document.getElementbyID('enter1').input.value
let converted = document.getElementById('output').value
let submit = document.getElementById('submitbttn')
let cbtn = document.getElementById('cbttn').checked
let fbtn = document.getElementById('fbttn').checked




submit.addEventListener('click', function(e) {
    if(cbtn.radio.checked == true) {
    let preConversion = degree
    let postConversion = (preConversion - 32) * (5/9)
    converted.innerText = postConversion
    } else if(fbtn.radio.checked == true) {
        let preConversion = (preConversion * 1.8) + 32
        converted.innerText = postConversion
    }
    }
)


) { alert('hello!'); };