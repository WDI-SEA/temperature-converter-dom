
document.getElementById('clear').addEventListener('click', function(event){
  document.getElementById('userinput').value = '';
  document.getElementById('conversion').textContent = '';
});

document.getElementById('submit').addEventListener('click', function(event){
  console.log(event);
  var f = document.getElementById('userinput').value;

  var fToC = (5/9) * (f-32);
  var cToF = f * 9/5 + 32;

  var tempOutput = function(f) { 
    if (document.getElementById('c-radio').checked === true){
      return fToC;
}   else {
      return cToF;
}
}

  document.getElementById('conversion').textContent = (tempOutput(f)).toFixed(1) + " Degrees";
});

//     if (document.getElementById('f-radio').checked && (tempOutput(f)) > 90) {
//       document.getElementById('conversion').style.color = "red";
// }   else if (document.getElementById('c-radio').checked && (tempOutput(f)) > 32) {
//       document.getElementById('conversion').style.color = "red";
// }   else if (document.getElementById('f-radio').checked && (tempOutput(f)) < 32) {
//       document.getElementById('conversion').style.color = "blue";
// }   else if (document.getElementById('c-radio').checked && (tempOutput(f)) < 0) {
//       document.getElementById('conversion').style.color = "blue";
// }   else {
//     '';
// }




