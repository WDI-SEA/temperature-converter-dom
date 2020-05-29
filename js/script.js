//Test Declaration
var test = document.getElementById("userInput").value;

// Convert function
function convert(){
    event.preventDefault();

    if(document.getElementById("F").checked){
        toC();
    } else {
        toF();
    }
    
}

// Convert from C to F
function toF() {
    var input = document.getElementById("userInput").value;
    var output = (input * (9/5) + 32);
    document.getElementById("converted").innerText = output.toFixed(1) + "°F";

    // Conditionals
    if(output >= 80) {
        document.getElementsByClassName("conTemp")[0].style.backgroundColor = "red";
    }

    if(output >= 60 && output <= 80) {
        document.getElementsByClassName("conTemp")[0].style.backgroundColor = "orange";
    }

    if(output <= 60) {
        document.getElementsByClassName("conTemp")[0].style.backgroundColor = "lightblue";
    }
    
}

// Convert from F to C
function toC() {
    var input = document.getElementById("userInput").value;
    var output = (input - 32) * (5/9);
    document.getElementById("converted").innerText = output.toFixed(1) + "°C";

    // Conditionals
    if(output >= 26.7) {
        document.getElementsByClassName("conTemp")[0].style.backgroundColor = "red";
    }

    if(output >= 15.6 && output <= 26.7){
        document.getElementsByClassName("conTemp")[0].style.backgroundColor = "orange";
    }

    if(output <= 15.6) {
        document.getElementsByClassName("conTemp")[0].style.backgroundColor = "lightblue";
    }

}

document.getElementById("submit").onclick = convert;
