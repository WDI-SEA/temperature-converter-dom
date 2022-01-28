console.log('Hello, front end');

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerText = (valNum-32) / 1.8;
}

function temperatureConverterTwo(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerText = ((valNum*1.8) + 32);
}

/*solution:
document.querySelector('#submit-button').addEventListener('click', function() {
    console.log('caluculate the temp')
    const tempInput = document.querySelector('#temp-input')
    const result = document.querySelector('#result')

    result.innerText = (tempInputValue - 32) * (5/9)
})