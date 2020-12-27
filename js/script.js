// Set the Form and load it 
// have event listeners

    //get form data, load it 
const form = document.querySelector("#myForm");
const inputValue = document.getElementById("submitText");
const tempUnit = document.getElementById("unitSelect");
const rectangle = document.getElementById("rectangle");
let tempF;
let tempC;
let tempK;
let tempChangeValue;

tempChangeValue


//event listener for form submit
form.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(event);
  // console.log(inputValue.value);
  // console.log(tempUnit.value);   
  
  switch (tempUnit.value){
    case 'fahrenheit':
      console.log(`${inputValue.value} ${tempUnit.value}`);
      tempF = inputValue.value;
      tempC = Math.floor((5/9)*(tempF-32));
      console.log(`${tempC} celcius`);
      tempK = Math.floor(((5/9)*(tempF-32))+273);
      console.log(`${tempK} kelvin`);
      document
      break
      case 'celcius':
      tempC = inputValue.value;
      tempF = Math.floor((9/5)*(tempC+32));
      console.log(`${tempF} fahrenheit`);
      tempK = Math.floor((tempC+273));
      console.log(`${tempK} kelvin`);
      break
      case 'kelvin':
      tempK = inputValue.value;
      tempF = Math.floor(((9/5)*(tempK-273))+32);
      console.log(`${tempF} fahrenheit`);
      tempC = Math.floor((tempK-273));
      console.log(`${tempC} celcius`);
      break
  }
})

    //   var sock = document.getElementsByName("tempUnit");
    //   function getData (event) {
    //     console.log( event.target.value)
    //     }