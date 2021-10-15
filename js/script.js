document.getElementById('submit-temp').addEventListener("click", submitTemp);
document.getElementById('clear-temp').addEventListener("click", clearTemp);


function clearTemp() {
  document.getElementById("Temp").innerHTML = " ";
}

function submitTemp() { 
  if(document.getElementById('f').checked) { convertCtF(); } else if(document.getElementById('c').checked) { convertFtC(); } 
}


function convertFtC() {
 const farTemp = document.getElementById("text-box").value;
  
  document.getElementById("Temp").innerHTML = Math.floor((farTemp - 32)*5/9);
 
}

function convertCtF() {
  const celcTemp = document.getElementById("text-box").value;
  
  document.getElementById("Temp").innerHTML = Math.floor((celcTemp * 9/5)+32);
}

