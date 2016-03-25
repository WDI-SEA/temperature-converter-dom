// Create a single page using HTML/CSS that contains an <input> field, a <button> and a <div>.
// Convert the temperature from F to C using the formula we created earlier this week (or Google it).
// User Experience

// User puts in a value into the text field
// User clicks on button
// div gets updated with converted value.
// Make a clear button to reset the fields



//need to add event listener here IF YOU HEAR SUBMIT BUTTON CLICK RUN THIS FUNCTION
//var tempC;
document.getElementById("submit").addEventListener("click", function(){
  //empty function
  function convertToC() {
   var tempF = document.getElementById("input").value; 
   console.log(tempF);


   var temperatureC = (tempF - 32) * (5 / 9);
   console.log(temperatureC); 
   document.getElementById("output").textContent = Math.round(temperatureC);
 }
 //tried to add color here - does not work
  // if (document.getElementById("output").textContent < 0) {
  //   document.getElementById("output").textContent.style.backgroundColor ="red";
  // }
 convertToC();
});

//textContent => calls output and anything else but value
// .value is for input only
// .textContent is for anything else


//need to add event listener here IF YOU HEAR RESET BUTTON CLICK RUN THIS FUNCTION
document.getElementById("reset").addEventListener("click", function(){
  document.getElementById('input').value ="";
  document.getElementById('output').textContent ="";
})

