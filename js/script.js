// document.addEventListener('DOMContentLoaded',()=>{
//     console.log('your DOM loaded')
//     console.log(document.querySelector('#convertButton'))
//     document.querySelector(#convertButton).addEventListener('click', (event)=>{
//         event.preventDefault()
//         console.log('test')
//     })
// })

// function convertFtoC(tempF) {
//     const tempC = (tempF - 32) * (5/9);
//     return tempC;
// }

// function convertCtoF(tempC) {
//     const tempF = (tempC + 32) * (9/5)
// }

// let output = document.getElementById(output)

/* Listen for click on clear button
identity clear button
Identify entry box
Add event listener to clear button - listening for click
No refresh 
Modify entry box
Empty submission box
Empty radio button */


// document.querySelector("#clear").addEventListener("click", (e) => {
//     e.preventDefault()
//     document.querySelector("#convert").addEventListener("click", (e) => {

//     }
// }) 


// document.querySelector("#convert").addEventListener("click", convert) (e) => convert(e)


// let output = document.getElementById("output")

// let temp = document.getElementById("userTemp")

// function convert(e) {
//    e.preventDefault()
//    temp=temp.value
//    let newTemp
//    if (document.getElementById(F).checked) {
//        newTemp = (temp*9/5+32)
//    }
//    output.innerText = newTemp
// }


document.querySelector("#submit").addEventListener('click', (e)=> convert(e))

document.querySelector("#clear").addEventListener('click', convert)

let output = document.getElementById("output")

let tempInput = document.getElementById("tempInput")

function convert(e) {
    e.preventDefault()
    tempInput = tempInput.value
    if (document.getElementById("F").checked) {
        newTemp = (tempInput - 32) * (5/9)
    } else {
        newTemp = (tempInput * 9/5) + 32
    }
    output.innerText = newTemp

    console.log("newTemp")
}

if (newTemp >= )
