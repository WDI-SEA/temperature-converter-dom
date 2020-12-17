document.querySelector("#submit").addEventListener("click", (e)=> convert(e));

document.querySelector("#clear").addEventListener("click", convert)

let result = document.getElementById("result");
let farCel = document.getElementById("farCel");

function convert(e) {
    e.preventDefault()
    farCel = farCel.value
    let resultTemp = 0;
    if (document.getElementById("C").checked) {
        resultTemp = (farCel*9/5+32) 
    } else {
        resultTemp = (farCel-32) * .5556;
    }
    result.innerText = resultTemp;
}

//it functions, but not exactly how I'd like it to. If F checked and
//for example input 5, it outputs the correct Celcius Temp, but next to the C
//as -15.0011, but need to refresh the page each time to use it again as the
//submit and clear button go away immediately after hitting submit