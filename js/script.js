document.addEventListener('DOMContentLoaded', () => 
    console.log("👋 Hello!")

    
    // get our user submission from our form
    
    let submitButton = document.querySelector("input[type=submit]")

    
    //submitButton.addEventListener("click", (e) => {
      //  e.preventDefault()
    

    let reg = document.getElementById("submitText").value
    let rad = document.getElementById("radio").value

    //take user submited text and set as innerText to div id feedback
    
    //document.getElementById("rectangle").innerText = '<p> The temperature is </p>  + reg  + rad '
