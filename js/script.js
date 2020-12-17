console.log('Hello, front end');
document.addEventListener('DOMContentLoaded', () => {
console.log("DOM LOADED")

  // get our user submission from form
  let submitButton = document.querySelector("input[type=submit]")

  submitButton.addEventListener("click", (e) => {
      e.preventDefault()

      let res = document.getElementById("submitText").value
