function getTemperature() {
    let inputTemp = document.getElementById("temperature").value
    if (document.getElementById("fahrenheit").checked == true) {
        let Far = inputTemp
        let CelAnswer = Math.round((Far - 32) * 5 / 9)
        document.getElementById("answer").innerText = CelAnswer + "°C"
    } else if (document.getElementById("celsius").checked == true) {
        let Cel = inputTemp
        let CelAnswer = Math.round(Cel * 9 / 5 + 32)
        document.getElementById("answer").innerText = CelAnswer + "°F"
    }
}

function clearAnswer() {
    document.getElementById("temperature").value = " ";
    document.getElementById("answer").innerText = " ";
}

