document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Hello, front end');
    
    document.querySelector('form').addEventListener('submit', (e)=> {
        e.preventDefault();
        
        //Grab values from HTML form
        let tempInput = document.querySelector('#temp').value
        let startInput = document.querySelector("input[name='start-temp']:checked").value
        let currentTemp = document.querySelector("input[name='temp-radio']:checked").value
        
        //Initialize variables
        let tempOutput = 0
        let outputText = ""
        
        
        //Verify that input is a number
        if (isNaN(tempInput)) {
            output.innerText = "Please input a valid number.";
        } else {
            //Change conversion formula based on desired starting/ending metric, and convert temperature
            switch(startInput) {
             case "f":
                if (currentTemp === "f") {
                    tempOutput = tempInput
                    outputText = "Output: " + tempInput + "°F";
                } else if (currentTemp === "c") {
                    tempOutput = Math.round((tempInput-32)*5/9)
                    outputText = "Output: " + tempOutput + "°C";
                } else if (currentTemp === "k") {
                    tempOutput = Math.round((tempInput-32)*5/9+273.15)
                    outputText = "Output: " + tempOutput + "°K";
                } 
            break;
            
            case "c":
                if (currentTemp === "c") {
                    tempOutput = tempInput
                    outputText = "Output: " + tempOutput + "°C";
                } else if (currentTemp === "f") {
                    tempOutput = Math.round((tempInput*9/5)+32)
                    outputText = "Output: " + tempOutput + "°F";
                } else if (currentTemp === "k") {
                    tempOutput = Math.round(tempInput+273.15)
                    outputText = "Output: " + tempOutput + "°K";
                } 
            break;
                
            case "k":
                if (currentTemp === "c") {
                    tempOutput = Math.round(tempInput-273.15)
                    outputText = "Output: " + tempOutput + "°C";
                } else if (currentTemp === "f") {
                    tempOutput = Math.round((tempInput-273.15)*9/5+32)
                    outputText = "Output: " + tempOutput + "°F";
                } else if (currentTemp === "k") {
                    tempOutput = tempInput
                    outputText = "Output: " + tempInput + "°K";
                } 
            break;
            }
            
            
            let newDiv = document.getElementById('output')
            
            if (newDiv !== null) {
                //Change text in existing output div
                newDiv.innerText = outputText
                 
                //Change the element's background based on temperature
                if (tempOutput < 0) {
                    newDiv.style.backgroundColor = '#AEFAF1'
                } else if (tempOutput > 100) {
                    newDiv.style.backgroundColor = '#FACAAE'
                } else {
                    newDiv.style.backgroundColor = 'white'
                }
            } else {
                //Initialize div element containing output
                let newDiv = document.createElement('div')
                newDiv.setAttribute('id', 'output')
                newDiv.className = 'addin'
                newDiv.innerText = outputText
                
                //Change the element's background based on temperature
                if (tempOutput < 0) {
                    newDiv.style.backgroundColor = '#AEFAF1'
                } else if (tempOutput > 100) {
                    newDiv.style.backgroundColor = '#FACAAE'
                } else {
                    newDiv.style.backgroundColor = 'white'
                }
                
                //Append output div to HTML document
                document.body.appendChild(newDiv)
            }
        }
        
    })
    
    //Clear form
    document.querySelector('button').addEventListener('click', (e)=> {
        e.preventDefault();
        document.querySelector('#temp').value = "";
        
        let newDiv = document.getElementById('output')
        if (newDiv !== null) {
            document.body.removeChild(newDiv)
        }
    })
})