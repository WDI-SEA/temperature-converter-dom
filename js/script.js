function convertToFarenheit(input1){
    let convertedTemp = 0
    convertedTemp = ((input1 * 9/5) + 32)
    return(convertedTemp)
}

function convertToCelsius(input1){
    let convertedTemp = 0
    convertedTemp = ((input1-32) * 5/9)
    return(convertedTemp)
}


document.querySelector('.enter').addEventListener('click', () => {
    let selected = document.querySelector('input[type="radio"]:checked');
    let tempInput = document.getElementById("tempValue").value
    let newTemp = 0
    if (selected.value === "Farenheit"){
        newTemp= convertToCelsius(tempInput)
    } else if (selected.value === "Celsius"){
        newTemp= convertToFarenheit(tempInput)
    }
    const theResult = document.querySelector('#result');
    if (theResult !== null) {
        theResult.innerText = (newTemp);
    } else{
        const newResult = document.createElement('div').setAttribute("id","result")
        newResult.innerText = newTemp;
        document.querySelector('#result').append(newResult)
   }
  })


document.querySelector('.clear').addEventListener('click',() => {
    document.querySelector("#tempValue").value = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("Farenheit").checked = false
    document.getElementById("Celsius").checked = false
})
  
