let input = document.querySelectorAll("input");
let submitButton = document.querySelector("#submit-button");
let clearButton = document.querySelector("#clear-button");

const sayHello = () => {
  console.log("hello");
};

const sayGoodbye = () => {
  console.log("goodbye");
};

const addListeners = () => {
  submitButton.addEventListener("click", sayHello);
  clearButton.addEventListener("click", sayGoodbye);
};

addListeners();
