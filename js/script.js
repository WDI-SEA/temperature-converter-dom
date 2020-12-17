document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Hello, front end');
    
    document.querySelector('form').addEventListener('submit', (e)=> {
        e.preventDefault();
        let tempInput = document.querySelector('#temp').value
        
        let currentTemp = document.querySelector("input[name='temp-radio']:checked").value
        
        if (currentTemp === "c") {
            output.innerText = "Output: " + Math.round((tempInput-32)*5/9) + "C";
        } else if (currentTemp === "f") {
            output.innerText = "Output: " + Math.round((tempInput-32)*5/9) + "C";
        } else if (currentTemp === "k") {
            output.innerText = "Output: " + Math.round((tempInput-32)*5/9+273.15) + "K";
        } else {
            output.innerText = "Please select a temperature to convert to!";
        }
        
        
    })
    
    document.querySelector('button').addEventListener('click', (e)=> {
        e.preventDefault();
        document.querySelector('#temp').value = "";
    })
})