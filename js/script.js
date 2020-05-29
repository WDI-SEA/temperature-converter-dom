
/*variables that we are wanting to listen for */

var hot = document.getElementsByClassName(".hot").value
var temp = document.getElementById("#temp")
var entry = document.getElementById("#Entry")

/*function that will listen for an entry and submission, it should take the text submitted and spit it into the conditionals below */

document.getElementById('#entry').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(document.getElementById('#submit')value)})
/*conditionals that should return the value if you select either the F or C radio button */ 

if (farenheit.checked === true){
let temp = document.querySelector(".radio");
temp.addEventListener("click", function(e){
    function temp(value) {
        return ((value - 32) *5)/9; 
    }
})}
else (farenheit.checked === true) {
let temp = document.querySelector(".radio");
temp.addEventListener("click", function(e){
    function temp(value) {
        return ((value/5) *9) +32;
    }
})}

