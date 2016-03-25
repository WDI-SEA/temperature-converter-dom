

var Fahrenheit;
var Celsius;

document.getElementById("convert").addEventListener("click", function() {
    Fahrenheit = document.getElementById("input").value;
    console.log(Fahrenheit);
    Celsius = ((Fahrenheit - 32) * 5/9).toFixed(2);
    console.log(Celsius);
    document.getElementById("input").value = Celsius;
});

document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("input").value = "";

});








// <!-- T(°C) = (T(°F) - 32) × 5/9 -->