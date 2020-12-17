
// For the tempInput box to move it to center of screen 
//without adjusting box size with screen size
document.getElementById('tempInput').style.width='400px';
document.getElementById('tempInput').style.height='30px';

function toCelsius(fahrenheit) {
    document.getElementById('tempOutput').innerHTML = (5/9) * (fahrenheit-32)    
}
document.getElementById('f').innerHTML = toCelsius()

function toFahrenheit(celsius) {
    document.getElementById('tempOutput').innerHTML = (5/9) * (fahrenheit+32) 
}
document.getElementById('c').innerHTML = toFahrenheit()

//document.getElementById('clear').reset();

if (onclick == 'f') {
    return 
} else {
    return 
}



console.log('Hello, front end');

