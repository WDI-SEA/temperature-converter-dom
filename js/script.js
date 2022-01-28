//SUBMIT BUTTON
document.getElementById('submit').addEventListener('click', function() {

    const inputValue = document.getElementById('initial-temp').value
    //console.log(inputValue)

    const selection = document.getElementsByName('fc');
    let fahOrCelsius = "a"
    for (var i = 0; i < selection.length; i++) {
        if (selection[i].checked) {
            //console.log(selection[i].value)
            fahOrCelsius = selection[i].value
        }
    }

    let convertedValue = 0;
    if (fahOrCelsius === "f") {
        convertedValue = (inputValue - 32) * (5/9)
    } else if (fahOrCelsius === "c") {
        convertedValue = inputValue / (5/9) + 32
    }

    document.getElementById('output').innerHTML = convertedValue
    //console.log(convertedValue)
    if (fahOrCelsius === "f" && convertedValue > 0) {
        document.getElementById("result").style.backgroundColor = 'red'
    } else if (fahOrCelsius === "f" && convertedValue <= 0) {
        document.getElementById("result").style.backgroundColor = 'blue'
    } else if (fahOrCelsius === "c" && convertedValue > 32 ) {
        document.getElementById("result").style.backgroundåColor = 'red'
    } else if (fahOrCelsius === "c" && convertedValue <= 32) {
        document.getElementById("result").style.backgroundColor = 'blue'
    }
})


//CLEAR BUTTON
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('initial-temp').value = ""
})