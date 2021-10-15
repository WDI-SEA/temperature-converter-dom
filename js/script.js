function convertTemp() {
    let celsius = document.getElementById("Cvalue")
    let fahrenheit = document.getElementById("Fvalue")

    if (celsius.value != "") {
        fahrenheit.value = Math.round(celsius.value * 9 / 5 + 32)
        celsius.value = ""
    } else { 
        celsius.value = Math.round((fahrenheit.value - 32) * 5 / 9)
        fahrenheit.value = ""
    }
}