let CelSolution = null;
let FarSolution = null;

function getTemperature() {
    let inputTemp = document.getElementById("temperature").value
    if (document.getElementById("fahrenheit").checked == true) {
        let Far = inputTemp
        CelSolution = Math.round((Far - 32) * 5 / 9)
        document.getElementById("answer").innerText = CelSolution + "°C"
        celColorChange()
    } else if (document.getElementById("celsius").checked == true) {
        let Cel = inputTemp
        FarSolution = Math.round(Cel * 9 / 5 + 32)
        document.getElementById("answer").innerText = FarSolution + "°F"
        farColorChange()
    }
    // colorChange()
}

// DEFECTIVE SOLUTION

/* 
    Issue: I set CelSolution and FarSolution to global null variables.
    Null registers as an extremely negative digit, so when I write 
    a function that invokes both variables at once as arguments, 
    the null variable throws off the function.
*/

// function colorChange() {
// if (CelSolution <= 0 || FarSolution <= 32) {
//     document.getElementById("answer").style.backgroundColor = "blue"
// } else if (CelSolution >= 32 || FarSolution >= 90) {
//     document.getElementById("answer").style.backgroundColor = "crimson"
// } else {
//     document.getElementById("answer").style.backgroundColor = "white"
// }
// }

/*  
    Solution: Split the colorChange function into two separate functions,
    one for each type of solution variable. 
*/

function celColorChange() {
    if (CelSolution <= 0) {
        document.getElementById("answer").style.backgroundColor = "blue"
    } else if (CelSolution >= 32) {
        document.getElementById("answer").style.backgroundColor = "crimson"
    } else {
        document.getElementById("answer").style.backgroundColor = "white"
    }
}

function farColorChange() {
    if (FarSolution <= 32) {
        document.getElementById("answer").style.backgroundColor = "blue"
    } else if (FarSolution >= 90) {
        document.getElementById("answer").style.backgroundColor = "crimson"
    } else {
        document.getElementById("answer").style.backgroundColor = "white"
    }
}


function clearAnswer() {
    document.getElementById("temperature").value = " ";
    document.getElementById("answer").innerText = " ";
    document.getElementById("answer").style.backgroundColor = "white"
}


