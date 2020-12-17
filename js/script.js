let tempEntry = document.querySelector('#tempentry')
document.querySelector('form.formpart1').addEventListener('input', function (e) {
  e.preventDefault();
  console.log(tempEntry.value)
});

let fSelection = document.querySelector('.fentry')
targetfSelection.text = "°F"
document.querySelector('form.clicks').addEventListener('click', function(e) {
e.preventDefault();
  console.log('fSelection')
 })

// let cSelection = document.querySelector('#centry')
// document.querySelector('form.clicks').addEventListener('click', function(e) {
// e.preventDefault();
//   console.log('°C')
//  });



// console.log('Hello, front end');

// document.querySelector("tempentry").addEventListener('input', )

// console.log(tempToConvert)


//  // const x = (tempF - 32) * 5/9
//  const y = (tempC *9/5) + 32
// // dummy names for inputs 
//  console.log(x)

