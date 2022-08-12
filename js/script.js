
const numInputValue = document.getElementById("number");
const submitBtn = document.getElementById("submit");
const clear = document.getElementById("clear");
const resetBtn = document.getElementById("reset");

const temperatureConverter = () => {
    let userInput = numInputValue.value;
    let celsius = Math.floor((userInput - 32) * (5/9));
  

    const celsiusResult = `<p>${celsius} degrees Celsius </p>`;

    if (userInput) {
        result.innerHTML = celsius + ' degrees Celsius' 
    }
};

submitBtn.addEventListener("click", temperatureConverter);

numInputValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        temperatureConverter(e);
    }
}); 






