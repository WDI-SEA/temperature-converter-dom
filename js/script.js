
//get info from .temp

let submit = document.getElementById('submit')
let f = document.getElementById('f')
let c = document.getElementById('c')
let solution = document.getElementById('solution')
let clear = document.getElementById('clear')


function convert(){
    if(f.checked){
        let temp = document.getElementById('temp').value
        let numTemp = parseInt(temp)
        let newTemp = (numTemp - 30)/2 
        solution.innerText = `${newTemp}°C`
        if(newTemp >= 35){
            document.body.style.backgroundColor = 'red'
        }else if(newTemp <= 0){
            document.body.style.backgroundColor = "#99fadc"
        } else{
            document.body.style.backgroundColor = "white"
        }
        
    } else if(c.checked){
        let temp = document.getElementById('temp').value
        let numTemp = parseInt(temp)
        let newTemp = (numTemp * 1.8 ) + 32
        solution.innerText = `${newTemp}°F`
        if(newTemp >= 100){
            document.body.style.backgroundColor = 'red'
        }else if(newTemp <= 32){
            document.body.style.backgroundColor = "#99fadc"
        } else{
            document.body.style.backgroundColor = "white"
        }
    }
}

function clearText(){
        let temp = document.getElementById('temp')
        temp.value = ""
        solution.innerText = ""
        document.body.style.backgroundColor = "white"
}



submit.addEventListener('click', convert)
clear.addEventListener('click', clearText)

//if F translate to celsius

//if C translate to farenheit


