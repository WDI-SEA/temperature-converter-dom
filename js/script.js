document.getElementById("tempInput").addEventListener("submit", (e) => {
    e.preventDefault();
})

var results = document.querySelector(".results");

function buttonClick(e) {
  var number = document.getElementById("temperature").value;
  var answer =  (number - 32)*(5/9);
  results.innerText = answer;
}

function clearButtonClick(e) {
  document.getElementById("tempInput").reset();
}


document.getElementById("buttonSubmit").addEventListener("click", buttonClick);
document.getElementById("buttonClear").addEventListener("click", clearButtonClick);