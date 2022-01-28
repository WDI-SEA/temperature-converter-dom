console.log('Hello, front end');
const ftc = document.getElementById('FtoC')
const ctf = document.getElementById('CtoF')
const userInput = document.getElementById('userTemp').value




// let x = document.getElementById("userTemp").value;
let degchoice = 0
console.log(degchoice)





function getInput() {
    var x = document.getElementById("userTemp").value;
    document.getElementById("confirm").innerText = `You submitted ${x} degrees ` ; console.log(x);
     degchoice = x; console.log(degchoice)
   
}

let radchoice = ftc
function displayRadioValue() {
    let tempChoice = document.getElementsByName('tempChoice');
    for(i = 0; i < tempChoice.length; i++) {
        if(tempChoice[i].checked)
      ; radchoice = document.querySelector('input[name="tempChoice"]:checked').value
    }



console.log(radchoice)

    function conversion() {
        if (radchoice == 'ftc') { console.log((degchoice - 32) * .5556);document.getElementById("result").innerText = `You submitted ${degchoice} degrees farenheit and that converts to ${(degchoice - 32) * .5556} degrees celcius` }
        else {console.log((degchoice *9)*.2+32);document.getElementById("result").innerText = `You submitted ${degchoice} degrees Celcius and that converts ${(degchoice *9)*.2+32} degrees Farenheit `}

    }
    


    conversion()
    
}


// //  document.getElementById("convtChoice").innerText
// = `You're converting ${tempChoice[i].value}`




