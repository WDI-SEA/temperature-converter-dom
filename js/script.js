let farBut = document.getElementById("Fahrenheit"); 
// console.log(farBut.checked);
let celBut = document.getElementById("Celsius"); 
let tempResultNum = document.getElementById("tempResult").innerText;
console.log(tempResultNum);
let tempColor = document.getElementById("tempContainer");

    document.getElementById("submitValue").addEventListener("click", function(event) { 
    if (farBut.checked === true) {
        inputTemp = document.getElementById("tempInputValue").value
        // console.log("Far " + inputTemp);
        outputTemp = ((inputTemp - 32) * (5/9)).toFixed(1);
        // console.log("Cel " + outputTemp);
        document.getElementById("tempResult").innerHTML = (outputTemp + "°C");
        // console.log(tempResultNum);
        // let tempResultNum.innerText = outputTemp.value;
        if (inputTemp > 119) {
           console.log("background should be red");
           tempColor.className = "tempContainerHot";
        } else if (inputTemp < 33) {
            console.log("background should be blue");
            tempColor.className = "tempContainerCold";
        } else { 
            tempColor.className = "tempContainer"
        }
} else if (celBut.checked === true) {
    // console.log("cel is clicked");
    inputTemp = document.getElementById("tempInputValue").value
    // console.log("Cel " + inputTemp);
    outputTemp = ((inputTemp * 5/9) + 32).toFixed(1);
    // console.log("Far " + outputTemp);
    document.getElementById("tempResult").innerHTML = (outputTemp + "°F");
    if (inputTemp > 48) {
        console.log("background should be red");
        tempColor.className = "tempContainerHot";
     } else if (inputTemp < 1) {
         console.log("background should be blue");
         tempColor.className = "tempContainerCold";
     } else { 
        tempColor.className = "tempContainer";
     }
} else {
    alert("Please select your input temperature type!");
}
})


// CLEAR BUTTON 
document.getElementById("clearValue").addEventListener("click", function(event) {
    document.getElementById("tempInputValue").value = ""; //clear out the input
    document.getElementById("tempResult").innerText = "";
    tempColor.className = "tempContainer"; //clear out the temp result
})