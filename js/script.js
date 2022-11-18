// DOM SELECTORS
const tempInput = document.getElementById("temp-input");
const celciusBtn = document.getElementById("c-btn");
const kelvinBtn = document.getElementById("k-btn");
const cardContainer = document.querySelector(".card-container");
const clearBtn = document.getElementById("clear-btn");

// EVENT LISTENERS

/**
 *
 * Celcius Button
 */
// Get value from temp input
celciusBtn.addEventListener("click", (e) => {
  // Card
  const celciusOutput = document.createElement("div");
  celciusOutput.classList.add("card");

  // Card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // Card Text
  const cardText = document.createElement("p");
  cardText.classList.add("lead");
  // Add text content with function that uses user input
  cardText.textContent = farenheitToCelcius(tempInput.value);
  // append elements together
  cardBody.appendChild(cardText);
  celciusOutput.appendChild(cardBody);

  // append to card to card-container
  cardContainer.appendChild(celciusOutput);

  e.preventDefault();
});
/**
 *
 *Kelvin Button
 */
kelvinBtn.addEventListener("click", (e) => {
  // Card
  const kelvinOutput = document.createElement("div");
  kelvinOutput.classList.add("card");

  // Card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // Card Text
  const cardText = document.createElement("p");
  cardText.classList.add("lead");
  cardText.textContent = kelvinToCelcius(tempInput.value);
  // append elements together
  cardBody.appendChild(cardText);
  kelvinOutput.appendChild(cardBody);

  // append to card to card-container
  cardContainer.appendChild(kelvinOutput);

  e.preventDefault();
});

/**
 *
 * Clear Button
 */
clearBtn.addEventListener("click", (e) => {
  location.reload();
  e.preventDefault();
});

// HELPER FUNCTIONS
// calculate celcius from farenheit
// (32°F − 32) × 1.8 = 0°C
function farenheitToCelcius(userInput) {
  return `${userInput}f is = ${((userInput - 32) * 1.8).toFixed(2)}c`;
}

function kelvinToCelcius(userInput) {
  return `${userInput}f is = ${((userInput - 32) * 1.8 + 273.15).toFixed(2)}k`;
}

// calculate kelvin from farenheit
// (32°F − 32) × 1.8 + 273.15 = 273.15K
