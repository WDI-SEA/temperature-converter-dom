// var buttonS = document.getElementById('Submit');
// var buttonC = document.getElementById('Clear');
// var radioF = document.getElementById('Farenhiet');
// var radioC = document.getElementById('Celcius');
// var input = document.getElementById('temp-input');


// buttonS.addEventListener('click' , function(event) {
//     event.preventDefault();

//     var input;
//     if (radioC.checked === true) {
//       input.value * 9 / 5 + 32 == faren
//       input.value = Math.round(input);

//     } else {
//       input = (document.getElementById("temp-input").value -32) * 5 / 9;
//       document.getElementById("temp-input").value = Math.round(input);
//     }
//})
console.log("Hello, front end");


function tempConvert() {
    var input = document.getElementById("input").value;
    var radioForm = document.getElementsByName("degrees");
    FConvert = "";
    CConvert = "";

    for (var i = 0; i < radioForm.length; i++) {
        if (radioForm[i].checked) {
            if (radioForm[i].value == "Farenhiet") {
                FConvert = (input - 32) * (5 / 9)
                document.getElementById("output").innerHTML = FConvert + "C";
                return Math.floor(Math.round(radioForm[i]));
            }
            if (radioForm[i].value == "Celcius") {
                CConvert = (input * (9 / 5)) + 32;
                document.getElementById("output").innerHTML = CConvert + "F";
                return Math.floor(Math.round(radioForm[i]));
            }
        }



    }
};

 function clear() {
     document.getElementById("clear").reset();
}






