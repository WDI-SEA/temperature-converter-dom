//console.log('Hello, front end');

document.getElementById('convert').onclick = tempConvert;
document.getElementById(
    clear).onclick = clearForm;



function tempConvert(){
    var fahrenheight = document.getElementById("fahrenheight").value;
    var celcius = document.getElementById("celcius").value;

    if(fahrenheight != '')
    {
        celcius =
        (parseFloat(fahrenheight)-32)/1.8;
        } else {
            fahrenheight = (parseFloat(celcius)*1.8) + 32;
            
        }

        document.getElementById('fahrenheight').value = parseFloat(fahrenheight).toFixed(1);

        document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
    }

    function clearForm() {

        document.getElementById('fahrenheight').value = '';

        document.getElementById('celcius').value = '';
    }