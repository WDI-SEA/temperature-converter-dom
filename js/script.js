/* 
WIRE FRAMING 
-- get INPUT
----- Figure out if its F / C

---- Action Button Click
------- Depending on which drop down

----------- 1. 
----------- Cinput - Run formula - convert to F
----------- Show results in C in results

----------- 2. 
----------- Finput - Run formula - convert to C
----------- Show results in C in results

-------- SHOW RESULTS
*/



function userConvert() {
    // VARIABLE INPUTS
    const convertTo = document.getElementById("convertTo") 
    const option = convertTo.options[convertTo.selectedIndex]
    const input = document.getElementById("inputTemp")

    // parseInt(userInput.value, 10) to take all values
    let result = document.getElementById("temp-out")
    if (option.value === "C"){

        let convertedTemp = parseInt(input.value) * (9 / 5) + 32;
        convertedTemp = Math.round(convertedTemp * 100) / 100;
        // add F
        convertedTemp = convertedTemp + "° F";  
        result.innerText = convertedTemp

    } else if (option.value === "F"){
       
        let convertedTemp = (parseInt(input.value) - 32) * (5 / 9);
        convertedTemp = Math.round(convertedTemp * 100) / 100;
        // add C
        convertedTemp = convertedTemp + "° C";
        result.innerText = convertedTemp
 
    }
}


// BUTTON EVENT

// submit buttom
let submitButton = document.querySelector('#submitButton')
console.log(submitButton)
submitButton.addEventListener('click', submitValue)

function submitValue(){
    userConvert()
}

// clear buttom
document.querySelector("#clearButton").addEventListener("click", myFunction);

function myFunction() {
    console.log('okay')
  document.querySelector("#inputTemp").value = "";
}


// RESULT
