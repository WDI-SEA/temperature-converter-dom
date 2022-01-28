// define variables
const convertF = document.querySelector("#fahrenheit")
const convertC = document.querySelector("celsius")
const tempConvertInput = document.querySelector("input[type='text']")
const ans = document.getElementbyId("#convertANS")




//event listener for submit
document.getElementById("submit").addEventListener("click", () => {




let ans = document.getElementbyId("#convertANS")
    if (convertF) {
        const convertedF = (fahtoConvert - 32) * 5/9
        ans.innerText = convertedF
    } else if (convertC) {
        const convertedC = (fahtoConvert * 1.8) + 32
        ans.innerText = convertedC
}


// clear button
document.querySelector("#clear").addEventListener("click", () => {
    tempConvertInput.value = ""
    })

})