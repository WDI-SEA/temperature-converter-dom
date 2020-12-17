document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Hello, front end');
    
    document.querySelector('form').addEventListener('submit', (e)=> {
        e.preventDefault();
        let tempInput = document.querySelector('#temp').value
        
        
        let startInput = document.querySelector("input[name='start-temp']:checked").value
        let currentTemp = document.querySelector("input[name='temp-radio']:checked").value
        
        if (isNaN(tempInput)) {
            output.innerText = "Please input a valid number.";
        } else {
            switch(startInput) {
             case "f":
                if (currentTemp === "f") {
                    output.innerText = "Output: " + tempInput + "F";
                } else if (currentTemp === "c") {
                    output.innerText = "Output: " + Math.round((tempInput-32)*5/9) + "C";
                } else if (currentTemp === "k") {
                    output.innerText = "Output: " + Math.round((tempInput-32)*5/9+273.15) + "K";
                } 
            break;
            
            case "c":
                if (currentTemp === "c") {
                    output.innerText = "Output: " + tempInput + "C";
                } else if (currentTemp === "f") {
                    output.innerText = "Output: " + Math.round((tempInput*9/5)+32) + "F";
                } else if (currentTemp === "k") {
                    output.innerText = "Output: " + Math.round(tempInput+273.15) + "K";
                } 
            break;
                
            case "k":
                if (currentTemp === "c") {
                    output.innerText = "Output: " + Math.round(tempInput-273.15) + "C";
                } else if (currentTemp === "f") {
                    output.innerText = "Output: " + Math.round((tempInput-273.15)*9/5+32) + "F";
                } else if (currentTemp === "k") {
                    output.innerText = "Output: " + tempInput + "K";
                } 
            break;
            }
        }
        
        
    })
    
    document.querySelector('button').addEventListener('click', (e)=> {
        e.preventDefault();
        document.querySelector('#temp').value = "";
    })
})