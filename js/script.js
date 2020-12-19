submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    let res = document.getElementById("submitText").value

    document.getElementById("feedback").innerText = res

    /*Fahrenheit to Celsius Formula	
(32°F − 32) × 5/9 = 0°C */

/* Celsius to Fahrenheit
(32°C × 9/5) + 32 = 89.6°F

//---Steps for planning out code---/
//get form reference. 
//0Get the import for the Temp.
//How to convert it.
//Check which Radio button is clicked.
//"if F then"
    //convert the imported Temp. from C to F
//else
    //convert Temp. from F to C
//Displayu results on the DOM
