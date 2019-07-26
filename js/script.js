console.log('Hello, front end');

var convertButton = document.getElementById("convert-button");

convertButton.addEventListener("submit", convertTemp);
var inputTemp;
var enteredTemp;
var result;
var fromTemp;
var toTemp;

function convertTemp(event) {
    event.preventDefault();
    inputTemp = document.getElementById("input-temp");
    enteredTemp = document.getElementById("entry");
    result = document.getElementById("result");
    fromTemp = document.getElementsByClassName("from-temp").selectedIndex;
    toTemp = document.getElementsByClassName("to-temp").selectedIndex;
    console.log("test");
    console.log(fromTemp, toTemp);

}

    // var fromChoice = fromTemp[fromTemp.selectedIndex].value;
    // var toChoice = toTemp[toTemp.selectedIndex].id;
// console.log(fromChoice);

var convertChoice;
var resultTemp;



convertButton.addEventListener("click", convertTemp);
// for (choice of fromTemp) {
//     if (choice.selected == true) {
//         fromChoice = choice.id;
//         break;
//     }

// }
// for (choice of toTemp) {
//     if (choice.selected == true) {
//         toChoice = choice.id;
//     }
// }
if (fromTemp == "1" && toTemp == "2") {
    convertChoice = 1;
} else
if (fromTemp == "1" && toTemp == "3") {
    convertChoice = 2;
} else
if (fromTemp == "2" && toTemp == "3") {
    convertChoice = 3;
} else
if (fromTemp == "2" && toTemp == "1") {
    convertChoice = 4;
} else
if (fromTemp == "3" && toTemp == "2") {
    convertChoice = 5;
} else
if (fromTemp == "3" && toTemp == "1") {
    convertChoice = 6;
} else {
    resultTemp = "Hmm...Check Your Degrees!"
};

console.log(convertChoice);

switch (convertChoice) {
    case 1:
        resultTemp = function convertFToK(enteredTemp) {
            ((enteredTemp.value - 32) * .556) + 273.15; 
            result.innerText = `${enteredTemp}°F equals ${resultTemp}°K`;
        };
        break;
    case 2:
        resultTemp = function convertFToC(enteredTemp) {
             (enteredTemp.value - 32) * .556;
             result.innerText = `${enteredTemp}°F equals ${resultTemp}°C`;
        };
        break;
    case 3:
        resultTemp =function convertCToK(enteredTemp) {
             enteredTemp.value + 273.15;
             result.innerText = `${enteredTemp}°C equals ${resultTemp}°K`; 
        };
        break;
    case 4:
        resultTemp =function convertCToF(enteredTemp) {
             (enteredTemp.value * 1.8) + 32;
             result.innerText = `${enteredTemp}°C equals ${resultTemp}°F`;
        };
        break;
    case 5:
        resultTemp = function convertKToC(enteredTemp) {
             enteredTemp.value - 273.15;
             result.innerText = `${enteredTemp}°K equals ${resultTemp}°C`; 
        };
        break;
    case 6:
        resultTemp = function convertKToF(enteredTemp) {
             ((enteredTemp.value - 273.15) * 1.8) + 32;
             result.innerText = `${enteredTemp}°K equals ${resultTemp}°F`; 
        };
        break;
};



document.getElementById("clear").addEventListener("click", clearEntry);

function clearEntry() {
    document.getElementById("entry").reset();
};
