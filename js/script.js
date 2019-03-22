
function scorchingEvents() {
  console.log("hot owie");
  var secToMakeRed = document.getElementById('resultholder');
  secToMakeRed.className = 'scorching white deg';
}

function temperateEvents() {
  console.log("normal meh");
  var secToMakeBeige = document.getElementById('resultholder');
  secToMakeBeige.className = 'temperate black deg';
}

function freezingEvents() {
  console.log("cold owie");
  var secToMakeBlue = document.getElementById('resultholder');
  secToMakeBlue.className = 'freezing white deg';
}

function belowZeroEvents() {
  var warningBelowAbsZero = document.createElement('p');
  warningBelowAbsZero.textContent = "Warning: Temperature is below absolute zero.";
  document.getElementById('resultsmessage').appendChild(warningBelowAbsZero);
  //USE DOM TO THROW WARNING COLORS IN MESSAGE DIV
}


//DOM VARIABLES FOR "CONVERT" AND "CLEAR" BUTTONS
var convertButton = document.getElementById('convert-button');
var clearButton = document.getElementById('clear-button');

var isMoreInputNeeded = false;

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
      console.log("No conversion needed, bruhhhh");
        break;
      case (tempToUnit==="C"):
      rawTempNum = (rawTempNum - 32) * (5 / 9);
        break;
      case (tempToUnit==="K"):
      rawTempNum = (rawTempNum - 32) * (5 / 9) + 273.15;
        break;
      default: console.log("Choose your 'to' unit!");
    }
      break;
    case (tempFromUnit==="C"):
    switch (true) {
      case (tempToUnit==="F"):
      rawTempNum = (rawTempNum * (9 / 5)) + 32;
        break;
      case (tempToUnit==="C"):
      console.log("No conversion needed, bruhhhh");
        break;
      case (tempToUnit==="K"):
      rawTempNum += 273.15;
        break;
      default: console.log("Choose your 'to' unit!");
    }
      break;
    case (tempFromUnit==="K"):
    switch (true) {
      case (tempToUnit==="F"):
      //y = (x-273.15)/(5/9) + 32
      rawTempNum = (rawTempNum - 273.15) * (9 / 5) + 32;
        break;
      case (tempToUnit==="C"):
      rawTempNum -= 273.15;
        break;
      case (tempToUnit==="K"):
      console.log("No conversion needed, bruhhhh");
        break;
      default: console.log("Choose your 'to' unit!");
    }
      break;
    default: console.log("Choose your 'from' unit!");
    isMoreInputNeeded = true;
  }
  //console.log(isMoreInputNeeded);
  isMoreInputNeeded = false;
  console.log(isMoreInputNeeded);
  if(isMoreInputNeeded === false) {
    //MAN THAT DOM
    var resultDispText = document.getElementById('outputdisplay');
    var resultsdiv = document.getElementById('resultholder');



    //DISPLAY CONVERTED NUMBER
    rawTempNum = Math.round(rawTempNum);
    console.log(rawTempNum);

    //CLEAR EXISTING RESULTS DISPLAYS
    var existingChildrensParentRes = document.getElementById('resultsbox');
    while (existingChildrensParentRes.firstChild) {
      existingChildrensParentRes.removeChild(existingChildrensParentRes.firstChild);
    }
    var existingChildrensParentMsg = document.getElementById('resultsmessage');
    while (existingChildrensParentMsg.firstChild) {
      existingChildrensParentMsg.removeChild(existingChildrensParentMsg.firstChild);
    }

    //DISPLAY NEW RESULTS
    var resultDispP = document.createElement('p');
    resultDispP.innerHTML = rawTempNum + "&deg;" + tempToUnit;
    document.getElementById('resultsbox').appendChild(resultDispP);

    //EXECUTE DIFFERENT DOM-FORMATTING BASED ON TEMP VALUE
    switch (true) {
      case (tempToUnit==="F"):
      console.log("made it F");
      switch (true) {
        case (rawTempNum > 80):
        scorchingEvents();
          break;
        case (rawTempNum <= 80 && rawTempNum > 32):
        temperateEvents();
          break;
        case (rawTempNum <= 32 && rawTempNum >= -460):
        freezingEvents();
          break;
        default: belowZeroEvents();
      }
        break;
      case (tempToUnit==="C"):
      console.log("made it C");
      switch (true) {
        case (rawTempNum > 27):
        scorchingEvents();
          break;
        case (rawTempNum <= 27 && rawTempNum > 0):
        temperateEvents();
          break;
        case (rawTempNum <= 0 && rawTempNum >= -273):
        freezingEvents();
          break;
        default: belowZeroEvents();
      }
        break;
      case (tempToUnit==="K"):
      console.log("made it K");
      switch (true) {
        case (rawTempNum > 290):
        scorchingEvents();
          break;
        case (rawTempNum <= 290 && rawTempNum > 273):
        temperateEvents();
          break;
        case (rawTempNum <= 273 && rawTempNum >= 0):
        freezingEvents();
          break;
        default: belowZeroEvents();
      }
        break;
      default: console.log("ERROR: temp measurement unit passed first nested switch statement set, but not the second");
    }
  }
}

//LINES TO EXECUTE WHEN "CLEAR" BUTTON CLICKED
var clearEvents = function() {
  var textboxContent = document.getElementById('temp-original');
  textboxContent.value = "";
}

//BUTTON EVENTS FOR "CONVERT" AND "CLEAR"
convertButton.addEventListener('click', convertEvents);
clearButton.addEventListener('click', clearEvents);
