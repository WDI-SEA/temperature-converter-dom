// Set the Form and load it 
// have event listeners

    //get form data, load it 
const form = document.querySelector("#myForm");
const inputValue = document.getElementById("submitText");
const tempUnit = document.getElementById("unitSelect");
let windowColor = document.getElementById("rectangle");
const tempDisplay = document.createElement("p");
let tempF;
let tempC;
let tempK;
let tempChangeValue;
let t = document.createTextNode(`The temperature is ${tempF} fahrenheit ${tempC} celcius, and ${tempK} kelvin`)
// tempDisplay.appendChild(t);



//event listener for form submit
form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(event);
  // console.log(inputValue.value);
  // console.log(tempUnit.value);   
  
  //switch to grab the data and do temp conversions based on input
  switch (tempUnit.value){
    case 'fahrenheit':
      console.log(`${inputValue.value} ${tempUnit.value}`);
      tempF = inputValue.value;
      tempC = Math.floor((5/9)*(tempF-32));
      console.log(`${tempC} celcius`);
      tempK = Math.floor(((5/9)*(tempF-32))+273);
      console.log(`${tempK} kelvin`);
      let t = document.createTextNode(`The temperature is: ${tempF} fahrenheit ${tempC} celcius, and ${tempK} kelvin`)
      tempDisplay.appendChild(t);
      rectangle.appendChild(tempDisplay);
    break
    case 'celcius':
      tempC = inputValue.value;
      tempF = Math.floor((9/5)*(tempC+32));
      console.log(`${tempF} fahrenheit`);
      tempK = Math.floor((tempC+273));
      console.log(`${tempK} kelvin`);
      t = document.createTextNode(`The temperature is: ${tempF} fahrenheit ${tempC} celcius, and ${tempK} kelvin`)
      tempDisplay.appendChild(t);
      rectangle.appendChild(tempDisplay);
    break
    case 'kelvin':
      tempK = inputValue.value;
      tempF = Math.floor(((9/5)*(tempK-273))+32);
      console.log(`${tempF} fahrenheit`);
      tempC = Math.floor((tempK-273));
      console.log(`${tempC} celcius`);
      t = document.createTextNode(`The temperature is: ${tempF} fahrenheit ${tempC} celcius, and ${tempK} kelvin`)
      tempDisplay.appendChild(t);
      rectangle.appendChild(tempDisplay);
    break
  }
  //Try to change the css style background color of the div with id rectangle NOT WORKING
  let tempCheckColor;
  tempCheckColor = tempF;
  switch (tempCheckColor){
    case tempCheckColor<80:
      document.getElementById("rectangle").style.backgroundColor= "green";
      windowColor.style.backgroundColor= "green";
    break
    case tempCheckColor<40:
      document.getElementById("rectangle").style.backgroundColor = "blue";
    break
    case tempCheckColor>80:
      document.getElementById("rectangle").style.backgroundColor = "red";
    break
  
  }

})



    //   var sock = document.getElementsByName("tempUnit");
    //   function getData (event) {
    //     console.log( event.target.value)
    //     }