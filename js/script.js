console.log('Hello, front end');
// let temp = 0
// let unit = "farenhit"

// const changeTempUnit = function(temp, unit) {
//     if (unit === "farenhit"){
//         let conversion = (temp -32) * (5/9)
//         return conversion
//     }
//     else if (unit === "celcius") {
//         let conversion = (temp - 32) * (5/9)
//         return conversion
//     }
// }

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#input-button').addEventListener('click', function () {
        const userInput = document.querySelector('#user-input')

        const inputSpan = document.querySelector('#input-span')
        // answer = changeTempUnit(unit, userInput)
        // document.querySelector("#degrees-f").addEventListener("click", function(event){
        //      unit = event.target.value
        // })
        // document.querySelector("#degrees-c").addEventListener("click", function(){

        // })
        inputSpan.innerText = Math.floor((userInput.value -32) * (5/9))
    })







    document.querySelector('#clear').addEventListener('click', function (){
        const inputSpan = document.querySelector('#input-span')
        inputSpan.innerText = ''

    })


})
