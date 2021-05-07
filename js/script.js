window.addEventListener("DOMContentLoaded", () => {

let buttonPress = document.querySelector("#submit")
buttonPress.addEventListener("click", () => {
    convert()
})

let clearPressed = document.querySelector("#clear")
clearPressed.addEventListener("click", () => {
    clear()
})

function clear(){
    let textBox = document.getElementById("temp")
    console.log(textBox)
    textBox.value = ""

    let theDiv = document.querySelector("#hidden-div")
    theDiv.classList.remove("unhide")
    theDiv.innerText= ""
}

function convert(){
    let celsiusChecked = document.querySelector("#celsius").checked
    let temperature = document.querySelector("#temp").value
    let result = null;

    if (celsiusChecked){   
        result = (temperature - 30) / 2
    } else {
         result = ((temperature - 32) * 5) / 9 + 273.15
    }
    
    let unHide = document.querySelector("#hidden-div")
    unHide.innerText = result
    unHide.classList.add("unhide")
}

})