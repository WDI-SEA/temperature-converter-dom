//set up event listener 
//Get our user Submission of form




     //document.addEventListener('DOMContentLoaded', () => {}
       // console.log("👋 Hello!"))

    
    // get our user submission from our form
    
   // let submitButton = document.querySelector("input[type=submit]")

    
    //submitButton.addEventListener("click", (e) => {
      //  e.preventDefault()
    

    // let reg = document.getElementById("submitText").value
    // let rad = document.getElementById("radio").value

    //take user submited text and set as innerText to div id feedback
    
    //document.getElementById("rectangle").innerText = '<p> The temperature is </p>  + reg  + rad '


    //get form data, load it 
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event)){
      console.log("Saving value", form.elements.value.value);
    //   event.preventDefault();
    }

    //   var sock = document.getElementsByName("tempUnit");
    //   function getData (event) {
    //     console.log( event.target.value)
    //     }