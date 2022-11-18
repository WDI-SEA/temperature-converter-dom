let titleText = document.getElementById("title");
let input = document.getElementById("input");
let f2c = document.getElementById("f2c");
let c2f = document.getElementById("c2f");
//let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let tempArea = document.getElementById("temp-area");
let tempText = document.getElementById("temp-text");

//F to C

let f2cConversion = function() {
    let preConValue = input.value 
    let postConValue = (preConValue - 32) * (5/9); 
    tempText.innerText = Math.floor(postConValue) + " degrees Celcius";

    if(postConValue <= 9) {
        tempText.style.backgroundColor = "cornflowerblue";
    }
    else if(postConValue >= 29) {
        tempText.style.backgroundColor = "red";
    }
    else {
        tempText.style.backgroundColor = "grey";
    }

}
f2c.addEventListener("click", f2cConversion);

//C to F 

let c2fConversion = function() {
    let preConValue = input.value 
    let postConValue = (preConValue * 9/5) + 32; 
    tempText.innerText = Math.floor(postConValue) + " degrees Fahrenheit";

    if(postConValue <= 49) {
        tempText.style.backgroundColor = "cornflowerblue";
    }
    else if(postConValue >= 84) {
        tempText.style.backgroundColor = "red";
    }
    else {
        tempText.style.backgroundColor = "grey";
    }
}
c2f.addEventListener("click", c2fConversion);

//Clear

clear.addEventListener("click", function(e) {
    input.value = " ";
    tempText.innerText = "Temperature conversion will display here";
    tempText.style.backgroundColor = "grey";
})