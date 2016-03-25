function convert() {
    var unitF = document.getElementById("idF").checked ;
    var temp = document.getElementById("temp").value ;
    if (unitF ) {
      var tmp = (temp -32) * (5 / 9);
      unitO = " C" ;
    } else  {
      var tmp =  (temp * 9) / 5 + 32;
      unitO = " F" ;
    }
    tmp = Math.round(tmp);
    console.log(tmp + unitO );
    document.getElementById("idOut").innerHTML = ("equals " + tmp + unitO);
}
document.getElementById('calc').addEventListener('click', convert);
document.getElementById('clear').addEventListener('click', rset);
function rset() {
  document.getElementById("idForm").reset();
}

// get rid of on click and add .eventlisteners
// document.getElementByid("calc").addeventlistener('click', convert);
// document.getElementByid("clear").addeventlistener('click', rset);