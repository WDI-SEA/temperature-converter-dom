console.log('Hello, front end');
document.addEventListener('DOMContentLoaded', () => {
console.log("DOM LOADED")
}

  // get our user to enter temperture
  let submitButton = document.querySelector("input[type=submit]")

  submitButton.addEventListener("click", (e) => {
      e.preventDefault()
  }

      let res = document.getElementById("submitText").value


    // convert the temperature from F to C