// input radio buttons
const inputF = document.querySelector("#freedomUnitsIn")
const inputC = document.querySelector("#celciusIn")
const inputK = document.querySelector("#kelvinIn")
// output radio buttons
const outputF = document.querySelector("#freedomUnitsOut")
const outputC = document.querySelector("#celciusOut")
const outputK = document.querySelector("#kelvinOut")
// temp value to convert
const userInput = document.querySelector("#user-temp")
// buttons
const submit = document.querySelector("#submitButton")
const clear = document.querySelector("#clearButton")
// converted temp
const results = document.querySelector("#results")
// conversions
let convertedTemp = 0
const freedomToCelcius = function () {
	convertedTemp = (userInput.value - 32) * (5 / 9)
	return convertedTemp
}
const freedomToKelvin = function () {
	convertedTemp = (userInput.value - 32) * (5 / 9) + 273.15
	return convertedTemp
}
const celciusToFreedom = function () {
	convertedTemp = userInput.value * (9 / 5) + 32
	return convertedTemp
}
const celciusToKelvin = function (temp) {
	console.log(typeof userInput.value)
	convertedTemp = (273.15 + temp)
	return convertedTemp
	// this is the only one that needs the extra code
}
const kelvinToFreedom = function () {
	convertedTemp = (userInput.value - 273.15) * (9 / 5) + 32
	return convertedTemp
}
const kelvinToCelcius = function () {
	convertedTemp = userInput.value - 273.15
	return convertedTemp
}
// 
submit.addEventListener("click", function () {
	let num = parseInt(userInput.value)
	console.log(num)
	if (inputF.checked && outputC.checked) {
		freedomToCelcius()
		results.innerText = convertedTemp + "˚C"
	} else if (inputF.checked && outputK.checked) {
		freedomToKelvin()
		results.innerText = convertedTemp + "˚K"
	} else if (inputC.checked && outputF.checked) {
		celciusToFreedom()
		results.innerText = convertedTemp + "˚F"
	} else if (inputC.checked && outputK.checked) {
		celciusToKelvin(num)
		results.innerText = convertedTemp + "˚K"
		console.log(convertedTemp)
		// this is the only one that needs the extra code
	} else if (inputK.checked && outputF.checked) {
		kelvinToFreedom()
		results.innerText = convertedTemp + "˚F"
	} else if (inputK.checked && outputC.checked) {
		kelvinToCelcius()
		results.innerText = convertedTemp + "˚C"
	} else {
		results.innerText =	"....um...it's " + userInput.value + ".....Why did you need that?"
	}
	console.log(userInput.value)
})

clear.addEventListener("click", function () {
	userInput.value = ""
})
