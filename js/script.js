// console.log("Hello, front end");

function tempConvert() {
    var input = document.getElementById("input").value;
    var radioForm = document.form.tempChoice;
    // FConvert = "";
    // CConvert = "";

    for (var i=0; i < radioForm.length; i++) {
        if (radioForm[i].checked) {
            if (radioForm[i].value == "F") {
                FConvert = (input - 32) * (5 / 9);
                document.getElementById("output").innerHTML = FConvert + "C";
            }
            else if (radioForm[i].value == "C") {
                CConvert = (input * (9 / 5)) + 32;
                document.getElementById("output").innerHTML = CConvert + "F";
            }
        }
    }
};

// function clear()
// {   
//    document.getElementById("form").reset();
// }