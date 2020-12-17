document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {

   var fahrenheit = document.getElementById("fahrenheit").value;
   var celsius = document.getElementById("celsius").value;

 if (fahrenheit != '') {
       celsius = (parseFloat(fahrenheit) - 32) / 1.8;
   } else {
       fahrenheit = (parseFloat(celsius) * 1.8) + 32;
   }



   document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);

   if(fahrenheit<40){
      var element=  document.getElementById('fahrenheit');
      element.classList.add("otherclass");
   }

   else if (fahrenheit>70){
     var element=  document.getElementById('fahrenheit');
     element.classList.add("otherclass2");
   }


   document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);


   if( celsius<2){
      var element1=  document.getElementById('celsius');
      element1.classList.add("otherclass");
   }

   else if( celsius > 15 ){
     var element2=  document.getElementById('celsius');
     element2.classList.add("otherclass2");
   }
}


function clearForm() {
   document.getElementById('fahrenheit').value = '';
   document.getElementById('celsius').value = '';
}
