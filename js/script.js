function submit() {
    const fahrenheitDegrees = document.getElementById("input").value;
    const selectedDegrees = document.getElementById("drop-button");
    const degreeChoice = selectedDegrees.options[selectedDegrees.selectedIndex].value;
    const celsiusDegrees = degreesConversion(fahrenheitDegrees, degreeChoice);
    const celsiusLabel = document.getElementsByClassName("celsius-text")[0];
    celsiusLabel.innerHTML = celsiusDegrees;
    // celsiusLabel.style.backgroundColor = "white";
    // console.log(typeof celsiusDegrees)
    if (celsiusDegrees > 99) {
        celsiusLabel.style.backgroundColor = "red";
    } 
    if (celsiusDegrees < 1) {
        celsiusLabel.style.backgroundColor = "lightblue";
    }

}


function clear() {
    // console.log("clear")
    document.getElementById("input").value = "";
    document.getElementsByClassName("celsius-text")[0].innerHTML = "";
}

const degreesConversion = (temp, output) => {
    let result = 0;
    // console.log(temp, output)
    if (output === "fahrenheit") {
        result = (temp - 32) * 5/9
    }
    if (output === "celsius") {
        result = (temp * 9/5) + 32
    }
    
    return result;
}


let submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function onclick(event) {
    submit();

});

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", function onclick(event) {
    clear();
 
});
