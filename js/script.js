console.log('Hello, front end');

const convertSubmit = document.querySelector('#sub')
const clearDisp =  document.querySelector('#clr')
const fahrenheit = document.querySelector('#fah')
const celcius = document.querySelector('cel')
const kelvius = document.querySelector('kel')


convertSubmit.addEventListener('click', toConvert)
clearDisp.addEventListener('click', toClear)

// 0 -Fahrenheit
// 1 -Celcius
// 2 -Kelvin


function toConvert(event){
    let cTo = document.getElementsByName('to')
    let x = document.getElementById('userInput').value
    
    if( x instanceof String){
        return 0   
    }else{
        if(cTo[0].checked){
            convertToFahren(document.getElementById('userInput').value)
        }else if(cTo[1].checked){
            convertToCelcius(document.getElementById('userInput').value)
        }else if(cTo[2].checked){
            convertToKelvin(document.getElementById('userInput').value)
        }
    }

}

function toConvert1(){
    let cTo = document.getElementsByName('to')

    if(cTo[0].checked){
        convertToFahren(document.getElementById('userInput').value)
    }else if(cTo[1].checked){
        convertToCelcius(document.getElementById('userInput').value)
    }else if(cTo[2].checked){
        convertToKelvin(document.getElementById('userInput').value)
    }

}

function toClear(event){
    let clear = document.getElementById('userOutput')
    clear.value = " "
    clear.style.backgroundColor = 'white'
}

function convertToFahren (input){
    let cFrom = document.getElementsByName('from')
    let out = document.getElementById('userOutput')
    let num = input

    if(cFrom[1].checked){
        num = Math.round((((input * 9)/5)+32) * 100) / 100  
        if(num <= 32) { //freezing
            out.style.backgroundColor = 'blue'
            out.style.color = 'white'
        }else if(num >= 33 && num <= 59) { //cold
            out.style.backgroundColor = 'lightskyblue'
            out.style.color = 'black'
        }else if(num >= 60 && num <= 98.6){
            out.style.backgroundColor = 'white'//fair
            out.style.color = 'black'
        }else if(num > 98.7) { //boiling
            out.style.backgroundColor = 'red'
            out.style.color = 'white'
        }  
    }
    else if(cFrom[2].checked){
        out.style.backgroundColor = 'white'
        out.style.color = 'black'
        num = Math.round(((((input -32)*5)/9) + 273.15) * 100) / 100
    }

    out.value = num  
}  

function convertToCelcius (input){
    let cFrom = document.getElementsByName('from')
    let out = document.getElementById('userOutput')
    let num = input

    if(cFrom[0].checked){
        num = Math.round((((input-32)*5)/9) * 100) / 100
        if(num <= 0) { //freezing
            out.style.backgroundColor = 'blue'
            out.style.color = 'white'
        }else if(num >= 1 && num <= 15) { //cold
            out.style.backgroundColor = 'lightskyblue'
            out.style.color = 'black'
        }else if(num >= 16 && num <= 37){
            out.style.backgroundColor = 'white'//fair
            out.style.color = 'black'
        }else if(num > 38) { //boiling
            out.style.backgroundColor = 'red'
            out.style.color = 'white'
        } 
    }
    else if(cFrom[2].checked){
        out.style.backgroundColor = 'white'
        out.style.color = 'black'
        num = Math.round((input - 273.15) * 100) / 100
    }
    
    out.value = num
}
function convertToKelvin (input){
    let cFrom = document.getElementsByName('from')
    let out = document.getElementById('userOutput')
    let num = input

    if(cFrom[0].checked){
        out.style.backgroundColor = 'white'
        out.style.color = 'black'
        num = Math.round(((((input -32)*5)/9)+273.15) * 100) / 100     
    }
    else if(cFrom[1].checked){
        out.style.backgroundColor = 'white'
        out.style.color = 'black'
        num = Math.round((input + 273.15) * 100) / 100
    }
    
    out.value = num
}

