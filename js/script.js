window.addEventListener("DOMContentLoaded", () =>{





    let magicButton = document.querySelector('#conversion')

magicButton.addEventListener('click', () => {
    let test = document.querySelector("input").value
    let newTemp = null
    let betterTemp = document.createElement('p')
    let printTemp = document.querySelector('body')

if (document.querySelector("#Fahrenheit").checked) {
    newTemp = Math.round((test - 32) * .5556)
    betterTemp.textContent = `That temperature in Celcius is ${newTemp}!`
} else {
    newTemp = Math.round((test * 1.8) + 32)
    betterTemp.textContent = `That temperature in Fahrenheit is ${newTemp}!`
}
    
    
    
    
    if (newTemp >= 31) { tempSensitive.style.backgroundColor= 'red'
} else if (newTemp <= 0) {
    tempSensitive.style.backgroundColor= 'blue'
}
printTemp.appendChild(betterTemp)
})

let destructionButton = document.querySelector('#destroy')

destructionButton.addEventListener('click', () => {
    let big = document.querySelector('body')
    let tempToBeRemoved = document.querySelector('p')
    let totalDestruction = big.removeChild(tempToBeRemoved)
})


})


