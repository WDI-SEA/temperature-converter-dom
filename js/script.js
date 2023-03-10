//get elements
let tempInput = document.getElementById('tempinput');
let updateTemp = document.getElementById('updatetemp');
let clearTemp = document.getElementById('cleartemp');
let result = document.getElementById('result');
let dangerbar = document.getElementById('dangerbar');
// add event listeners
updateTemp.addEventListener('click', handleUpdate);
clearTemp.addEventListener('click', clearInput);

//Convert temp function
function updateTemperature() {
		const temp = parseFloat(tempInput.value);
        const selectedUnit = units.value;



        if (selectedUnit === 'celsius') {
            const conversion = (temp * 9/5) + 32;
            result.textContent = `${temp} degrees Celsius is ${conversion} degrees Fahrenheit.`;
            spittingBars(conversion, 'fahrenheit');
          } else {
            const conversion = (temp - 32) * 5/9;
            result.textContent = `${temp} degrees Fahrenheit is ${conversion} degrees Celsius.`;
            spittingBars(conversion, 'celsius');
          }
        }
        ////had to make it conform to C to F as well as F to C, pain..........

    
        
    
//clears input with button
function clearInput() {
    tempInput.value = "";
    result.innerText = "";
}
//dangerbar code
function spittingBars(temp, unit){
    if (unit === 'celsius') {
        if (temp < 0) {
          dangerbar.style.backgroundColor = 'lightblue';
          dangerbar.innerText = `DANGERBAR - FREEZING`;
        } else if (temp >= 50) {
          dangerbar.style.backgroundColor = 'red';
          dangerbar.innerText = `DANGERBAR - SCALDING HOT`;
        } else {
          dangerbar.style.backgroundColor = 'gray';
          dangerbar.innerText = `DANGERBAR - OFFLINE`;
        }
      } else if (unit === 'fahrenheit') {
        if (temp < 32) {
          dangerbar.style.backgroundColor = 'lightblue';
          dangerbar.innerText = `DANGERBAR - FREEZING`;
        } else if (temp >= 120) {
          dangerbar.style.backgroundColor = 'red';
          dangerbar.innerText = `DANGERBAR - SCALDING HOT`;
        } else {
          dangerbar.style.backgroundColor = 'gray';
          dangerbar.innerText = `DANGERBAR - OFFLINE`;
        }
      }
    }
//had to make it conform to C to F as well as F to C, pain..........
  //had this prior as had to pass 2 arguments to 1 event listener, no longer needed but don't want to delete
function handleUpdate() {
    updateTemperature();
  }