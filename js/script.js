/* Bonuses:
   Blue and red colors for temp ranges (X)
   Radio buttons to select units (X)
   Using form so that "enter" will convert temp ()
   Styling: font (X) | images () | colors (X) | borders (X)
   Convert to and from Kelvins ()
*/

// Delaring Variables
let tempInput = document.querySelector("#tempInput");
let radioF = document.querySelector("#toF");
let radioC = document.querySelector("#toC");
let goBtn = document.querySelector("#goBtn");
let clearBtn = document.querySelector("#clearBtn");
let resultBox = document.querySelector(".result-box");
let result = document.querySelector(".result");

// Events
goBtn.addEventListener("click", function(e)
{
    let finalTemp = null;
    if (radioF.checked)
    {
        finalTemp = ((tempInput.value - 32) * 5 / 9).toFixed(1);
        result.innerText = finalTemp + " °C";
        resultBox.style.height = "20vh";
        resultBox.style.border = "2px solid black";
        if (finalTemp <= 0)
        {
            resultBox.style.backgroundColor = "blue";
        }
        else if (finalTemp >= 100)
        {
            resultBox.style.backgroundColor = "red";
        }
        else
        {
            resultBox.style.backgroundColor = "chartreuse";
        }
    }
    else if (radioC.checked)
    {
        finalTemp = (tempInput.value * 9 / 5 + 32).toFixed(1);
        result.innerText = finalTemp + " °F";
        resultBox.style.height = "20vh";
        resultBox.style.border = "2px solid black";
        if (finalTemp <= 32)
        {
            resultBox.style.backgroundColor = "blue";
        }
        else if (finalTemp >= 212)
        {
            resultBox.style.backgroundColor = "red";
        }
        else
        {
            resultBox.style.backgroundColor = "chartreuse";
        }
    }
})

clearBtn.addEventListener("click", function(e)
{
    tempInput.value = "";
    result.innerText = "";
    resultBox.style.backgroundColor = "rgba(0,0,0,0)";
    resultBox.style.border = "0";
})