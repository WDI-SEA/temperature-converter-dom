document.addEventListener('DOMContentLoaded', () => {
    console.log("👋 Hello!")
    
    // get our user submission from our form
    
    let submitButton = document.querySelector("input[type=submit]")

    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
    

    let res = document.getElementById("submitText").value
    let radio = document.getElementById("radio").value

    //take user submited text and set as innerText to div id feedback
    document.getElementById("rectangle").innerText = "The temperature is " + res + " " + radio + <br> + res



})  


})

//get form reference
//get the import for the temp
// how to convert
// check which raido button is clicked
if F
    