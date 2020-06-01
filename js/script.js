var result = document.getElementById('result');
var fahrenheit = document.getElementById('fahrenheit');
var celsius = document.getElementById('celsius');
var input = document.getElementById('number').value;

document.addEventListener("submit", function(e) {
e.preventDefault()
    if(fahrenheit = (input - 32) * (5/9)) {
       result.innerText = fahrenheit;  
    } else {
        celsius = (input * 1.8) + 32;
        result.innerText = celsius;
    }
    
    })
        document.getElementById("clear").addEventListener("click", function(e) {
        document.getElementById("number").value = "";
        result.innerHTML = "";
       

    })
    

   
   
   
    





