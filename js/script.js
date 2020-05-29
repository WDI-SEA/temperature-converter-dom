
function convertTemp(){
    event.preventDefault(); 
    var inputVal = document.getElementById("user-input").value;
    var outputVal = (inputVal - 32) * (5/9);
    document.getElementById("user-output").value = outputVal;
}

document.getElementById("submit").onclick = convertTemp;