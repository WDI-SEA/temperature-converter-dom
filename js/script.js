

// function conversion() {
//   let tempBox = document.getElementById("tempBox")
//   let outputBox = document.getElementById("tempOutput")
//   let units = document.getElementsByName("tempUnit").value

//   if (units === "f") {
//     outputBox.value = (tempBox.value - 32) / 1.8;

//   } else if (units === "c") {
//     outputBox.value = tempBox.value * 1.8 + 32;
//   }
// }
document.getElementById('tempConversion').addEventListener('click', (e) => {
    e.preventDefault();



    if (document.getElementsById('tempUnitF').checked == checked) {
      let answer = document.getElementById('tempBox').value * 1.8 + 3;
    } else {
      let answer = (document.getElementById('tempBox').value - 32) / 1.8;
    }
    document.getElementById('tempOutPut').innerHTML = answer;
  }

// document.getElementById('tempUnitC') * 1.8 + 3

// (document.getElementById('tempUnitF') - 32) / 1.8
