console.log('Hello, front end');
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");
});

function fOrC() {
  if (document.getElementById("F").checked) {
    console.log("FARANHI");
    getTempC();
  } else {
    console.log("CELSIOR");
    getTempF();
  }
};


function getTempC() {
  var title = document.getElementById("display");
  var input = document.getElementById("temp");

  var value = temp.value;
  var result = Math.round((value-32)*(5/9)) + "° C";
  display.textContent = result;
}

function getTempF() {
  var title = document.getElementById("display");
  var input = document.getElementById("temp");

  var value = temp.value;
  var result = Math.round((value*(9/5))+32) + "° F";
  display.textContent = result;
}


document.getElementById("submit").addEventListener("click", function() {
  console.log("submitted");
  fOrC();
  event.preventDefault()
});







//
// var convertToC =function (num){
//   answer = Math.round((num-32)*(5/9)) + "° C";
//   return answer;
// };
//
// var convertToF =function (num){
//   answer = Math.round((num*(9/5))+32) + "° F";
//   return answer;
// };
