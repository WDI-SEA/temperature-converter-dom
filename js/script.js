// window.addEventListener("DOMContentLoaded", () => {
//
const fConv = () => {
  let fahrenheitIn = document.getElementById("userInput").value;
  let conv = Math.floor((fahrenheitIn - 32) / 1.8);

  // Check to see if integer entered
  if (isNaN(fahrenheitIn)) {
    document.getElementById("txt").innerHTML = `Hey, that's not a number!`;
    document.getElementById("txt2").innerHTML = "";
    // Check to see if form is empty
  } else if (fahrenheitIn === "") {
    document.getElementById(
      "txt"
    ).innerHTML = `This doesn't work if you don't enter a temperature!`;
    document.getElementById("txt2").innerHTML = "";
  } else if (fahrenheitIn >= 80) {
    document.body.style.backgroundColor = "red";
    document.getElementById("txt").innerHTML = `${fahrenheitIn}°F = ${conv}°C`;
    document.getElementById("txt2").innerHTML = `THAT'S HOT!!`;
  } else if (fahrenheitIn <= 60) {
    document.body.style.backgroundColor = "blue";
    document.getElementById("txt").innerHTML = `${fahrenheitIn}°F = ${conv}°C`;
    document.getElementById("txt2").innerHTML = `THAT'S COLD!!`;
  } else {
    document.body.style.backgroundColor = "#009191";
    document.getElementById("txt").innerHTML = `${fahrenheitIn}°F = ${conv}°C`;
    document.getElementById("txt2").innerHTML = `THAT TEMP'S JUST RIGHT!!`;
  }
};

const clearForm = () => {
  document.getElementById("userInput").value = "";
  document.getElementById("txt").innerHTML = "";
  document.getElementById("txt2").innerHTML = "";
  document.body.style.backgroundColor = "#bbbbbb";
};
//
// });
