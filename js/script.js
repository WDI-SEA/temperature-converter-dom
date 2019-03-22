//DOM VARIABLES FOR "CONVERT" AND "CLEAR" BUTTONS
var convertButton = document.getElementById('convert-button');
var clearButton = document.getElementById('clear-button');

//LINES TO EXECUTE WHEN "CONVERT" BUTTON CLICKED
var convertEvents = function() {
  var textboxContent = document.getElementById('temp-original');
  rawTempNum = Number(textboxContent.value);
  console.log(rawTempNum);

  //CHECK WHICH "FROM UNIT" RADIO BUTTON SELECTED
  var tempFromUnitF = document.getElementById("fromfahrenheit").checked;
  if(tempFromUnitF) {
    var tempFromUnit = "F";
  }
  var tempFromUnitC = document.getElementById("fromcelsius").checked;
  if(tempFromUnitC) {
    var tempFromUnit = "C";
  }
  var tempFromUnitK = document.getElementById("fromkelvin").checked;
  if(tempFromUnitK) {
    var tempFromUnit = "K";
  }

  //CHECK WHICH "TO UNIT" RADIO BUTTON SELECTED
  var tempToUnitF = document.getElementById("tofahrenheit").checked;
  if(tempToUnitF) {
    var tempToUnit = "F";
  }
  var tempToUnitC = document.getElementById("tocelsius").checked;
  if(tempToUnitC) {
    var tempToUnit = "C";
  }
  var tempToUnitK = document.getElementById("tokelvin").checked;
  if(tempToUnitK) {
    var tempToUnit = "K";
  }

  //SWITCH THROUGH "FROM UNIT" AND "TO UNIT" POSSIBILITIES TO FIND WHICH CONVERSION TO APPLY
  switch (true) {
    case (tempFromUnit==="F"):
    console.log("from F");
    switch (true) {
      case (tempToUnit==="F"):
      console.log("to F");
      console.log("No conversion needed, bruhhhh");
        break;
      case (tempToUnit==="C"):
      console.log("to C");
      rawTempNum = (rawTempNum - 32) * (5 / 9);
        break;
      case (tempToUnit==="K"):
      console.log("to K");
      rawTempNum = (rawTempNum - 32) * (5 / 9) + 273.15;
        break;
      default: console.log("Choose your 'to' unit!");
    }
      break;
    case (tempFromUnit==="C"):
    console.log(rawTempNum*3);
    switch (true) {
      case (tempToUnit==="F"):
      console.log("to F");
      rawTempNum = (rawTempNum * (9 / 5)) + 32;
        break;
      case (tempToUnit==="C"):
      console.log("to C");
      console.log("No conversion needed, bruhhhh");
        break;
      case (tempToUnit==="K"):
      console.log("to K");
      rawTempNum += 273.15;
        break;
      default: console.log("Choose your 'to' unit!");
    }
      break;
    case (tempFromUnit==="K"):
    console.log(rawTempNum*4);
    switch (true) {
      case (tempToUnit==="F"):
      console.log("to F");
      rawTempNum = rawTempNum - 273.15;
        break;
      case (tempToUnit==="C"):
      console.log("to C");
      rawTempNum -= 273.15;
        break;
      case (tempToUnit==="K"):
      console.log("to K");
      console.log("No conversion needed, bruhhhh");
        break;
      default: console.log("Choose your 'to' unit!");
    }
      break;
    default: console.log("Choose your 'from' unit!");
  }
  //MAN THAT DOM
  var resultDispText = document.getElementById('outputdisplay');


  //DISPLAY CONVERTED NUMBER
  rawTempNum = Math.round(rawTempNum);
  console.log(rawTempNum);
  resultDispText.innerHTML = rawTempNum + "&deg;" + tempToUnit;
}

//LINES TO EXECUTE WHEN "CLEAR" BUTTON CLICKED
var clearEvents = function() {
  var textboxContent = document.getElementById('temp-original');
  textboxContent.value = "";
}

//BUTTON EVENTS FOR "CONVERT" AND "CLEAR"
convertButton.addEventListener('click', convertEvents);
clearButton.addEventListener('click', clearEvents);
