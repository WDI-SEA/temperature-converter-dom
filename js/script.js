var form = document.querySelector("form");
var div =  document.querySelector("#result")



form.addEventListener("submit", function(e){

    event.preventDefault();

    var input = form.elements[input].value;
    

    if (form.elements["F"].checked === true){

        var convertedTemp = (input -32) * (5/9);
        div.innertext = ConvertedTemp;
       

    }


})





/*

VVVVVV everything I tried... in pieces 



document.getElementById(submitBtn).addEventListener("submit", () => {
    
    console.log(document.getElementById("entry").value)
    event.preventDefault()

})

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(document.getElementById("entry").value)
  });


  var element;
  element = document.getElementBycla("result");
  if (element) {
      element.innerHTML = "-new content-";
  }

let new= document.createElement("p")
.appendChild
e.preventDefault()



function cToF(celsius) 
{
  var cTemp = celsius;
  var fResult = cTemp * 9 / 5 + 32;
  return fResult;
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var cResult = (fTemp - 32) * 5 / 9;
  return cResult
} 
