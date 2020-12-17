document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let temperature = document.getElementById("userInput").value
        if (document.getElementById("fahrenheit").checked) {
       document.getElementById("convertedTemp").innerText = (temperature - 32) * 5 / 9
    } else {
    document.getElementById("convertedTemp").innerText = (temperature * 9 / 5) + 32
    }
    
 
 })
})
