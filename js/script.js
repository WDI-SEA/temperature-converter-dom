let tempF= document.getElementById("fahrenheit")
let tempC= document.getElementById("celcius")
let newTemp= document.getElementById("newValue")



// let userInput = document.querySelector("#temp").value
// console.log(userInput)

function handleMath(userInput){
    if(tempF.checked==true){
        return (Math.floor((userInput-32) * 0.56) + "C")
        
    } else if (tempC.checked==true){
        return (Math.floor((userInput * 1.8) + 32) + "F")
       
    }
}

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault()
    let userInput = document.querySelector("#temp").value
    let convertedValue= handleMath(userInput)
    newTemp.innerText=convertedValue
    
})

document.getElementById("clear").reset(myForm)