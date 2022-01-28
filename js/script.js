const inputNumber = document.querySelector("#inputNumber");
const units = document.querySelectorAll(".unit");
const results = document.querySelector("#results")
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");


const convertToCelsius = (fahrenheit) => {
    let celsius = Math.round((((fahrenheit * 9) /5) +32) * 100) / 100;
    // results.innerHTML = `${celsius} in celsius`
    return `${celsius} in celsius`
}
console.log(results)
const convertToKelvin = (fahrenheit) => {
   let kelvin = Math.round((((fahrenheit -32)*5/9) + 273.15) * 100) / 100;
  
    return `${kelvin} in Kelvin`
}

const convertAll = () => {
    // parseFloat(inputNumber)
    if(units[0].checked === true){
        // alert(units[0].id)
        convertedValue = convertToCelsius(inputNumber.value)
        alert(convertedValue)
        tempDisplay.innerHTML = `${convertedValue} in ${unit[0]}`        
    } else if (units[1].checked === true) {
        
        alert(convertToKelvin(inputNumber.value))
        // tempDisplay = convertToKelvin(kelvin)
        // alert(units[1].id)
    } else {
        alert("Fill in fields and units please.")
    }
}

// convertAll();

convertBtn.addEventListener("click", convertAll)





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