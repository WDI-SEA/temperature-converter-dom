//Set value of temp to that of user input
var tempresult = document.querySelector(".output");
var form = document.querySelector("form");
var temp = form.elements["#user-input"].value;
// const fradio = document.getElementById("f")
// const cradio = documnet.getElementById("c")
// function clearFeild() {
//     document.getElementById("sub").reset();
// }
form.addEventListener("submit", function(e) {
    e.preventDefault();
})
form.elements("submit").addEventListener("submit", function(e) {
    if (form.elements["f"].checked === true) {
        var convertedNum = (temp - 32) * (5/9);
        tempresult.innerText = convertedNum;
    } else if (form.elements["c"].checked === true) {
        var convertedNum = (temp * 1.8) + 32;
        tempresult.innerText = convertedNum;
    } else {
        tempresult.innerText = "Please select if you 'F' or 'C'";
    }
})


// document.getElementById("Clear").addEventListener("click", clearFeild());
// function Calculate(){

//}
// I stole this almost directly from Annas mock, and frankly need it explained better
form.elements["clear"].addEventListener('click', fuction(e) {
    form.elements["input"].value = "";
    tempresult.innerText = "";
})