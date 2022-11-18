({
	plugins: ["jsdom-quokka-plugin"],
	jsdom: { file: "seir-1114/unit1/temperature-converter-dom/index.html" }, // Located in project root
});

const btn = document.querySelector("#submit");
const clr = document.querySelector("#clear");
const output = document.querySelector("#output");
const radioButtons = document.querySelectorAll('input[name="units"]');
btn.addEventListener("click", () => {
	let selectedTemp;
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selectedTemp = radioButton.value;
			break;
		}
	}

    let inputTemp = document.querySelector('#temperature').value
    console.log(selectedTemp)

	if (selectedTemp === "Farenheit") {
		outputTemp = (parseFloat(inputTemp) - 32) / 1.8;
        console.log(outputTemp, selectedTemp)
        output.innerText = outputTemp + " °C"
	} else if (selectedTemp === "Celsius") {
        outputTemp = parseFloat(inputTemp) * 1.8 + 32;
        console.log(outputTemp, selectedTemp)
        output.innerText = outputTemp + " °F"
	}


});

clr.addEventListener("click", () => {
    document.querySelector('#temperature').value = ""
    output.innerText = ""
})
