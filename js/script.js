

document.getElementById("submitId").addEventListener('click',convertTemp);

document.getElementById("clearId").addEventListener('click',init);

function refresh()
{
    
    let mainParent = document.getElementById("main");
   let divElement= document.getElementById("resultTemp");
   //console.log("para element in clear button",divElement);
   if(divElement!= null)
   {
    mainParent.removeChild(divElement);
   }
    
}

function init()
{
    document.getElementById("temperature").value = "";
    prevInputVal =0;
    prevCheck="";
    refresh();
}

function caclulateTemp(tempVal, ifCheckedF){

    let resultTemp =0;
    if(ifCheckedF) 
    {
        // Convert to Faranheit
        resultTemp= tempVal*9/5 + 32;
        console.log('resultTemp in F',resultTemp);
    }
    else
    {
        // Convert to Celsius
        resultTemp = (tempVal -32)*5/9 ;
        console.log('resultTemp in C',resultTemp);
    }
 
    return resultTemp
}

let prevInputVal =0;
let prevCheck="";

function convertTemp()
{
  let inputVal= document.getElementById("temperature").value; // taking the input value

  
  let ifCheckedF = document.getElementById("F").checked ; // checking if user wants Faranheit
  if(ifCheckedF)
  {

    currentCheck ="F";
  }
  else{
    currentCheck ="C";
  }

  //console.log(inputVal);
 
        if(!isNaN(inputVal) )
        {
           if(prevInputVal==inputVal && prevCheck==currentCheck)
           {
                alert("Please enter a different number or change the  unit of the temperature");
           }
           else 
            {
            //console.log("it is a number");
            refresh();
            let tempValDeci = caclulateTemp(inputVal, ifCheckedF) // ifcheckedF means Faranheit is checked
            let numStr = tempValDeci.toFixed(2);
            let tempVal = parseFloat(numStr);

            let divElement=  document.createElement('p');
           // console.log(divElement);
            divElement.setAttribute('id', "resultTemp");
            divElement.textContent= tempVal;

            changeBackColor(currentCheck, tempVal, divElement);
           
            

            let mainParent = document.getElementById("main");
           // console.log(mainParent);
            mainParent.appendChild(divElement);

            prevInputVal = inputVal;
            prevCheck=currentCheck;

            }

        }
            
        else
        {
            alert("Please enter a number to convert");
        }
}

function changeBackColor(checked, val,domElement){
    if(checked == "F" && val <= 32)
    {
        domElement.style.backgroundColor = 'blue';
    }
    else if(checked == "F" && val >= 85)
    {
        domElement.style.backgroundColor = 'red';
    }
    else if(checked == "C" && val <= 0)
    {
        domElement.style.backgroundColor = 'blue';
    }
    else if(checked == "C" && val >= 40)
    {
        domElement.style.backgroundColor = 'red';
    }
    
}



