//document.addEventListener('DOMContentLoaded', ()=>{
//
//    myDiv.addEventListener('click', (event) => {
//        console.log(event);
//        event.target.style.size = event.target.style.size + 10;
//    })
//    
//     document.querySelector('form').addEventListener('submit', (e)=>{
//         e.preventDefault()
//         console.log(document.querySelector('#info').value)
//     })
//    
//    let a = document.createElement('a')
//    a.href ='http://hackertyper.com/'
//    a.textContent = 'hack!'
//    
//    document.body.appendChild(a)
//})

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Hello, front end');
    
    document.querySelector('form').addEventListener('submit', (e)=> {
        e.preventDefault();
        let tempInput = document.querySelector('#temp').value
        
        output.innerText = "Output: " + Math.round((tempInput-32)*5/9) + "C";
    })
    
})