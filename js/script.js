let return = document.querySelector('.display')
//event for inputToC button
//formula  from f to c (32°F − 32) × 5/9 
inputToC.addEventListener('click', function(e) {
return((userInput - 32)*5/9)
}

//event for inputToF button
//formula from c to f (32°C × 9/5) + 32
inputToF.addEventListener('click', function(e) {
r   eturn(userInput*9)/5+32)
})