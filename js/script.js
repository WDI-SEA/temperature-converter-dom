console.log('Hello, front end');

// document.getElementsByClassName('sbmt').onclick = tempConvert;
// document.getElementById('submit').onclick = here;

// document.getElementById('submit').onclick = tempConvert;

document.getElementById('clear').onclick = clearForm;
let f = document.getElementById('farenheit').onclick = tempConvert2;
let c = document.getElementById('celsius').onclick = tempConvert;


document.getElementById('submit').onclick = ( f ) || ( c )


function clearForm () {
    document.getElementById('nums').value = '';
}


function tempConvert() {
    // let farenheit = document.getElementById('nums').value;
    let celsius =  document.getElementById('nums').value;
    
    
    // if (document.getElementById('farenheit').onclick) {
        
    //     farenheit = parseFloat((farenheit * 1.8) + 32);
        
    //     document.getElementById('display').value = parseFloat(farenheit).toFixed(2) + ' °F';
    // } else if(document.getElementById('celsius').onclick) {

    //     celsius = parseFloat((celsius - 32) / 1.8)

    //     document.getElementById('display').value = parseFloat(celsius).toFixed(2) + ' °C';
    // }
    celsius = parseFloat((celsius - 32) / 1.8)

        document.getElementById('display').value = parseFloat(celsius).toFixed(2) + ' °C';

}

function tempConvert2 () {
    let farenheit = document.getElementById('nums').value;
    farenheit = parseFloat((farenheit * 1.8) + 32);
        
    document.getElementById('display').value = parseFloat(farenheit).toFixed(2) + ' °F';
}



// function here() {
//     console.log(document.getElementById('nums').value)
//     let num = document.getElementById('nums').value
//     document.getElementById('display').value = document.getElementById('nums').value + 'f'
// }