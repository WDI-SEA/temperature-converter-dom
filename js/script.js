var convertToFahrenheit = (celsius) => {
    return (celsius*(9/5))+32
}
var convertToCelsius = (fahrenheit) => {
    return (fahrenheit-32)*(5/9)
}
var updateOutput = (temp, units) => {
    let output = document.getElementById('output')
    if(units.toUpperCase()==='F'){
        var convertedTemp = convertToFahrenheit(temp)
        if(convertedTemp >= 80){
            if(convertedTemp>=100){
                document.getElementById('body').style.background = 'url(./img/flames.jpg)'
            }
            output.style.backgroundColor = 'red'
        }
        else if(convertedTemp <= 50){
            if(convertedTemp<=32){
                document.getElementById('body').style.background = 'url(./img/ice.jpg)'
            }
            output.style.backgroundColor = 'blue'
        }
        output.innerText = `${convertedTemp}° F`
    }
    else if(units.toUpperCase()==='C'){
        var convertedTemp = convertToCelsius(temp)
        if(convertedTemp >= 26.6){
            if(convertedTemp>=37){
                document.getElementById('body').style.background = 'url(./img/flames.jpg)'
            }
            output.style.backgroundColor = 'red'
        }
        else if(convertedTemp <= 10){
            if(convertedTemp<=0){
                document.getElementById('body').style.background = 'url(./img/ice.jpg)'
            }
            output.style.backgroundColor = 'blue'
        }
        output.innerText = `${convertedTemp}° C`
    }  
}
var selectRadioButton = () => {
    let f = document.getElementById("fahrenheit")
    let c = document.getElementById("celsius")
    if(f.checked){
        return f.value
    }
    else if(c.checked){
        return c.value
    }
}
var clear = () => {
    document.getElementById("fahrenheit").checked = false;
    document.getElementById("celsius").checked = false;
    document.getElementById("output").innerText = "";
    document.getElementById("temp-input").value = "";

}
var submit = () =>{
    let temp = document.getElementById("temp-input").value;
    let units = selectRadioButton()
    console.log(units)
    updateOutput(temp, units)
}

document.getElementById("submit").addEventListener("click", submit);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("fahrenheit").addEventListener("click", function(){
    document.getElementById("celsius").checked = false;
})
document.getElementById("celsius").addEventListener("click", function(){
    document.getElementById("fahrenheit").checked = false;
})