let inputField = document.querySelector("input");
let submitButton = document.querySelector("#submit-button");
let clearButton = document.querySelector("#clear-button");

const sayHello = () => {
  console.log("hello");
};

const sayGoodbye = () => {
  console.log("goodbye");
};

const clearInput = () => {
  inputField.value = "";
};

const addListeners = () => {
  submitButton.addEventListener("click", sayHello);
  clearButton.addEventListener("click", clearInput);
};

addListeners();
