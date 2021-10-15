//two functions that will convert celcius to fahrenheit and vice versa
const celciusToFahrenheit = (inputTemp) => {
    return inputTemp * 9 / 5 + 32
}

const fahrenheitToCelcius = (inputTemp) => {
    return (inputTemp - 32) * 5 / 9
}
// detect whether the button was clicked
document.getElementById('submit').addEventListener('click', () => {
    console.log('submit button clicked')
// take the value from the input field
    const inputTemp = document.getElementById('input-temp').value
    console.log('temp entered', inputTemp)











    
