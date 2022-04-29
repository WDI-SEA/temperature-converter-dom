console.log('Hello, front end');

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#input-button').addEventListener('click', function () {
        const userInput = document.querySelector('#user-input')

        const inputSpan = document.querySelector('#input-span')
       // console.log('button clicked')
        //console.log(userInput.value)

        inputSpan.innerText = Math.floor((userInput.value -32) * (5/9))
    })







    document.querySelector('#clear').addEventListener('click', function (){
        const inputSpan = document.querySelector('#input-span')
        inputSpan.innerText = ''

    })


})
