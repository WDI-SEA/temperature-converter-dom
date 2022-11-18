const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
let output = document.querySelector('#output')
// let answerBox = document.getElementsById('answer');
let textInput = null;
submit.addEventListener('click',function(e){
    let f = document.getElementById('f');
    let c = document.getElementById('c');
    let z = document.querySelectorAll('.radio');
    textInput = document.getElementById('text').value;
    console.log(textInput);

    let newNum = parseFloat(textInput);
    console.log(newNum);

    if(f.checked==true){
        console.log("f chosen");
        fToc(newNum);
    }
    else if(c.checked==true){
        console.log("c chosen");
        cTof(newNum);
    }
    else{
        console.log("ntoghing was checked");
    }
    // if((outputF<=32)||outputC0){}
});

clear.addEventListener('click',function(e){
    output.innerText = ' ';
    c.checked = false;
    f.checked =false;
    let clear = document.getElementById('text').value= ' ';
   
});





function fToc(deg){
    console.log(deg);
let outputC =((deg-32)*5)/9;
// if(outputC <=0){
// answerBox.style.backgroundColor = 'blue'
// }
// if(outputC>=36){}
// answerBox.style.backgroundColor = 'red'
output.innerText = `${outputC.toFixed(1)} ℃`;
return outputC;

}
function cTof(deg){ 
let outputF = (deg*1.8)+32;

output.innerText = `${outputF.toFixed(1)} ℉`;
return outputF;

}






//walk through with gabe
// let titleText = document.getElementById('title');
// let input = document.getElementById('input');
// let ftoc = document.getElementById('fToc');
// let ctof = document.getElementById('cTof');
// let clear = document.getElementById('clear');
// let tempArea = document.getElementById('temp-area');
// let tempText = document.getElementById('temp-text');

// let ftocConversion = function(){
//     let preConValue = input.value;
//     let postConValue = (preConValue-32) * (5/9);
//     tempText.innerText = postConValue;
//     if(postConValue <= 0){
//        // tempArea.style.backgroundColor= 'blue';
//       //  tempText.style.color = 'black';
//         tempText.style.backgroundColor='cornflowerblue';
//     }
//     if(postConValue >= 36){
//         tempText.style.backgroundColor='crimson';
//     }
// }
// ftoc.addEventListener('click',ftocConversion);
// let ctofConversion = function(){
//     let preConValue = input.value;
//     let postConValue = (preConValue * (5/9)) + 32;
//     tempText.innerText = postConValue;
//     if(postConValue <= 32){
//         // tempArea.style.backgroundColor= 'blue';
//        //  tempText.style.color = 'black';
//          tempText.style.backgroundColor='cornflowerblue';
//      }
//      if(postConValue >= 100){
//          tempText.style.backgroundColor='crimson';
//      }
// }
// ctof.addEventListener('click',ctofConversion);
// clear.addEventListener('click',function(e){
//     input.value=' ';
//     tempTextt.innerText = 'temp goes here';
// });