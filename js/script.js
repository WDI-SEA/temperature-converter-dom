document.getElementById("submit").addEventListener("click", function(e){
    var temperature = document.getElementById("entry").value;
    var highTemp = (parseInt(temperature) - 32) * (5/9);
    console.log(highTemp);
    document.getElementById("results").innerText=highTemp + " °C"

})


var clearFields = document.getElementById("clear")

function clearInputField() {
    document.getElementById("results").innerText = null;
    document.getElementById("entry").value = null;
}

clearFields.addEventListener("click", function(e) {
    clearInputField()
})

