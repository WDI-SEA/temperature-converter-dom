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
        newTemp = (tempInput * 9/5 ) + 32
    }
    output.innerText = newTemp

    console.log("newTemp")
}