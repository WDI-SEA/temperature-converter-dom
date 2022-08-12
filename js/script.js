// assigns input field to a variable
// let input = document.querySelector('#tempInp');

// assigns Submit button to a variable
// let buttonSubmit = document.querySelector('#Submit');

// assigns output display to a variable
let display = document.querySelector('.output .display')

// on Submit click, takes input field variable, does F to C calculation and assigns C label
Submit.addEventListener('click', function(e) {
    display.innerHTML = Math.round((tempInp.value - 32) * (5/9));
    display.innerHTML += " ℃";
})

// on Clear click, clears input field and output display
Clear.addEventListener('click', function(e) {
    display.innerHTML = "";
    tempInp.value = "";
})



