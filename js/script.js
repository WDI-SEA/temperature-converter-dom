document.querySelector("#submit").addEventListener("click", (e)=> convert(e))

document.querySelector("#clear").addEventListener("click", convert)

let output = document.getElementById("output")

let temp = document.getElementById("temp")

function convert(e) {
    e.preventDefault()
    temp=temp.value
    let newTemp
    if (document.getElementById("F").checked) {
         newTemp=(temp-32)*.5556
    } else {
        newTemp = (temp*9/5+32)
    }
    output.innerText = newTemp
    console.log("Hello")
    
}




