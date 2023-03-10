let inputField = document.querySelector("input");
let submitButton = document.querySelector("#submit-button");
let clearButton = document.querySelector("#clear-button");
let display = document.querySelector("#display");

const sayHello = () => {
  console.log("hello");
};

const sayGoodbye = () => {
  console.log("goodbye");
};

const displayInput = () => {
  input = inputField.value;
  if (isNaN(input)) {
    alert(`Ah dang.  ${input} isn't a number :(
Please try again with a numeric value!`);
  } else {
    display.innerHTML = input;
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
