const submit = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const cel = document.getElementById("cel");
const fah = document.getElementById("fah");

if (cel.checked) {
  console.log("true!");
} else {
  console.log("not");
}

cel.addEventListener("click", function () {});
fah.addEventListener("click", function () {});

submit.addEventListener("click", function () {
  let input = Number(document.getElementById("number-field").value);

  const fahToCel = (f) => {
    let c = Math.round(((f - 32) * 5) / 9);
    console.log(`${f} degrees in Fahrenheit is ${c} degrees Celsius/Kelvin`);
    document.querySelector(".number-change").textContent = c;
  };
  console.log(fahToCel(input));

  // need to make anoter function for cel => fah
  // const celToFah = (c) => {
  //   const f = Math.round((c / 5) * 9 + 32);
  //   console.log(`${c} degrees in Celsius/Kelvin is ${f} in Fahrenheit`);
  //   document.querySelector(".number-change-f").textContent = c;
  // };
  // console.log(celToFah(input));
});

clear.addEventListener("click", function () {
  document.getElementById("number-field").value = "";
  //   document.getElementById("number-change-f").value = "";
});

// window.marketer = function(x) {
//   if (x == 0) {
//     document.getElementById('reagent_code').style.display = 'none';
//   } else if (x == 1) {
//     document.getElementById('reagent_code').style.display = 'block';
//     return;
//   }
// }

// add a class of css to red box, display: none, when celsious is checked add a class of display none to fah, same thing for the other one
