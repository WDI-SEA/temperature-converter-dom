function convertFtoC(tempF) {
    const tempC = (tempF - 32) * (5/9);
    return tempC;
}

function convertCtoF(tempC) {
    const tempF = (tempC * 1.8) + 32;
    return tempC;
}

function myFunction() {
    document.getElementById("Results").click(); // Click on the checkbox
}


document.getElementById("Results").addEventListener("click", someOtherFunction);


document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector("input[type=submit]")
        submitButton.addEventListener("click", (e) => {
        e.preventDefault()
    let res = document.getElementById("submitText").value
        document.getElementById("feedback").innerText = res
})
