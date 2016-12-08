var submitButton = document.getElementById('submit');
var clearButton = document.getElementById('clear');
var degreesNumber = document.getElementById('degrees-number');
var form = document.getElementById('form');

$( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: -300,
      max: 300,
      value: 70,
      slide: function( event, ui ) {
        $( "#degrees-number" ).val( ui.value );
        calcTemp();
      },
    });
    $( "#degrees-number" ).val( $( "#slider-vertical" ).slider( "value" ) );
});


var calcTemp = function(){
  var num = document.getElementById('degrees-number').value;
  var unit = document.getElementById('F').checked;

  if(num===""){
    document.getElementById('result').innerHTML = "Invalid Input";
  } else{
    if(unit){
      newTemp = (num-32)/(9/5);
      if(newTemp<0){
        document.getElementById('result').innerHTML = newTemp.toFixed(1)+" &deg;C";
        document.getElementById('result').className = "cold";
      } else if(newTemp>100){
        document.getElementById('result').innerHTML = newTemp.toFixed(1)+" &deg;C";
        document.getElementById('result').className = "hot";
      } else{
        document.getElementById('result').innerHTML = newTemp.toFixed(1)+" &deg;C";
        document.getElementById('result').className = "normal";
      }
      // document.getElementById('result').innerHTML = ((num-32)/(9/5)).toFixed(1)+" &deg;C";
    } else{
      newTemp = (num)*(9/5)+32;
      if(newTemp<32){
        document.getElementById('result').innerHTML = newTemp.toFixed(1)+" &deg;F";
        document.getElementById('result').className = "cold";
      } else if(newTemp<212){
        document.getElementById('result').innerHTML = newTemp.toFixed(1)+" &deg;F";
        document.getElementById('result').className = "hot";
      } else{
        document.getElementById('result').innerHTML = newTemp.toFixed(1)+" &deg;F";
        document.getElementById('result').className = "normal";
      }
      // document.getElementById('result').innerHTML = ((num)*(9/5)+32).toFixed(1)+" &deg;F";
    }
  }
};

var isEnter = function(e){
	var key = e.which||e.keyCode;
	if(key===13){
		calcTemp();
	}
};

var clear = function(){
  document.getElementById('result').innerHTML = "Output";
  document.getElementById('degrees-number').value="";
};

submitButton.addEventListener('click',calcTemp);
clearButton.addEventListener('click',clear);
// degreesNumber.addEventListener('keydown',isEnter);
degreesNumber.addEventListener('keyup',calcTemp);
// degreesNumber.addEventListener('submit',calcTemp);
// document.form.onsubmit = calcTemp();
