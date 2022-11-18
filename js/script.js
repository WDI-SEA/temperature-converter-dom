const tempInput = document.getElementById("temp-input");
const celsiusButton = document.getElementById("c-btn");
const kelvinButton = document.getElementById('k-btn');
const cardContainer = document.querySelector('.card-container');
const clearButton = document.getElementById('clear-btn');


celsiusButton.addEventListener('click', (e) => {
    console.log(tempInput.value);
    // Creation of Card
    const celsiusOutput = document.createElement('div')
    celsiusOutput.classList.add('card')
    // Card Body
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    // Card Text
    const cardText = document.createElement('p')
    cardText.classList.add('lead')
    // User input is uses our function
    cardText.textContent = fahrenheitToCelsius(tempInput.value)
    // Appending the Card together
    cardBody.appendChild(cardText)
    celsiusOutput.appendChild(cardBody)
    // Appending Card to the Card-Container
    cardContainer.appendChild(celsiusOutput)


    e.preventDefault();
})

kelvinButton.addEventListener('click', (e) => {
    console.log(tempInput.value);
    // Creation of Card
    const kelvinOutput = document.createElement('div')
    kelvinOutput.classList.add('card')
    // Card Body
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    // Card Text
    const cardText = document.createElement('p')
    cardText.classList.add('lead')
    // User input is uses our function
    cardText.textContent = fahrenheitToKelvin(tempInput.value)
    // Appending the Card together
    cardBody.appendChild(cardText)
    kelvinOutput.appendChild(cardBody)
    // Appending Card to the Card-Container
    cardContainer.appendChild(kelvinOutput)


    e.preventDefault();
})

clearButton.addEventListener('click', (e) => {
    location.reload();
    e.preventDefault();
});
function fahrenheitToCelsius(userInput) {
    return `${userInput}F is = ${((userInput - 32) * 1.8).toFixed(2)}C`
};

function fahrenheitToKelvin(userInput) {
    return `${userInput}F is = ${((userInput - 32) * 1.8 + 273.15).toFixed(2)}K`
};