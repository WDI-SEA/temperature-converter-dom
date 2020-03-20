
let fahr = document.getElementById("Fahrenheit")
let cels = document.getElementById("Celcius")
let tempConvt = document.getElementById("convert")
let reset = document.getElementById("clear")


console.log(fahr)
//Convert the temperature
function tempConvert() {
    var fahrenheit = document.getElementById("Fahrenheit").checked;
    let input = document.getElementById("temp").value
    if (fahrenheit) {
      console.log(input)
        celciusInput = (parseInt(input) - 32) / (5 / 9);
        document.getElementById("converted").textContent = celciusInput
    } else {
        console.log("hitting the else")
        fahrenheitInput = (parseInt(input) * (5 / 9) + 32);
        document.getElementById("converted").textContent = fahrenheitInput
    }
}

// Clear button
function clearForm() {
    document.getElementById('converted').textContent = '';
    document.getElementById('temp').value = '';
} 

reset.addEventListener("click", clearForm)
tempConvt.addEventListener("click", tempConvert)