console.log('Hello, front end');

let theSquares = document.getElementsByClassName('square')
console.log(theSquares[0])

function tempConvert(temp, convert) {
  if(convert.toLowerCase() === "c"){ 
      temp = (temp - 32) * (5/9);
      Math.floor()
  } else if (convert.toLowerCase() === "k") {
      temp = (temp + 459.67) * (5/9);
  }
  return temp;
}

console.log(tempConvert(67, "c"));

btn.addEventListener("click", function(e) {
  console.log(e)
})

btn.addEventListener("click", function(e) {
  console.log(input.value)
})