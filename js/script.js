let results = document.querySelector(".results");

var submitButton = document.querySelector(".submit")
submitButton.addEventListener("click", function(e) {
    var inputtedVal = document.querySelector(".tempInput").value
    let farenheit = document.getElementById("farenheit");
    let celsius = document.getElementById("celsius");
    
    if (farenheit.checked === true) {
        inputtedVal = (inputtedVal - 32) * (5/9)
        results.innerText = inputtedVal + " degrees farenheit"
        //console.log(inputtedVal + " degrees farenheit")
    } else if (celsius.checked === true) {
        inputtedVal = (inputtedVal * (9/5)) + 32
        results.innerText = inputtedVal + " degrees celsius"
        //console.log(inputtedVal + " degrees celsius")  
    } else {
        results.innerText = "Please pick farenheit or celsius"
        //console.log ("please pick F or C")
    };
})

var clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", function(e) {
    results.innerText = "";
})






