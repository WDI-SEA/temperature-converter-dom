function rset() {
  console.log("reset");
  document.getElementById("idForm").reset();
  var elResult  = document.getElementById("idOut");
  elResult.innerHTML =""
}
function convert() {
    var unitF = document.getElementById("idF").checked ;
    var temp = document.getElementById("temp").value ;
    console.log(temp) ;
    console.log(unitF) ;
    if (unitF ) {
      var tmp = (temp -32) * 5 / 9;
      unitO = " C" ;
    } else  {
      var tmp =  (temp * 9 / 5) + 32;
      unitO = " F" ;
    }
    tmp = Math.round(tmp);
    console.log(tmp + unitO );
    document.getElementById("idOut").innerHTML = ("equals " + tmp + unitO);
}