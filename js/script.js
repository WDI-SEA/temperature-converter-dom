document.addEventListener('DOMContentLoaded', () => { // Waits for the page to load before running script.

    // When the 'CLEAR!!!!' button is clicked.
    document.querySelector('#clear-button').addEventListener('click', (event) => {
        event.preventDefault(); // Obviate page from refreshing. 
        document.querySelector('#inputBox').value = undefined; // Clear temperature input.
        let radioButtons = document.querySelectorAll('.radio-button');
        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].checked = false;
        }     
    });

    // When the 'Convert!' button is clicked. 
    document.querySelector('#convert-button').addEventListener('click', (event) => {
        event.preventDefault(); // Obviate page from refreshing. 
        let input = document.querySelector("#inputBox").value;
        let output = document.getElementById("results");
        console.log('input ' + input);
        if (document.getElementById('F').checked) {
            let newTemp = ( (input - 32) * 5/9 ).toFixed(2);
            output.innerText = `${newTemp} °C`;
        }
        else if (document.getElementById('C').checked) {
            let newTemp = ( (input * 9/5) + 32 ).toFixed(2);
            output.innerText = `${newTemp} °F`;       
        }
    });
});


// Winter background: https://cdn.pixabay.com/photo/2017/12/02/17/47/wintry-2993370_1280.jpg
// Desert background: https://cdn.pixabay.com/photo/2017/09/22/09/48/desert-2774945_1280.jpg
// Blue sky background: https://cdn.pixabay.com/photo/2017/03/22/17/40/hill-2165759_1280.jpg