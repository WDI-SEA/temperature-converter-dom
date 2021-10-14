/* PSEUDO CODE */



/* ELEMENT SELECTION */
const btnSubmit = document.getElementById("submit-input")
console.log(btnSubmit)
const userInput = document.getElementById("input-field")
console.log(userInput)
const clearButton = document.getElementById("clear")
console.log(clearButton)
const radioButtons = document.querySelectorAll('input[type="radio"]')
console.log(radioButtons)
const tempDisplay = document.getElementById('temperature')

/* EVENT LISTENERS */

btnSubmit.addEventListener('click', submitInput) // for submission
clearButton.addEventListener('click', clearInputField) // clearing text field



function submitInput(e) {
    /* store value of input */
    e.preventDefault()
    console.log('click')
    if (typeof userInput.value !== "Number") {
        tempDisplay.innerText = `What you entered was not a Number!`
    } else {
    const farenheit = userInput.value;
    console.log(farenheit)
    }
    /* check if C or K is selected */
    let userChoice = 0;


    for (i = 0; i < radioButtons.length; i++) {
        console.log(radioButtons[i].checked)
        // set radio button logic prior to form submission:
        if (radioButtons[i].checked == true) {
            userChoice = radioButtons[i].value
            console.log(userChoice)
        } 
    }
    // Apply Formula and Display with radio button Value
    // DISPLAY THE VALUE IN THE H2 CONTAINER
    var displayText;
    switch(userChoice) {
    
        case "C":
        displayText = ftoC(farenheit) 
        console.log(displayText)
        tempDisplay.innerText = `${displayText} Celcius`
        break;

        case "K":
        displayText = ftoC(farenheit) + 273.15
        console.log(displayText)
        tempDisplay.innerText = `${displayText} Kelvin`
        break;
    
        default:
            console.log("C or K were not selected.")
            break;
    }
} 

function clearInputField(e) {
    userInput.value = ""
}


function ftoC (farenheit) {
    return (farenheit - 32) * (5/9)
}



    








/* RETRIEVE RADIO BUTTON SELECTION */

/* function addToDoItem (e) {
  console.log("click")  
  const newListItem = document.createElement('li')
  const newListItemContent = inputForm.value;
  newListItem.classList.add('todo-item');
  const newDeleteButton = document.createElement('button')
  newDeleteButton.classList.add('delete-item');
  newListItem.append(newListItemContent);
  newListItem.append(newDeleteButton);
  todoList.append(newListItem)
  inputForm.value = "";
}*/

