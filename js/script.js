console.log('Hello, front end');

// assign relevant elements to variables
  // form elements:
    // <select id="measure">
var measure_select = document.getElementById("measure");
var measure = measure_select.value;
    // <input type="number">
var qty = document.getElementById("quantity").value;
    // <input type="radio">
var system = document.querySelector('input[name="system"]:checked').value;
  // responsive elements:
    // <span>
var unit_US = document.getElementById("unit-US");
var unit_metric = document.getElementById("unit-metric");
    // <h2 id="chat-h2">

    // <div class="output-box">
var result; // will be used for output
var output = document.getElementById("output-box");
// this object contains US and Metric
// unit abbr for each type of measurement
var these_units = { 'l': ['in', 'cm'],
'a': ['in²', 'cm²'],
'v': ['in³', 'cm³'],
'mg': ['lb', 'kg'],
'T': ['°F', '°C']
};

// these_units is used to set radio unit abbreviations
// this will initialize it according to the default select value
unit_US.textContent = these_units[measure][0];
unit_metric.textContent = these_units[measure][1];

// set HTML radio text to show unit abbreviation
// listen for change in select value
measure_select.addEventListener("change", function() {
  // update measure value
  measure = this.value;
  // update radio text
  unit_US.textContent = these_units[measure][0];
  unit_metric.textContent = these_units[measure][1];
});

function update_system() {
  system = document.querySelector('input[name="system"]:checked').value;
}

// these are conversion equations
// by measure and chosen system
function calculate() {
  // update qty
  qty = document.getElementById("quantity").value;
  // is qty empty?
  switch (measure) {
    case 'l':
      if (system === "US") {
        result = qty * 2.54;
      } else if (system === "metric") {
        result = qty / 2.54;
      }
      break;
    case 'a':
      if (system === "US") {
        result = qty * 2.54 ** 2;
      } else if (system === "metric") {
        result = qty / 2.54 ** 2;
      }
      break;
    case 'v':
      if (system === "US") {
        result = qty * 2.54 ** 3;
      } else if (system === "metric") {
        result = qty / 2.54 ** 3;
      }
      break;
    case 'mg':
      if (system === "US") {
        result = qty / 2.20462;
      } else if (system === "metric") {
        result = qty * 2.20462;
      }
      break;
    case 'T':
      if (system === "US") {
        result = (qty - 32) * (5/9);
      } else if (system === "metric") {
        result = qty * (9/5) + 32;
      }
      break;
  }
}
