const inputNumber = document.querySelector("#inputNumber");
const units = document.querySelectorAll(".unit");
const results = document.querySelector("#results")
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");


// if(units[0].checked === true){
//     units[1].checked = false
// } else {
//     units[0].checked = false
// }

const convertToCelsius = (fahrenheit) => {
    let celsius = Math.round((((fahrenheit * 9) /5) +32) * 100) / 100;
    // results.innerHTML = `${celsius} in celsius`
    return `Result: ${inputNumber.value} °Fahrenheit is  ${celsius} in celsius`
}
console.log(results)
const convertToKelvin = (fahrenheit) => {
   let kelvin = Math.round((((fahrenheit -32)*5/9) + 273.15) * 100) / 100;
  
    return `Result: ${inputNumber.value} °Fahrenheit is  ${kelvin} in Kelvin`
}

const convertAll = (e) => {
    // parseFloat(inputNumber)
    e.preventDefault();
    if(units[0].checked === true){
        // alert(units[0].id)
        convertedValue = convertToCelsius(inputNumber.value)
        // alert(convertedValue)
        results.innerText = `${convertedValue}`        
    } else if (units[1].checked === true) {
            convertedValue = convertToKelvin(inputNumber.value)
            results.innerText = convertedValue
        // alert(convertToKelvin(inputNumber.value))
        // tempDisplay = convertToKelvin(kelvin)
        // alert(units[1].id)
    } else {
        alert("Fill in fields and units please.")
    }
}

const clearBtnHandler = () => {
    inputNumber.value = ""
    units[0].checked = false
    units[1].checked = false
}

// convertAll();

convertBtn.addEventListener("click", convertAll)
clearBtn.addEventListener("click", clearBtnHandler)





// console.log(convertToCelsius(55));
// console.log(convertToKelvin(100))
// let convertable = 10;
// // const convert = () => {
//     for( let x = 0; x < units.length; x++){
//         let unit = units[x];
//         // console.log(unit)
//         if(unit.value ===  ) {
//             // convertToKelvin(fahrenheit);
//             alert(event.target.value)
//         } else {
//             alert(event.target.value)
//             // convertToCelsius(fahrenheit);
//         }

//         // console.log(units[0])
//     }
    // alert(event.target.name)
// }
// convert()

// convertBtn.addEventListener("click", function(event){
//     for( let x = 0; x < units.length; x++){
      
//     }
// })