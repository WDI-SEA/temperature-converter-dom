//this looks so bad and is definitely not the "correct" answer

document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = resetBox;
function tempConvert(){
    var fTemp = document.getElementById('fahrenheit').value;
    if (fTemp!=''){
       alert((fTemp-32)*(5/9))}
    }
function resetBox(){
    document.getElementById("fahrenheit").value = '';
}