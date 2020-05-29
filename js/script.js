console.log('Hello, front end');


//When the submit button is pressed 
var submitButton= document.getElementById('submit')
//get a reference to submit button
var submitButton= document.querySelector('submit')
submitButton.addEventListener('click', function()

document.getElementsById('submit').addEventListener('click',()=> {
    console.log(document.getElementsById('user-input').value)
})
//event listener
submitButton.addEventListener('click', function(e){
    console.log ("clicked")
})

//convert the inputted temperature from F to C using the appropriate conversion formula (may need to Google it)
var converted = function (x){
    return (x-32)*5/9
}
//access the inputted value
var inputtedVal = document.getElementById('user-input').value
console.log("inputed")
//run it through a conversion formula

//update DOM with the converted temp value
//display the result onto dom


//clear results when button is pressed
function clearButton () {
    document.getElementById('clear').value
}