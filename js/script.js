
window.addEventListener("DOMContentLoaded", ()=>{
// const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;



//add a button event listener
let buttonElem = document.querySelector("button")
buttonElem.addEventListener("click", ( {
    // let bodyTag = document.querySelector("body")
    // bodyTag.innerHTML = "<h2> You clicked the button!</h2>"
    function convertFahrenheitToCelcius(fahrenheit) {
        return (fahrenheit -32) * 5/9;

})
// function convertFahrenheitToCelcius(fahreheit){
//     return (fahrenheit -32) * 5/9;
}
var result = convertFahrenheitToCelcius(theirInput);
alert(result);

// document.onkeydown=function(){
//     if(window.event.keyCode=='13'){
//         submitForm();
    }
}
}