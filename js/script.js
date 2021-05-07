// Temperature Function

function temp() {
    let x = document.getElementById("numberInput").value
    let y = 273.15
    let z = document.getElementById("tempContainer")
    let b1 = document.getElementById("input1")
    let b2 = document.getElementById("input2")
    let b3 = document.getElementById("input3")
    let b4 = document.getElementById("input4")
    let b5 = document.getElementById("input5")
    let b6 = document.getElementById("input6")
    let FtoC = Math.round((x - 32) * 5 / 9)
    let FtoK = Math.round(((x - 32) * 5 / 9) + 273.15)
    let CtoF = Math.round((x * 9 / 5) + 32) 
    let CtoK = Math.round(+x + +y)
    let KtoF = Math.round(((x - 273.15) * 9 / 5) + 32)
    let KtoC = Math.round(+x - +y)

    //Radio Button Checks

    if(b1.checked) {
       document.getElementById("tempDisplay").innerHTML = `${FtoC} °C`
        //Temperature Checks
       
        if (FtoC >= 32) {
            z.classList.add("red")
        }
        else {
            z.classList.add("blue")
        }
       b1.checked = false 
    }
    else if(b2.checked) {
        document.getElementById("tempDisplay").innerHTML = `${FtoK} K`
        if (FtoK >= 305) {
            z.classList.add("red")
        }
        else {
            z.classList.add("blue")
        }        
        b2.checked = false 
    }
    else if(b3.checked) {
        document.getElementById("tempDisplay").innerHTML = `${CtoF} °F`
        if (CtoF >= 90) {
            z.classList.add("red")
        }
        else {
            z.classList.add("blue")
        }
        b3.checked = false 
    }
    else if (b4.checked) {
        document.getElementById("tempDisplay").innerHTML = `${CtoK} K`
        if (CtoK >= 305) {
            z.classList.add("red")
        }
        else {
            z.classList.add("blue")
        }
        b4.checked = false
    } 
    else if(b5.checked) {
        document.getElementById("tempDisplay").innerHTML = `${KtoF} °F`
        if (KtoF >= 89) {
            z.classList.add("red")
        }
        else {
            z.classList.add("blue")
        }
        b5.checked = false 
    }
    else {
        document.getElementById("tempDisplay").innerHTML = `${KtoC} °C`
        console.log(FtoC)
        if (KtoC >= 32) {
            z.classList.add("red")
        }
        else {
            z.classList.add("blue")
        }
        b6.checked = false 
    }
}

// Clear Button

function clear() {
   let x = document.getElementsByClassName("submit-button2")
   // Targeting x when Clear is clicked to clear input box 

   if(x.onClick = true) {
       document.getElementById("tempDisplay").value = ''
   }
}

//Function Calls

temp()
clear()

