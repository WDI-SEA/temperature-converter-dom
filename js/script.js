var apiKey =  '80efc361793bca58b234b2c7f90d6343'

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=' + apiKey,
  dataType: 'json',
  data: 'get',
  succes: function(response){
    console.log(response)

    createWeatherDataDiv(response)

  }, 
  error: function(error){
    console.log(error)
  }
})

function createWeatherDataDiv(weather){
  var div = $('<div>').css({
    'backgroundColor': 'blue',
    'color': 'white',
    'marginLeft': '40%'})
  
  div.append('<p>' + weather.main.temp + '</p>')
  $('body').append(div)

}



//submit button should calculate converted temperature
var submitButton = document.getElementById('submit');

//created global variable so all functions had access
var newTemp = -1;


// function to make red or blue background based on temp
 var convertBackground = function(){

  if (newTemp <= 0){
  		document.getElementById('result').style.backgroundColor = 'steelblue';
      document.body.style.backgroundImage = "url('http://s2.thingpic.com/images/8P/dSA5xE1txMUcZFDNcbbFPyqh.jpeg')";
      document.body.style.backgroundSize = 'cover';
  } else if (newTemp >= 30){
  		document.getElementById('result').style.backgroundColor = 'brown';
      document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2Zx_OsB9qnNRb1969ur6m-lE9GwhiyqLjC3TUjx25Yu2PxJO7Q')";
      document.body.style.backgroundSize = 'cover';  
  } else {

  }
}

// function to calculate new temperature
var convertTemp = function(){
  var temp = document.getElementById('temperature').value;
  var celsius = ((temp-32)/(9/5)).toFixed(0);
  var fahrenheit = ((temp)*(9/5)+32).toFixed(0);

  if (temp === "") {
    document.getElementById('result').innerHTML = "Enter a Number";
  } else if(document.getElementById('F').checked){
      document.getElementById('result').innerHTML = celsius +" &deg;C";
      newTemp = celsius
      disableRadio('F')

  } else {
      document.getElementById('result').innerHTML = fahrenheit +" &deg;F";
      newTemp = fahrenheit
      disableRadio('C')
      
    }
    document.getElementById('temperature').value = '';
    convertBackground()
};

submitButton.addEventListener('click', convertTemp);


//clear button should reset page
var clearButton = document.getElementById('clear');
var clear = function(){
	window.location.reload();
};

clearButton.addEventListener('click', clear);


//toggle F radio button
function toggleF() {
  if (document.getElementById('F').checked = true) {
      disableRadio('C')
    } else {
      document.getElementById('C').checked = true;
      disableRadio('F')
  } 
}

document.getElementById('F').addEventListener('click', toggleF)

//toggle C radio button
function toggleC() {
  if (document.getElementById('C').checked = true) {
      disableRadio('F')
    } else {
      document.getElementById('F').checked = true;
      disableRadio('C')
  } 
}

document.getElementById('C').addEventListener('click', toggleC)



// clears radio buttons on submit
function disableRadio(radioId) {
    el = window.document.getElementById(radioId);
    el.checked = false;
}

// add later ---> enter key should submit when input field has value and a radio button is checked



// fake an api call

function randomWeather() {
  
  var array = [{
    precipitation: 90,
    icon: 'icon ion-umbrella',
    day: 'Monday'
    },
  {
    precipitation: 0,
    icon: 'icon ion-ios-sunny-outline',
    day: 'Friday'
  }]
    //returns a value between 0 and 1
    var randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber]
  }


displayWeather()


function displayWeather() {
  var weather = randomWeather();

    //populate the array info into html list
    document.getElementById('precipitation').innerHTML = "Precipitation: " + weather.precipitation + "%";
    document.getElementById('day').innerHTML = weather.day;
    document.getElementById('icon').className = weather.icon;

}
















