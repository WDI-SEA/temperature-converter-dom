
function workingRadioButtons () {
    const fToCRadioButton = document.getElementById('fahrenheitButton')
    // const cToFRadioButton = document.getElementById('CelciusButton') 
        if (fToCRadioButton == true) {
            submitButton.addEventListener('click', () => {
                // wiriting whats in the form when the button is pressed
                let getTemp = document.getElementById('temp-input').value;
                //printing the convertion when the button is pressed
                let celciusEquation = Math.floor((((getTemp - 32) *5) /9))
                document.getElementById('temp-in-c').innerHTML = celciusEquation
            })
        } ;
        };



