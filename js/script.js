console.log('Hello, front end');
document.addEventListener('DOMContentLoaded',()=>{
    
    let text=document.createElement('p')
    text.classList.add('resault')
    let div=document.querySelector('#lastId')
    div.appendChild(text)
    
   document.querySelector('#submit').addEventListener('click',(event)=>{
       event.preventDefault()
       
       let tem=document.querySelector('#tem').value
       let radioC=document.querySelector('#C').checked
       let radioF=document.querySelector('#F').checked
       if(radioC==true){
           let temCOnverted=convert(tem,'c')
           showTem(temCOnverted,'c')
       }
       else if(radioF==true){
          let temConverted= convert(tem,'f')
          showTem(temConverted,'f')

       }

   })
   document.querySelector('#clear').addEventListener('click',()=>{
    document.querySelector('#tem').value=null
    document.querySelector('#C').checked=false
    document.querySelector('#F').checked=false
    document.querySelector('.resault').innerText=null
    text.style.backgroundColor=null
   })

//   let x=document.querySelector('C').checked;
 
})

function convert(degree,unit){
    if (unit === 'c'){
        let cell=(degree-32)*(5/9 )
        console.log("C="+cell)
        return cell
    }
    else{
        let farenhad=(degree*(9/5))+32
        console.log("F="+farenhad)
        return farenhad
    }

}
function showTem(degree,unit){
    let text=document.querySelector('.resault')
    text.innerText=degree+'°'+unit
    text.style.margin="20px 100px 20px 100px"
    text.style.padding="40px"

    if(degree<30 && unit=='c'){
        text.style.backgroundColor='blue'
    }
    if(degree>30 && unit=='c'){
        text.style.backgroundColor='red'

    }
    if(degree<50 && unit=='f'){
        text.style.backgroundColor='blue'
    }
    if(degree>50 && unit=='f'){
        text.style.backgroundColor='red'

    }
  
}