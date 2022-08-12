
// sub.addEventListener('submit', (e) =>{
//     e.prevent
// });

// function tempConFahr(temp) {
//     return (9/5 * temp) + 32
// }

// function tempConCel(temp) {
//     return (temp - 32) * (5/9)
// }

document.getElementsById('sub').onclick = tempCon;
document.getElementsById('clr').onclick = clrOut;

function tempCon() {
    let fTemp = document.getElementsById('fahr').value;
    let cTemp = document.getElementsById('cel').value;
  
  if (fTemp !== '') {
        cTemp = (parseFloat(fTemp) - 32) / 1.8;
    } else {
        fTemp = (parseFloat(cTemp) * 1.8) + 32;
    }
    document.getElementsById('fahr').value = parseFloat(fTemp).toFixed(1);
    document.getElementsById('cel').value = parseFloat(cTemp).toFixed(1);
}


function clrOut() {
    document.getElementsById('fahr').value = '';
    document.getElementsById('cel').value = '';
    }


//// GABE'S CODE vv


// let input = document.querySelector('#input')
// let fToC = document.querySelector('#fToC')
// let cToF= document.querySelector('#cToF')
// let clear = document.querySelector('#clear')
// let result = document.querySelector('#result')

// // adding event listeners

// fToC.addEventListener("click", function(e) {
//     let perConversion = input.value
//     let postConversion = (perConversion - 32) * (5/9)
//     result.innerText + postConversion

//     if (postConversion <= 0) {
//         result.getElementsByClassName.backgroundColor = 'DeepSkyBlue'
//     } else if (postConversion > 38) {
//         result.getElementsByClassName.backgroundColor = 'FireBrick'
//     }
// })

// cToF.addEventListener("click", function(e) {
//     let perConversion = input.value
//     let postConversion = (perConversion * 1.8) + 32
//     result.innerText + postConversion
// })

// clear.addEventListener("click", function(e) {
//     result.innerText = ''
//     input.value = ''
// })
