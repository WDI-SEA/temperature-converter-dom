console.log('Hello, front end');

//initialize a variable for both buttons
const clear = document.getElementById('clear')

// const form = document.getElementById('form')
// const submit = document.createElement('button')
// form.appendChild(submit)
// submit.innerText ="Submit"
const submit = document.getElementById('button')

//write a function to convert F t C and manipulate the DOM with the answer
 const fahrToCelc= function() {
     //func active?
     const body = document.getElementById('body')
     const clickedIsTrue = document.createElement('h2')
     clickedIsTrue.innerText = "Submit is Clicked and fahrToCelc is running!"
     body.appendChild(clickedIsTrue)

     //store usier input 
     const f = document.getElementById("inputTemp")
     console.log(f)
    //convert to celcius
    const c = Math.round(5/9 * (f-32))
        console.log(`celcius output: ${c}`)
    //modify DOM so newTemp reads the celcius
    const output = document.getElementById("newTemp")
    output.innerText = c
    //text.onclick = function(){
    
  }


//run conversion process on click
submit.addEventListener('click', fahrToCelc)







//document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)

        //maybe we can make our CONVERT FUNC change the dom on its own

// HTMLFormElement.target
// A DOMString reflecting the value of the form's target HTML attribute, 
// indicating where to display the results received from submitting the form.


/* Create a single page using HTML/CSS that contains 
an input field and a submit button, 
all within a form element.
Additionally, add a clear button
When the submit button is pressed, convert the inputted temperature from 
F to C using 
the appropriate conversion formula (may need to Google it)
*/