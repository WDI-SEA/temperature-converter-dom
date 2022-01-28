// document.querySelector('#submit-button').addEventListener('click', function() {
//     console.log('calculate the temp')
//     const tempInput = document.querySelector('#temp-input').valueAsNumber
//     console.dir(tempInput.ValueAsNumber)
//     const result = document.querySelector('result')

//     result.innerText = (tempInputValue - 32) * (5/9)


// })


document.querySelector('temp-form').addEventListener('submit', function(event) {
event.preventDefault()
console.log('the form is submitted')
// console.log('calculate the temp')
// const tempInput = document.querySelector('#tempInput').valueAsNumber
// console.dir(tempInput.ValueAsNumber)
// const result = document.querySelector('result')

tempInpput.value = 72
console.log(tempInput)
})




// let celcius;
// let fahrenheit;

// const celToFahr = (c) => {
// celcius = c;
// fahrenheit = c * 1.8 + 32;
// console.log(`${celcius} C is ${fahrenheit} F`);
// };

// const fahrToCel = (f) => {
// fahrenheit = f;
// celcius = (f - 32) / 1.8;
// console.log(`${fahrenheit} F is ${celcius} C`);
// };

// celToFahr(10);
// fahrToCel(50);




// OR

// console.log('Hello, front end');

// function cToF(celsius) 
// {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   let fTemp = fahrenheit;
//   let fToCel = (fTemp - 32) * 5 / 9;
//   let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(80);

// fToC(45);

