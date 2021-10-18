//function to clear the text inside the textbox
function clearText() {

    document.getElementById("temp").value = "";
    document.getElementById("rectangle").innerHTML = "";
    document.getElementById("fheit").checked = false;
    document.getElementById("celsi").checked = false;
}

const radioButtonSelection = () => {
    const fahrenheitButton = document.getElementById("fheit")
    const celsiusButton = document.getElementById("celsi")

   
    if(fahrenheitButton.checked){
       let a = convertCelsius()
       document.getElementById("rectangle").innerHTML = a + '°C';
    } else if(celsiusButton.checked) {
        let b = convertFahrenheit()
        document.getElementById("rectangle").innerHTML = b + '°F';
    } else {
        console.log('No button selected.')
    } 
    
}

//function that converts the input from the textbox to celsius
const convertCelsius = () => {
    let fahrenheit = parseFloat(document.querySelector("#temp").value);
    let celsiusResult = Math.floor((fahrenheit-32)*5/9);
    return celsiusResult
    // console.log('Temp in celsius is ' + celsiusResult)
}
//function that converts the input from the textbox to fahrenheit
const convertFahrenheit = () => {
    let celsius = parseFloat(document.querySelector("#temp").value);
    let fahrenheitResult = Math.floor((celsius*9/5)+32)
    return fahrenheitResult
    // console.log('Temp in fahrenheit is ' + fahrenheitResult)
}

//document.getElementById("buttons").addEventListener('click', radioButtonSelection)

// const submitListender = () => {

// }













