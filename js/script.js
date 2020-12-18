console.log('Hello, front end');

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()

    

    let isFarenheit = document.getElementById('farenheit').checked
    
    let temp = document.getElementById('temp').value

    let newTemp 

    if (isFarenheit) {
        newTemp = (temp - 32) * 5/9
    } else {
        newTemp = (temp * 9/5) + 32 
    }
      
    document.getElementById('output').innerText = newTemp
    
})

document.getElementById('clear').addEventListener("click", function(){
    document.getElementById('temp').value = ''
    document.getElementById('output').innerText = ''
})