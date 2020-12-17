console.log('Hello, front end');
document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    document.querySelector("#practice").value
    let temp =((practice.value-32)*.5556)
    //console.log(document.querySelector("#practice").value + temp)
    return document.querySelector(".result").innerHTML = temp 
    
    console.log(temp)
    let cel = ((practice.value-32)*.5556)
    console.log(e.target)
    })
   //let yourAnswer = prompt('Whats the Temperature in Ferhinhight?', 'Yes/No');

// let cel = ((#practice.value-32)*.5556)
// console.log(cel)
