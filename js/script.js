document.addEventListener('DOMContentLoaded', ()=>{
    console.log('hello')
    document.querySelector('form').addEventListener('submit',(e)=> {
        e.preventDefault() //prevents the browser from refreshing
        let temp = document.getElementById('temp').value
        console.log(temp)
        let from = document.getElementById('from').value
        console.log(from)
        let to = document.getElementById('to').value
        console.log(to)
    
        let ans = TempConv(temp,from,to)
        console.log(ans)

        let cl = bckg(temp,from)
        console.log(cl)
        
        let divr = document.createElement('div')
        divr.textContent = ans
        divr.setAttribute('class','result') 
    
        if (cl === 0){
            divr.setAttribute('style','background-color: blue;')
        }else if (cl === 1){
            divr.setAttribute('style','background-color: red;')
        }else {
            divr.setAttribute('style','background-color: dimgray;')
        }
        document.body.appendChild(divr)

    
    
    })    

    



})
function TempConv(value,unit1,unit2){
    if (unit1 === "Celsius"){
        if (unit2 === "Fahrenheit"){
            console.log("C to F")
            let r1 = ((value*9)/5)+32
            return r1
        }else {
            console.log('C to K')
            let r2 = value + 273.15
            return r2
        }
    }else if (unit1 === "Fahrenheit"){
        if (unit2 === "Celsius"){
            console.log('F to C')
            let r3 = ((value -32)*5)/9
            return r3
        }else {
            console.log('F to K')
            let r4 = ((value + 459.67)*5)/9
            return r4
        }
        
    }    
}

function bckg(value,unit1){
    let x = ""
    if (unit1 === "Celsius"){
        if (value < 0){
            return 0
        }else if (value >40){
            return 1
        }else {
            return 2
        }
    }else if (unit1 === "Fahrenheit"){
        if (value < 32){
            return 0
        }else if (value >104){
            return 1
        }else {
            return 2
        }
    }else {
        if (value < 273.15){
            return 0
        }else if (value > 313.15){
            return 1
        }else {
            return 2
        }
    }
}