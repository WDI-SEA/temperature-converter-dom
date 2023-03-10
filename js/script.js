let inputField = document.querySelector("input");
let submitButton = document.querySelector("#submit-button");
let clearButton = document.querySelector("#clear-button");
let display = document.querySelector("#display");

const displayInput = () => {
  input = inputField.value;
  if (isNaN(input)) {
    alert(`Ah dang.  ${input} isn't a number :(
Please try again with a numeric value!`);
  } else {
    display.innerHTML = `${input}° C`;
  }
};

const clearInput = () => {
  inputField.value = "";
  display.innerHTML = "";
};

const addListeners = () => {
  submitButton.addEventListener("click", displayInput);
  clearButton.addEventListener("click", clearInput);
};

addListeners();
