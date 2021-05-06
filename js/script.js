





console.log('Hello, front end');



document.getElementById("convert").addEventListener("click", () =>{
    
    let tempInput =document.getElementById("tempInput").value;
    console.log(tempInput)
    
    if(document.getElementById('F').checked == true) { 

         let ans = ((tempInput-32)/1.8)
        document.querySelector("#disp").innerText = `Temperature: `+ans

      }else if(document.getElementById('C').checked == true){

         let ans = ((tempInput*1.8)+32)
        document.querySelector("#disp").innerText = `Temperature: `+ans
          

      }else{
          alert("You have not selected a conversion unit")
      }


})

//Button to clear screen
document.getElementById("clear").addEventListener("click", () =>{
    
    document.querySelector("#disp").innerText = ``
    document.getElementById("tempInput").value = "";
})





function convertF(tempinput){
   return ((tempInput-32)/1.8)
}
function convertC(tempinput){
    return((tempInput*1.8)+32)
}
// function buttonTry(){
//     if(document.getElementById('F').checked == true) {   
//       console.log("F")
//     }else if(document.getElementById('C').checked == true){
//         console.log("C")
//     }else{
//         alert("You have not selected a conversion unit")
//     }

// }


/*
If button clicked, take text (#) and


if f to C, run Convert F


else run convert C


output in text box at bottom 

if no button checked, add alert



*/