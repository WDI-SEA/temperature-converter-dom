function fahrenheitConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }

  function celsiusConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum*1.8) + 32;
  }
