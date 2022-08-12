
let input = document.querySelector("#input");
let fToC = document.querySelector("#FtoC")
let cToF = document.querySelector("#CtoF")
let submit = document.querySelector("#submit")
let clear = document.querySelector('#clear');
let result = document.querySelector('#result')

fToC.addEventListener("click", function(e) {
    let preConversion = input.value 
    let postConversion = (preConversion -32)*5/9
    result.innerText = postConversion
    if (postConversion < 0) {
        result.style.backgroundColor = 'blue';
        document.body.style.backgroundImage = "url('https://c.tenor.com/_YvRWMc5Jg4AAAAC/freezing-cold-spongebob.gif')"
    } else if (postConversion >= 38) {
        result.style.backgroundColor = 'FireBrick';
        document.body.style.backgroundImage = "url('https://c.tenor.com/ShzdJcrguswAAAAC/burn-elmo.gif')"
    } else {
        result.style.backgroundColor = 'black'
        document.body.style.backgroundImage =""
    }
})

cToF.addEventListener("click", function(e) {
    let preConversion = input.value 
    let postConversion = preConversion * 1.8 + 32
    result.innerText = postConversion
    if (postConversion < 32) {
        result.style.backgroundColor = 'blue';
        document.body.style.backgroundImage = "url('https://c.tenor.com/_YvRWMc5Jg4AAAAC/freezing-cold-spongebob.gif')"
    }else if (postConversion >= 100) {
        result.style.backgroundColor = 'FireBrick';
        document.body.style.backgroundImage = "url('https://c.tenor.com/ShzdJcrguswAAAAC/burn-elmo.gif')"
    }else {
        result.style.backgroundColor = 'black'
        document.body.style.backgroundImage =""
    }
})

clear.addEventListener("click", function(e) {
    input.value ='';
    result.innerText ='';
    result.style.backgroundColor = 'black'
    document.body.style.backgroundImage =''
})

// const submit = document.querySelector('#submit');
// submit.addEventListener("submit", function(e) {
//     const inputnumber = document.querySelector('.input input').value
//     console.log(inputnumber)
//     document.querySelector('.output').innerHTML = " <p>123</p>";
// })

// console.log(document.querySelector('.output p').textContent);
// console.log(document.querySelector('.input input[type="text"]').value);