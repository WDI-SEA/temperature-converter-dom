//DOM SELECTORS

const tempInput = document.getElementById("temp-input");
const celsiusBtn = document.getElementById("c-btn");
const kelvinBtn = document.getElementById("k-btn");
const cardContainer = document.querySelector(".card-container");
const clearBtn = document.getElementById("clear-btn");

//EVENT LISTENERS
celsiusBtn.addEventListener("click", (e) => {
  console.log(tempInput.value);
  //<div class="card">
  const celsiusOutput = document.createElement("div");
  celsiusOutput.classList.add("card");

  //<div class="card-body">
  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  const cardText = document.createElement("p");
  cardText.classList.add("lead");
  cardText.textContent = fahrenheitToCelsius(tempInput.value);

  cardBody.appendChild(cardText);
  celsiusOutput.appendChild(cardBody);

  //    This is some text within a card body.
  //append to card to card container
  cardContainer.appendChild(celsiusOutput);

  //  </div>
  //</div>
  e.preventDefault();
});
//FUNCTIONS

kelvinBtn.addEventListener("click", (e) => {
  console.log(tempInput.value);
  //<div class="card">
  const kelvinOutput = document.createElement("div");
  kelvinOutput.classList.add("card");

  //<div class="card-body">
  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  const cardText = document.createElement("p");
  cardText.classList.add("lead");
  cardText.textContent = fahrenheitToKelvin(tempInput.value);
  cardBody.appendChild(cardText);
  kelvinOutput.appendChild(cardBody);

  //    This is some text within a card body.
  //append to card to card container
  cardContainer.appendChild(kelvinOutput);

  //  </div>
  //</div>
  e.preventDefault();
});

//clear btn
clearBtn.addEventListener("click", (e) => {
  location.reload();
  e.preventDefault();
});
//BUILD OUTPUT
// (32°F − 32) × 5/9 = 0°C
function fahrenheitToCelsius(userInput) {
  return `${userInput}f is = ${(userInput - 32) * 1.8}c`;
}
function fahrenheitToKelvin(userInput) {
  return `${userInput}f is = ${(userInput - 32) * 1.8 + 273.15}k`;
}

//(32°F − 32) × 5/9 + 273.15 = 273.15K
//ATTACH TO TEXT OUTPUT
