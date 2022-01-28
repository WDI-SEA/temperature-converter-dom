console.log('Hello, front end');



let submitButton = document.querySelector("#submit-button").addEventListener("click", buttonClick)
let clearButton = document.querySelector("#clear-button").addEventListener("click", clearClick)



// celciusTrue = document.querySelector("#fah")

function buttonClick () {

    if(document.getElementById("fah").checked){
        let celciusTrue = parseInt(document.getElementById("input-field").value);

        let celcius = (celciusTrue * 1.8)+ 32

        document.querySelector(".output-text").textContent = Math.floor(celcius) + "°F"
    } else {
        let celciusTrue = document.getElementById("input-field").value;

        let fahrenheit = (celciusTrue -32) / 1.8;

        document.querySelector(".output-text").textContent = Math.floor(fahrenheit) + "°C"
    }

}

function clearClick (){
    document.getElementById("input-field").value = ""
    document.querySelector(".output-text").textContent = ""
}