// Assigning the output div to a variable "test"
const test = document.querySelector(".output");
// This is supposed to capture the value in the dropdown menu for conversion type
const ddlConvert = document.getElementById("ddlTemp");
const value = ddlConvert.options[ddlConvert.selectedIndex].value;

// Submit button clicked event.  It is intended to figure out the calculation to convert the input box to the correct conversion and add it into the output div in the html.
document.getElementById("submit").addEventListener("click", () => {
    // Assigning the input text to a variable
    const input = document.getElementById("temp").value;
    // Conversions of temperature from fahr to celc and celc to fahr
    const fToC = (input - 32) / 1.8;
    const cToF = (input * 1.8) + 32;
        
    if (value === "fToC") {
        test.innerHTML = fToC;
    }
    // This is not working!  It is not detecting when Celcius to Fahrenheit is selected in the dropdown options.  It only stays at the Fahrenheit to Celcius for some reason.  Cannot figure this out yet.
    else if (value == "cToF") {
        test.innerHTML = cToF;
        console.log("cToF is working!")        
    }
    // This changes the color of the output div to blue or red based on the temperature
    if (input <= 32) {
        test.style.backgroundColor = "blue";
    }
    else if (input >= 95) {
        test.style.backgroundColor = "red";
    }
})
// Reset buttong click event.  Changes the output div text to none, the input field to blank, and the output div color to green(default)
document.getElementById("clear").addEventListener("click", () => {
    test.innerHTML = "";
    document.getElementById("temp").value = "";
    test.style.backgroundColor = "green";
})