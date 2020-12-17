document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
   
    let tempIn = document.getElementById('box1')
    
    tempIn.innerText = document.querySelector('#tempInput').value
  
    let tempOut = document.getElementById('box2')
    
    let value = document.querySelector('#tempInput').value
    
    tempOut.innerText = (parseInt(value) - 32) * 0.5556

  })
  
  document.querySelector('form').addEventListener('reset', (e) => {
    
    
    let tempIn2 = document.getElementById('box1')
    
    tempIn2.innerText = "F"
    
    let tempOut2 = document.getElementById('box2')
    
    tempOut2.innerText = "C"
  })

  