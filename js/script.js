var toCelsius = document.querySelector("#submit");
toCelsius.addEventListener("click", function(event){
    var input = document.querySelector("#inputBox").value;
    var solution = document.querySelector("#convertedValue").innerHTML = 
    solution = ((input * (9/5)) + (32) + "°F");
})

