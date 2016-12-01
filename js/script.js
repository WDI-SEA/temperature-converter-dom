console.log('Hello, front end');


document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

var cel=dcoument.getElementById('C')
var far=document.getElementById('F')

var ftoc=document.getElementById('ftoc')
var ctof=document.getElementById('ctof')

function one(){
  ctof.checked=false;
}

function two(){
  ftoc.checked=false;
}

function valid()
{
  if(ftoc.checked) {
    ftoc()
  } else if(ctof.checked) {
    ctof()
  }
}

function ctof() {
  var x;
  i
}

function ftoc() {

}

function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = (x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = (x);
    }
}
